function trbl(prefix) {
  const rules = [];

  if (prefix) {
    rules.push(prefix);
    prefix = prefix + '-';
  } else {
    prefix = '';
  }

  return rules.concat([
    prefix + 'top',
    prefix + 'right',
    prefix + 'bottom',
    prefix + 'left',
  ]);
}

function startEnd(prefix) {
  return [prefix + '-start', prefix + '-end'];
}

function minMax(suffix) {
  return [suffix, 'min-' + suffix, 'max-' + suffix];
}

function inlineBlock(prefix) {
  return [prefix + '-inline', prefix + '-block'];
}

function border(infix) {
  if (infix) {
    infix = '-' + infix;
  } else {
    infix = '';
  }

  return [
    'border' + infix,
    'border' + infix + '-width',
    'border' + infix + '-style',
    'border' + infix + '-color',
    'border' + infix + '-radius',
  ];
}

const cssModules = [].concat(['composes']);

const reset = ['all'];

const positioning = []
  .concat(['position', 'z-index'])
  .concat(trbl())
  .concat(startEnd('inset-block'))
  .concat(startEnd('inset-inline'));

const displayAndBoxModel = []
  .concat(['display', 'overflow'])
  .concat(minMax('width'))
  .concat(minMax('height'))
  .concat(minMax('inline-size'))
  .concat(minMax('block-size'))
  .concat([
    'box-sizing',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'align-content',
    'align-items',
    'align-self',
    'justify-content',
    'order',
  ])
  .concat(trbl('padding'))
  .concat(startEnd('padding-block'))
  .concat(startEnd('padding-inline'))
  .concat(
    []
      .concat(border())
      .concat(border('top'))
      .concat(border('right'))
      .concat(border('bottom'))
      .concat(border('left'))
      .concat(border('block-start'))
      .concat(border('block-end'))
      .concat(border('inline-start'))
      .concat(border('inline-end'))
      .concat([
        'border-start-start-radius',
        'border-start-end-radius',
        'border-end-start-radius',
        'border-end-end-radius',
      ]),
  )
  .concat(trbl('margin'))
  .concat(startEnd('margin-block'))
  .concat(startEnd('margin-inline'));

// module.exports = {
//   plugins: "stylelint-order",
//   rules: {
//     "order/properties-order": [
//       []
//         .concat(cssModules)
//         .concat(reset)
//         .concat(positioning)
//         .concat(displayAndBoxModel),
//       { unspecified: "bottomAlphabetical" },
//     ],
//   },
// };
module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [
      [
        'composes',
        'all',
        'position',
        'z-index',
        'top',
        'right',
        'bottom',
        'left',
        'inset-block',
        'inset-block-start',
        'inset-block-end',
        'inset-inline',
        'inset-inline-start',
        'inset-inline-end',
        'display',
        'overflow',
        'width',
        'min-width',
        'max-width',
        'inline-size',
        'min-inline-size',
        'max-inline-size',
        'height',
        'min-height',
        'max-height',
        'block-size',
        'min-block-size',
        'max-block-size',
        'box-sizing',
        'flex',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-wrap',
        'align-content',
        'align-items',
        'align-self',
        'justify-content',
        'order',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'padding-block',
        'padding-block-start',
        'padding-block-end',
        'padding-inline',
        'padding-inline-start',
        'padding-inline-end',
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-radius',
        'border-top',
        'border-top-width',
        'border-top-style',
        'border-top-color',
        'border-top-radius',
        'border-right',
        'border-right-width',
        'border-right-style',
        'border-right-color',
        'border-right-radius',
        'border-bottom',
        'border-bottom-width',
        'border-bottom-style',
        'border-bottom-color',
        'border-bottom-radius',
        'border-left',
        'border-left-width',
        'border-left-style',
        'border-left-color',
        'border-left-radius',
        'border-block',
        'border-block-width',
        'border-block-style',
        'border-block-color',
        'border-block-radius',
        'border-block-start',
        'border-block-start-width',
        'border-block-start-style',
        'border-block-start-color',
        'border-block-start-radius',
        'border-block-end',
        'border-block-end-width',
        'border-block-end-style',
        'border-block-end-color',
        'border-block-end-radius',
        'border-inline',
        'border-inline-width',
        'border-inline-style',
        'border-inline-color',
        'border-inline-radius',
        'border-inline-start',
        'border-inline-start-width',
        'border-inline-start-style',
        'border-inline-start-color',
        'border-inline-start-radius',
        'border-inline-end',
        'border-inline-end-width',
        'border-inline-end-style',
        'border-inline-end-color',
        'border-inline-end-radius',
        'border-start-start-radius',
        'border-start-end-radius',
        'border-end-start-radius',
        'border-end-end-radius',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'margin-block',
        'margin-block-start',
        'margin-block-end',
        'margin-inline',
        'margin-inline-start',
        'margin-inline-end',
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
};
