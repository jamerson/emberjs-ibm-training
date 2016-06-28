import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['col-sm-6 col-md-4'],

    bookTitle: Ember.computed('book.read', function() {
        return this.get('book.read') === true? this.get('book.title') + '(OK)': this.get('book.title');
    }),

    actions: {
        readClicked: function() {
            console.log("bookCard.readClicked");
            this.toggleProperty('book.read')
            this.get('onRead')(this.get('book'));
        }
    }
});
