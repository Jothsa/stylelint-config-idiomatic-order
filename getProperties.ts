import properties from './properties';
let propsFiltered = properties.filter((p) => !p.title.includes('*'));
let cssProperties: string[] = [];
propsFiltered.forEach((prop) => {
  // could add logic here to filter based on status if desired
  if (!cssProperties.includes(prop.property)) {
    cssProperties.push(prop.property);
  }
});
console.log(cssProperties);
export default cssProperties;
