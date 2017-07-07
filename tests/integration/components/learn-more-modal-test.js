import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('learn-more-modal', 'Integration | Component | learn more modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{learn-more-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#learn-more-modal}}
      template block text
    {{/learn-more-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
