import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        readClicked: function(book) {
            console.log('bookList.readClicked')
            this.get('onBookRead')(book);
        }
    }
});
