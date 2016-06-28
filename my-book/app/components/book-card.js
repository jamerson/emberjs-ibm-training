import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['col-sm-6 col-md-4'],
    bookTitleRead: Ember.computed('book.title', 'book.read', function() {
        return this.get('book.read') === true? this.get('book.title') + " (OK)": this.get('book.title');
    }),

    actions: {
        onRead: function() {
            console.log('bookCard.onRead');
            this.toggleProperty('book.read');
            this.get('readClicked')(this.get('book'));
        }
    }
});
