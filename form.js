/*jslint browser:true devel:true*/
// This 'flag' variable controls if we output debugging info to the console or not
var DEBUG = true;
/*global console:false, DEBUG:false, $:false*/
// The purpose of processFormData is to do final validation checks
var processFormData = function (event) {
  "use strict";
  // prevent the default behavior of the form submit event
  event.preventDefault();
  if (DEBUG) {
    console.log(event);
    console.log(this);
    var form = document.forms.post_plant;
    console.log(form);
  }

  var $form = $("#post_plant");
  // Validate the form
  $form.validate({
    rules : {
      // TODO: Make sure the planting date has been set by the user and is in dateISO format
	  // See: http://jqueryvalidation.org/dateISO-method/
	  
    },
    invalidHandler : function (event, validator) {
      // 'this' refers to the form
      var errors = validator.numberOfInvalids();
      if (errors) {
        var message = errors === 1 ? 'You missed 1 field. It has been highlighted' : 'You missed ' + errors + ' fields. They have been highlighted';
        $("div.error span").html(message);
        $("div.error").show("slow");
      } else {
        $("div.error").hide();
      }
    },
    submitHandler : function (form) {
      if (DEBUG) {
        console.log("Form was considered valid and normally would have been submitted");
      }
      // Normally this would include code like the line below to also submit the form
      // but we are not going to do that in this exercise.
      // form.submit();
      alert("Form was considered valid and normally would have been submitted.");
    }
  });

  // Check if the form is valid
  if ($form.valid()) {
    $("div.error").hide();
  }

  // returning false also stops the form from submiting
  return false;
};

// If the browser supports the date input type, don't do anything
// This code is cribbed from http://code.tutsplus.com/tutorials/quick-tip-cross-browser-datepickers-within-minutes--net-20236
var initDatePicker = function () {
  "use strict";
  var elem = document.createElement('input');
  elem.setAttribute('type', 'date');

  if (elem.type === 'text') {
    // TODO: The browser doesn't understand date input types, so use the jQuery UI Date Picker
	// with date format 'yy-mm-dd'

  }
};
// Initialize the jQuery UI plugin's DatePicker plugin for the planting time
initDatePicker();

// TODO: Initialize the default timepicker plugin for the planting time
// See: http://jonthornton.github.io/jquery-timepicker/

// Setup variables for using 
// Read: http://www.sitepoint.com/working-phone-numbers-javascript/
var telInput = $("#phone"),
    errorMsg = $("#error-msg"),
    validMsg = $("#valid-msg");

// TODO: initialise intlTelInput plugin to use autoFormat, autoPlaceholder, and to preventInvalidNumbers
// and don't forget to use utilsScript to load Google's libphonenumber utility (already included at
// js/vendor/intl-tel-input-master/lib/libphonenumber/build/utils.js ).
// See: http://jackocnr.com/lib/intl-tel-input/examples/gen/is-valid-number.html


// TODO: Below, make sure you use jQuery's show and hide methods!

// TODO: on blur: validate telInput
// if valid show validMsg
// if there is an error show errorMsg
telInput.blur(function () {

});

// TODO: on keydown: reset telInput, hide errorMsg and hide validMsg
telInput.keydown(function () {

});
