Template.register.events({
	'submit .form-signup':function(event){
       var email = trimInput(event.target.email.value);
       var password = trimInput(event.target.password.value);
       var password2 = trimInput(event.target.password2.value);
       var first_name = trimInput(event.target.first_name.value);
       var last_name = trimInput(event.target.last_name.value);

       if ( isNotEmpty(email) &&
       	    isNotEmpty(password)&&
       	    isNotEmpty(first_name)&&
       	    isNotEmpty(last_name)&&
       	    isEmail(email) &&
       	    areValidPasswords(password,password2)
       	   ){

       Accounts.createUser({
       	 email:email,
       	 password:password,
       	 profile:{
       	 	first_name:first_name,
       	 	last_name:last_name
       	         }
       },

          function(err){
           if(err){
           	FlashMessages.sendError('There was an error with registration');
           }else{
           	FlashMessages.sendSuccess('Account Created! You are login in');
           	Router.go('/dashboard');
           }

       });
        
         }
       //prevent submit
       return false;
	}
});

//Validation Rules

//Trim Helper
var trimInput = function(val){
	 return val.replace(/^\s+|\s+$/gm,"");

}

//check for empty fields
isNotEmpty = function(value){
   if(value && value !==''){
   	return true;
   } 
   FlashMessages.sendError('Please fill in all fields');
   return false;
};

//Validate Email
isEmail = function(value){
    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (filter.test(value)) {
	return true;
     }
    FlashMessages.sendError('Please use a valid email address');
    return false;
    
};  

//check Passwrod Field
isValidPassword = function(password){
     if (password.length < 6 ){
     	FlashMessages.sendError('Password must be at least 6 Characters');
     	return false;
     }
     return true;
};


//Match Passwrod Field
areValidPasswords = function(password,confirm) {
     if (!isValidPassword(password)) {
     	return false;
     }
     if (password!==confirm){
     	FlashMessages.sendError('Passwords do not match!');
     	return false;
     }
     return true;
};