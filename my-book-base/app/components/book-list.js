import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onRead: function(book) {
            console.log("bookList.onRead: " + book.get('read'));
            this.get('onRead')(book)
        }
    }
});
