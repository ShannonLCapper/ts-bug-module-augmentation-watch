# Demo of Typescript module augmentation bug

## Repro

1. Run `yarn tsc --watch`
2. Change `fn` on line 4 of classnames.d.ts to return a `number` instead of a `string`

Expected: Type error on line 4 of index.ts: `Type 'number' is not assignable to type 'string'.`
Actual: No type error in CLI, though error does show in VSCode

## Updates work as expected when using module declaration instead of module augmentation

1. Comment out the import statement of classnames.d.ts, turning it into a module declaration instead of a module augmentation
2. Run `yarn tsc --watch`. An error shows up on line 1 of index.ts, saying `Module '"classnames"' has no exported member 'Argument'` (this is expected since the module declaration overrode all other exports from `classnames`)
3. Change `fn` on line 4 of classnames.d.ts to return a `number` instead of a `string`

Result: Type error on line 4 of index.ts: `Type 'number' is not assignable to type 'string'.`
