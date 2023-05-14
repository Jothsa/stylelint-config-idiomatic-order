import { cssProperties } from './getProperties';
// margin-inline-start start = suffix; inline = presuffix?
const directions = ['top', 'right', 'bottom', 'left'];
const logicalDirections = [
    'block',
    'block-start',
    'block-end',
    'inline',
    'inline-start',
    'inline-end',
];
const prefixes = [];
const suffix = [...directions, ...logicalDirections];
const modifiers = [];
const breakError = {};
function alphabeticalNoMods(prop) {
    let orderedProps = [];
    try {
        cssProperties.forEach((p) => {
            if (p.includes(prop)) {
                modifiers.forEach((mod) => {
                    if (!p.includes(mod)) {
                        orderedProps.push(p);
                        // lets the rest of the loop skip once a match is found
                        throw breakError;
                    }
                });
            }
        });
    }
    catch (err) {
        if (err !== breakError) {
            throw err;
        }
    }
    return orderedProps.sort();
}
function createOrder(prop) {
    // order matters here
    const modifiers = ['-top', '-right', '-bottom', '-left', '-start', '-end'];
    let orderedProps = [prop];
    /*
    foreach suffix in properties
    if prop + suffix in properties return props + suffix */
}
