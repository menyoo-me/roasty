import * as components from './components';

const RoastyComponentLibrary = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options = {}) {
    // components
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  },
};

export default RoastyComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(RoastyComponentLibrary);
}
