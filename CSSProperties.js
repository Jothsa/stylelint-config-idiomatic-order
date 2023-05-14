'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CSSProperties = void 0;
class CSSProperties {
  properties;
  constructor(props, duplicates = true) {
    this.properties = [];
    if (!duplicates) {
      props.forEach((p) => {
        if (!this.getPropertyNames().includes(p.property)) {
          this.add(p);
        }
      });
    } else {
      this.properties = props;
    }
  }
  getProperties(opts) {
    let props = [];
    const { name, title, nameExact = true, titleExact = false } = opts;
    if (name !== undefined && title !== undefined) {
      if (Array.isArray(name)) {
        if (Array.isArray(title)) {
          title.forEach((t) =>
            props.push(...this.getPropertiesByTitle(t, titleExact)),
          );
          name.forEach((n) => {
            // TODO could add rules to remove lc if exact but idk if it matters that much
            if (
              props.every((p) => p.property.toLowerCase() !== n.toLowerCase())
            )
              props = [...props, ...this.getPropertiesByName(n, nameExact)];
          });
        } else {
          name.forEach((n) => {
            props = [...props, ...this.getPropertiesByName(n, nameExact)];
          });
          return props.filter((p) =>
            // TODO add logic for exact opt
            p.title.toLowerCase().includes(title.toLowerCase()),
          );
        }
      } else if (Array.isArray(title)) {
        title.forEach((t) => {
          props = [...props, ...this.getPropertiesByTitle(t, titleExact)];
        });
        return props.filter((p) =>
          // TODO add logic for exact opt
          p.property.toLowerCase().includes(name.toLowerCase()),
        );
      } else {
        // TODO add logic for exact opt
        return this.getPropertiesByName(name).filter((p) =>
          p.title.toLowerCase().includes(title.toLowerCase()),
        );
      }
    } else if (name !== undefined && title === undefined) {
      return this.getPropertiesByName(name, nameExact);
    } else if (name === undefined && title !== undefined) {
      return this.getPropertiesByTitle(title, titleExact);
    }
    return this.properties;
  }
  getPropertyNames() {
    let names = [];
    this.properties.forEach((p) => {
      names.push(p.property);
    });
    return names;
  }
  getPropertiesByTitle(title, exact = false) {
    if (typeof title === 'string') {
      if (!exact) {
        return this.properties.filter((p) =>
          p.title.toLowerCase().includes(title.toLowerCase()),
        );
      } else {
        return this.properties.filter((p) => p.title === title);
      }
    } else {
      let props = [];
      title.forEach((t) => {
        props = [...props, ...this.getPropertiesByTitle(t)];
      });
      return props;
    }
  }
  getPropertiesByName(name, exact = false) {
    if (typeof name === 'string') {
      if (!exact) {
        return this.properties.filter((p) =>
          p.property.toLowerCase().includes(name.toLowerCase()),
        );
      } else {
        return this.properties.filter((p) => p.property === name.toLowerCase());
      }
    } else {
      let props = [];
      name.forEach((n) => {
        props = [...props, ...this.getPropertiesByName(n)];
      });
      return props;
    }
  }
  add(prop) {
    if (Array.isArray(prop)) {
      this.properties.push(...prop);
    } else {
      this.properties.push(prop);
    }
  }
}
exports.CSSProperties = CSSProperties;
