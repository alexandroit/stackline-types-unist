import type { Node, Parent, Literal, Position } from '__PACKAGE__';
const position: Position = {start:{line:1,column:1},end:{line:1,column:5,offset:4}};
const node: Node<{custom:string}> = {type:'custom',data:{custom:'yes'},position};
const parent: Parent = {type:'root',children:[node]};
const literal: Literal = {type:'text',value:'hello'};
// @ts-expect-error points require numeric lines
const bad: Position = {start:{line:'1',column:1},end:{line:1,column:1}};
