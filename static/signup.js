document.addEventListener('DOMContentLoaded', (event) => {
   
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const agreeBtn = document.getElementById('agree-btn');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const agree = agreeBtn.checked;
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
        console.log(agree);


        
        alert("button clicked");
    });
});
