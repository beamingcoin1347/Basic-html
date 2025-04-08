document.getElementById('registrationForm').onsubmit= function(event){
    event.preventDefault();

    let isValid=true;
    const fn =document.getElementById('fullName').value;
    if (!fn.match(/^[a-zA-Z\s]*$/)){
        isValid=false;
        document.getElementById('fullNameError').textContent ="full name must be a character from a-z";
    }
    else {
        document.getElementById('fullNameError').textContent='';
    }

    const email=document.getElementById('email').value;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        isValid=false;
        document.getElementById('emailError').textContent="Enter valid email id";
    }
    else {
        document.getElementById('emailError').textContent='';
    }

    const password=document.getElementById('password').value;
    if(password.length<8) {
        isValid=false;
        document.getElementById('passwordError').textContent="Password must be eight letters";
    }
    else {
        document.getElementById('passwordError').textContent='';
    }

    const confirmpassword=document.getElementById('confirmpassword').value;
    if(confirmpassword != password){
        isValid=false;
        document.getElementById('confirmPasswordError').textContent='Both passwords should match';
    }
    else {
        document.getElementById('confirmPasswordError').textContent='';
    }

    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').textContent = "Phone number must be exactly 10 digits.";
    } else {
        document.getElementById('phoneError').textContent = '';
    }
    
    const formMessage = document.getElementById('formMessage');
    if (isValid) {
      formMessage.textContent = 'Registration successful!';
      formMessage.className = 'success';
    } else {
      formMessage.textContent = 'Please fix the errors above.';
      formMessage.className = 'error';
    }
    
  
    
}
