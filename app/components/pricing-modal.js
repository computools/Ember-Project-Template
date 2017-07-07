import Ember from 'ember';

export default Ember.Component.extend({
    dataBus: Ember.inject.service(),
    actions: {
        closeModal: function (event) {
            this.get('dataBus').sendData(false);
        }
    }
});
