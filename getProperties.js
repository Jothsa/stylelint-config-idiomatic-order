'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const properties_1 = __importDefault(require('./properties'));
const CSSProperties_1 = require('./CSSProperties');
let propsFiltered = properties_1.default.filter((p) => !p.title.includes('*'));
let cssProperties = new CSSProperties_1.CSSProperties(propsFiltered);
console.log(cssProperties);
exports.default = cssProperties;
