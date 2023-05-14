import cssProperties from './getProperties';
// margin-inline-start start = suffix; inline = infix
const directions = ['top', 'right', 'bottom', 'left'];
const logicalDirections = [
  'block',
  'block-start',
  'block-end',
  'inline',
  'inline-start',
  'inline-end',
];
// const prefixes: string[] = ['min', 'max'];
// const infix: string[] = [];
// const suffix: string[] = [...directions, ...logicalDirections];
// const modifiers: string[] = [];

// names and their order take precedence, then go by title alphabetically
const cssModules = { names: ['composes'] };
const reset = { names: ['all'] };

const positioning = {
  names: [
    'position',
    'z-index',
    ...trbl(),
    ...startEnd(['inset-block', 'inset-inline']),
  ],
  titles: ['positioning'],
};
const displayAndBoxModel = {
  names: [
    'display',
    'overflow',
    ...minMax(['width', 'inline-size', 'height', 'block-size']),
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
    ...trbl('padding'),
    ...startEnd(['padding-block', 'padding-inline']),
    ...border(),
    ...border([...trbl(), ...startEnd(['block', 'inline'])]),
    'border-start-start-radius',
    'border-start-end-radius',
    'border-end-start-radius',
    'border-end-end-radius',
    ...trbl('margin'),
    ...startEnd(['margin-block', 'margin-inline']),
  ],
  titles: ['display', 'layout', 'box model', 'overflow', 'contain'],
};
// const order = {
//   reset: { names: ['all'] },
//   positioning: {
//     names: [
//       'position',
//       'z-index',
//       trbl(),
//       startEnd('inset-block'),
//       startEnd('inset-inline'),
//     ],
//     titles: ['positioning'],
//   },
//   display: {
//     titles: ['display', 'layout', 'box model', 'overflow', 'contain'],
//   },
// };

// const breakError = {};

// function filterProps(text: string, properties: string[]): string[] {
//   return properties.filter((p) => p.includes(text));
// }

// function alphabeticalNoMods(prop: string, properties: string[]): string[] {
//   let orderedProps: string[] = [];
//   try {
//     properties.forEach((p) => {
//       if (p.includes(prop)) {
//         modifiers.forEach((mod) => {
//           if (!p.includes(mod)) {
//             orderedProps.push(p);
//             // lets the rest of the loop skip once a match is found
//             throw breakError;
//           }
//         });
//       }
//     });
//   } catch (err) {
//     if (err !== breakError) {
//       throw err;
//     }
//   }
//   return orderedProps.sort();
// }

// function createOrder(prop: string, modifiers: string[], properties: string[]) {
// order matters here
// const modifiers = ['-top', '-right', '-bottom', '-left', '-start', '-end'];
// let orderedProps = [prop];
/*
  foreach suffix in properties
  if prop + suffix in properties return props + suffix */
// }

function trbl(prefix?: string | string[]) {
  const rules = [];

  if (Array.isArray(prefix)) {
    const arr: string[] = [];
    prefix.forEach((p) => arr.push(...trbl(p)));
    return arr;
  }

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

// ? block inline or inline block?
// function trblbi(prefix: string | string[]) {
//   if (Array.isArray(prefix)) {
//     const arr: string[] = [];
//     prefix.forEach((p) => arr.push(...trblib(p)));
//     return arr;
//   } return [...trbl(prefix), ...inlineBlock(prefix)];
// }

function startEnd(prefix: string | string[]) {
  if (Array.isArray(prefix)) {
    const arr: string[] = [];
    prefix.forEach((p) => arr.push(...startEnd(p)));
    return arr;
  }
  return [prefix, prefix + '-start', prefix + '-end'];
}

function minMax(suffix: string | string[]) {
  if (Array.isArray(suffix)) {
    const arr: string[] = [];
    suffix.forEach((s) => arr.push(...minMax(s)));
    return arr;
  }
  return [suffix, 'min-' + suffix, 'max-' + suffix];
}

function inlineBlock(prefix: string | string[]) {
  if (Array.isArray(prefix)) {
    const arr: string[] = [];
    prefix.forEach((p) => arr.push(...inlineBlock(p)));
    return arr;
  }
  return [prefix + '-inline', prefix + '-block'];
}

function border(infix?: string | string[]) {
  if (Array.isArray(infix)) {
    const arr: string[] = [];
    infix.forEach((i) => arr.push(...border(i)));
    return arr;
  } else if (infix) {
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

function createRules() {
  console.log([
    ...cssModules.names,
    ...reset.names,
    ...positioning.names,
    ...displayAndBoxModel.names,
  ]);
}

createRules();
