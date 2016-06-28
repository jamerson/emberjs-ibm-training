import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        onRead: function(book) {
            console.log("index.onRead: " + book.get('read'));
            //book.save();
        }
    }
});
