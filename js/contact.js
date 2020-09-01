jQuery(function() {
//----------------------------------------------------
// Contact Form 
//----------------------------------------------------
 jQuery('#main input#contact_submit').live("click",function(e) { 
		    e.preventDefault();
		var name = jQuery('input#name').val();
		var email = jQuery('input#email').val();
		var message = jQuery('textarea#message').val();
		var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
		var subject = jQuery('input#subject').val();
		var hasError = false;
		 if(name=='')
		 {
			 jQuery('[name="name"]').addClass('vaidate_error');
			 hasError = true;
		 }else{
			 jQuery('[name="name"]').removeClass('vaidate_error');
			 }
			 
		if(email=='')
		 {
			 jQuery('[name="email"]').addClass('vaidate_error');
			 hasError = true;
		 }else{
			if (!pattern.test(email)) {
				jQuery('[name="email"]').addClass('vaidate_error');
				 hasError = true;
			 }else{
				 jQuery('[name="email"]').removeClass('vaidate_error');
				 }
			 }

		if(message=="")
			 {
				 jQuery('[name="message"]').addClass('vaidate_error');
				 hasError = true;
			 }else{
				 jQuery('[name="message"]').removeClass('vaidate_error');
			}
		if(subject=="")
			 {
				 jQuery('[name="subject"]').addClass('vaidate_error');
				 hasError = true;
			 }else{
				 jQuery('[name="subject"]').removeClass('vaidate_error');
				 }
        if(hasError) { return; }
		else {		
				jQuery.ajax({
		            type: 'post',
		           	url: 'sendEmail.php',
		            data: 'name=' + name + '&email=' + email +'&subject='+ subject +'&message=' + message,

		            success: function(results) {	
		                jQuery('div#contact_response').html(results).css('display', 'block');		
		   
		         }
		     }); // end ajax
		}
    });
});