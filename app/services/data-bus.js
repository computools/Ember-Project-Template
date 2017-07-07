import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented,{
    sendData(data){
        this.trigger('data-comming', data);
    }
});
