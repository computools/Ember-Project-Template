import Ember from 'ember';

export default Ember.Component.extend({
    dataBus: Ember.inject.service(),
    learnMoreOpened: false,
    init () {
        this._super(...arguments);

        const self = this;

        this.get('dataBus').on('data-comming', function(result){
            self.set('learnMoreOpened', false);
        });
    },
    actions: {
        learnMore: function (event) {
            this.set("learnMoreOpened", true);
        }
    }
});
