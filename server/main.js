import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
    // code to run on server at startup
    if(!Documents.findOne()) {

        var id = Documents.insert({"title":"My New Document"});
        //  Session.set("docid",id);
        // Standard start doc
    }
});

Meteor.publish("documents", function(){
    // #Todo can't fint the document again.
    // The ID is wrong
    return Documents.find({
        $or:[
            {isPrivate: {$ne:true}},
            {owner:this.userId}
        ]
    });
})

Meteor.publish("editingUsers", function(){
    return EditingUsers.find({});
})

Meteor.publish("comments", function(){
    return Comments.find({});
})
