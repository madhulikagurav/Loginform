
            // When the document is ready
    $(document).ready(function () {
                
          
               //validation rules adding for test
                //by default it will append a <label class="error> element to the invalid input
                //and will add a "error" class to the input

       $("#example1").validate({
                    rules: {
                        username:
				 {
                            		required: true,
                            		email: true
                        	 },  
                        password:
				 {
                            		required: true,
                            		minlength: 5
			
                        	} 
                   	    },
		        // Specify the validation error messages

        	   messages:
	 		{
		
            password:
				 {

			                required: "Please provide a password",
			
                minlength: "Your password must be at least 5 characters long"
		
                 },

		
            email: "Please Enter a valid E-mail address"
		            
		
        },
        

		

                });
            });
      




