import properties from './properties';
import { CSSProperties } from './CSSProperties';
let propsFiltered = properties.filter((p) => !p.title.includes('*'));
let cssProperties: CSSProperties = new CSSProperties(propsFiltered);
console.log(cssProperties);
export default cssProperties;
