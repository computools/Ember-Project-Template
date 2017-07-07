import Ember from 'ember';
import RespondsToScroll from 'ember-responds-to/mixins/responds-to-scroll';

export default Ember.Component.extend(
    RespondsToScroll,{
        dataBus: Ember.inject.service(),
        pricingOpened: false,
        isOpened: false,
        isScrolled: false,
        tabletWidth: 991,
        actions: {
            toggleOpening: function (event) {
                if (this.isOpened)
                    this.set('isOpened', false);
                else
                    this.set('isOpened', true);
            },
            pricing: function (event) {
                this.set("pricingOpened", true);
                this.set('isOpened', false);
            }
        },
        scroll: function () {
            let offsetB = window.pageYOffset || document.documentElement.scrollTop;

            if (window.innerWidth  < this.tabletWidth)
                return;

            if (offsetB >= 80)
                this.set("isScrolled", true);
            else
                this.set("isScrolled", false);

        },
        init () {
            this._super(...arguments);

            const self = this;

            this.get('dataBus').on('data-comming', function(result){
                self.set('pricingOpened', false);
            });
        }
    });
