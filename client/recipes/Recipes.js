Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.Recipes.events({
    'click .btn-new-recipe': function(){
        Session.set('newRecipe',true);
    }
});

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }
});
