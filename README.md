# @stackline/types-unist

> TypeScript definitions for unist.

[![npm version](https://img.shields.io/npm/v/@stackline/types-unist.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/types-unist)
[![license](https://img.shields.io/npm/l/@stackline/types-unist.svg?style=flat-square)](https://github.com/alexandroit/stackline-types-unist)
[![GitHub repository](https://img.shields.io/badge/GitHub-repository-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-types-unist)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/types-unist/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/types-unist/)** | **[npm](https://www.npmjs.com/package/@stackline/types-unist)** | **[Issues](https://github.com/alexandroit/stackline-types-unist/issues)** | **[Repository](https://github.com/alexandroit/stackline-types-unist)**

**Current package version:** `1.0.2`

---

## Why this package?

`@stackline/types-unist` is the Stackline-maintained distribution of `@types/unist@2.0.11`. It is an independent continuation of [@types/unist](https://github.com/DefinitelyTyped/DefinitelyTyped); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/types-unist@1.0.2` |
| API target | `@types/unist@2.0.11` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Types | `index.d.ts` |
| Runtime dependencies | `none` |

## Installation

```bash
npm install --save-dev @stackline/types-unist
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install --save-dev @types/unist@npm:@stackline/types-unist
```

Use the original `@types/*` alias for automatic TypeScript type discovery and existing `compilerOptions.types` settings. A scoped-only installation does not automatically expose the original type-package name.

## Usage and API reference

### Installation
> `npm install --save @stackline/types-unist`

### Summary
This package contains type definitions for unist (https://github.com/syntax-tree/unist).

### Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/unist/v2.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/unist/v2/index.d.ts)
````ts
/**
 * Syntactic units in unist syntax trees are called nodes.
 *
 * @typeParam TData Information from the ecosystem. Useful for more specific {@link Node.data}.
 */
export interface Node<TData extends object = Data> {
    /**
     * The variant of a node.
     */
    type: string;

    /**
     * Information from the ecosystem.
     */
    data?: TData | undefined;

    /**
     * Location of a node in a source document.
     * Must not be present if a node is generated.
     */
    position?: Position | undefined;
}

/**
 * Information associated by the ecosystem with the node.
 * Space is guaranteed to never be specified by unist or specifications
 * implementing unist.
 */
export interface Data {
    [key: string]: unknown;
}

/**
 * Location of a node in a source file.
 */
export interface Position {
    /**
     * Place of the first character of the parsed source region.
     */
    start: Point;

    /**
     * Place of the first character after the parsed source region.
     */
    end: Point;

    /**
     * Start column at each index (plus start line) in the source region,
     * for elements that span multiple lines.
     */
    indent?: number[] | undefined;
}

/**
 * One place in a source file.
 */
export interface Point {
    /**
     * Line in a source file (1-indexed integer).
     */
    line: number;

    /**
     * Column in a source file (1-indexed integer).
     */
    column: number;
    /**
     * Character in a source file (0-indexed integer).
     */
    offset?: number | undefined;
}

/**
 * Util for extracting type of {@link Node.data}
 *
 * @typeParam TNode Specific node type such as {@link Node} with {@link Data}, {@link Literal}, etc.
 *
 * @example `NodeData<Node<{ key: string }>>` -> `{ key: string }`
 */
export type NodeData<TNode extends Node<object>> = TNode extends Node<infer TData> ? TData : never;

/**
 * Nodes containing other nodes.
 *
 * @typeParam ChildNode Node item of {@link Parent.children}
 */
export interface Parent<ChildNode extends Node<object> = Node, TData extends object = NodeData<ChildNode>>
    extends Node<TData>
{
    /**
     * List representing the children of a node.
     */
    children: ChildNode[];
}

/**
 * Nodes containing a value.
 *
 * @typeParam Value Specific value type of {@link Literal.value} such as `string` for `Text` node
 */
export interface Literal<Value = unknown, TData extends object = Data> extends Node<TData> {
    value: Value;
}

````

### Additional Details
 * Last updated: Thu, 15 Aug 2024 02:18:53 GMT
 * Dependencies: none

### Credits
These definitions were written by [bizen241](https://github.com/bizen241), [Jun Lu](https://github.com/lujun2), [Hernan Rajchert](https://github.com/hrajchert), [Titus Wormer](https://github.com/wooorm), [Junyoung Choi](https://github.com/rokt33r), [Ben Moon](https://github.com/GuiltyDolphin), and [JounQin](https://github.com/JounQin).

## Credits and original authors

- Original project: [@types/unist](https://github.com/DefinitelyTyped/DefinitelyTyped).
- bizen241.
- Jun Lu.
- Hernan Rajchert.
- Titus Wormer.
- Junyoung Choi.
- Ben Moon.
- JounQin.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-types-unist).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
