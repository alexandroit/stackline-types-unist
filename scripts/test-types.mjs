import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdirSync,rmSync,mkdtempSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import {compileConsumer} from './compile-consumer.mjs';
const metadata=JSON.parse(readFileSync('package.json','utf8'));
const upstream=metadata.name.replace('@stackline/types-','');
const consumer=path.resolve('.package-consumer');
rmSync(consumer,{recursive:true,force:true});mkdirSync(consumer);
if(process.argv[2]==='source') {
 compileConsumer(consumer,metadata.name,metadata.name,{minimum:true,source:true});
 console.log('Source declarations compiled with minimum and current TypeScript.');
} else {
 const temporary=mkdtempSync(path.join(os.tmpdir(),'stackline-types-'));
 try {
  const result=JSON.parse(execFileSync('npm',['pack','--ignore-scripts','--json','--pack-destination',temporary],{encoding:'utf8'}));
  const packed=Array.isArray(result)?result[0]:Object.values(result)[0];
  const archive=path.join(temporary,packed.filename);
  const actual=JSON.parse(execFileSync('tar',['-xOf',archive,'package/package.json'],{encoding:'utf8'}));assert.deepEqual(actual,metadata);
  for(const entry of packed.files) assert(['index.d.ts','package.json','LICENSE','README.md','UPSTREAM.md','CHANGELOG.md','NOTICE'].includes(entry.path),'Unexpected archive file: '+entry.path);
  for(const [kind,key,importName] of [['direct',metadata.name,metadata.name],['alias','@types/'+upstream,upstream]]) {
   const cwd=path.join(consumer,kind);mkdirSync(cwd);
   writeFileSync(path.join(cwd,'package.json'),JSON.stringify({name:'declaration-consumer-'+kind,version:'1.0.0',private:true,dependencies:{[key]:'file:'+archive},overrides:{'@types/node':'18.11.18'}}));
   execFileSync('npm',['install','--ignore-scripts','--no-audit','--no-fund'],{cwd,stdio:'inherit'});
   assert.equal(JSON.parse(readFileSync(path.join(cwd,'node_modules',key,'package.json'),'utf8')).name,metadata.name);
   compileConsumer(cwd,importName,kind==='alias'?upstream:metadata.name,{minimum:true});
  }
  console.log('Exact declaration tarball compiled with minimum/current TypeScript in isolated direct and alias consumers.');
 } finally {rmSync(temporary,{recursive:true,force:true})}
}
