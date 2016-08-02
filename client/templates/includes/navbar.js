Template.navbar.events({
	'click .logout-btn':function(event){
           Meteor.logout(function(){
           	  if(err){
           	  	FlashMessages.sendError(err.reason);
           	  }else{
           	  	FlashMessages.sendSuccess('You are not logout');
           	  	Router.go('/');
           	  }
           });
	}
});