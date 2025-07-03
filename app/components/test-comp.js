import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
  },

  didRender() {
    this._super(...arguments);
    console.log('test-comp.didRender');
  },

  willDestroyElement() {
    this._super(...arguments);
    console.log('test-comp.willDestroyElement');
  },
});
