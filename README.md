# stylelint + idiomatic-css = ❤️

This is a fork of the original. I updated it with logical properties (thanks to @JulienW) and other features/qol. I have big plans, but we'll see if I end up implementing them.

It should work, but I forgot to make a dev branch whoops

Order your styles based on [idiomatic-css](https://github.com/necolas/idiomatic-css#declaration-order).

## Installation

```sh
npm install --save-dev @jothsa/stylelint-config-idiomatic-order
```

Or use pnpm

```sh
pnpm add --D @jothsa/stylelint-config-idiomatic-order
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "@jothsa/stylelint-config-idiomatic-order"
}
```

You can easily [extend](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#extends) the config to your needs.

## [License](LICENSE)
