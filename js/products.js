document.getElementById("dugme").addEventListener("click",function(){
    document.getElementById("popup").style.display="block";
});
// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='poruci']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        ime: "required",
        prezime: "required",
        ulica: "required",
      },
      // Specify validation error messages
      messages: {
        ime: "Molim Vas unesite ime",
        prezime: "Molim Vas unesite prezime",
        ulica:"Molim Vas unesite ulicu",
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
          let vrednost;
          let x=document.getElementById("ve");
          let y;
          for (let i = 0; i < x.length; i++) if(x.options[i].selected) y=x[i].value;

            if (document.getElementById('brzo').checked)vrednost = document.getElementById('brzo').value;
            else vrednost=document.getElementById('sporo').value;
          alert("Uspesno ste porucili patike "+document.getElementById("x").innerHTML+" "+y+" po ceni:"+document.getElementById("ce").innerHTML+"+"+vrednost+"din dostava");
        form.submit();
      }
    });
  });