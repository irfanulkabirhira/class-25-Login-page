// step 1: set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step 2:  prevent default behaviour (reloading browser)
    event.preventDefault();
    // step 3: get the phone and pin number --> input field er kichu nite value dea lage
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // to take the value of input and textarea we need to use value

    // Fokira Log-In
    if(phoneNumber === '999' && pinNumber === '1234'){
        console.log('You are logged in!');
        // To go the home.hmtl page
        window.location.href = 'home.html'
    }
    else{
        alert('Wrong phone number or pin');
    }

})