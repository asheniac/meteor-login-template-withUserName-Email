Router.configure({
	layoutTemplate:'form_layout'
});

Router.map(function(){
	//login
	this.route('login',{
		path:'/login',
		template:'login'
	})
     //register
    this.route('register',{
		path:'/register',
		template:'register'
	})

	//dashboard
	   this.route('dashboard',{
	   	layoutTemplate:'dashboard_layout',
		path:'/dashboard',
		template:'dashboard',
		//login 
		onBeforeAction:function(){
			if(Meteor.user()== null){
				Router.go('/login');
			}
			this.next();
		}
	})

});