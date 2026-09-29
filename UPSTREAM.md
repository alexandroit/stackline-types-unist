# Upstream and review

- Source: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/b3ce4d375bef47c39a1bf59883ad1e8486554a2c/types/unist/v2
- Published baseline: `@types/unist@2.0.11` (2024-08-15T02:19:24.090Z).
- Upstream tarball integrity: `sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==`.
- `index.d.ts` was compared byte-for-byte with that commit and matched before maintenance changes.
- This standalone snapshot repository preserves original source content, contributors and license, but does **not** claim to preserve the DefinitelyTyped monorepo Git history.
- Only original-parent direct dependencies are in scope; dependencies of this declaration package are not recursively forked.

## Issue review

GitHub search on 2026-09-29 used `repo:DefinitelyTyped/DefinitelyTyped is:issue is:open "unist"` and the corresponding closed query. Counts: open: 0 results (collected 0), closed: 2 results (collected 2). Search results can contain unrelated packages; they are not evidence that every result is a defect here. Archived search responses and baseline comparisons are retained in the release research evidence. No issue was posted or modified.

Closed #31470 concerns TypeScript2 versus unknown in early unist2 releases. This selected version explicitly requires TypeScript4.8; the minimum-compiler test verifies that existing contract. #71375 is registry availability, not declaration behavior.

## Validation

Real declaration usage and negative type assertions are compiled with TypeScript 4.8.4 and 5.9.3, with `strict: true` and `skipLibCheck: false`, from source and isolated direct/alias tarball installs. CI also checks the complete dependency audit, CodeQL, package contents and exact CI archive identity before GitHub-only publication. Registry verification compiles direct and aliased installs rather than importing these type-only packages as JavaScript.
