FlowRouter.route('/',{
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book',{
    name: 'recipe-book',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});

FlowRouter.route('/recipe/:id',{
    name: 'recipe-book',
    action() {
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});
