
 document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM fully loaded and parsed');
            const form = document.getElementById('signupForm');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm_password');
            const agreeBtn = document.getElementById('agree-btn');
            const submitBtn = document.getElementById('submit');
          

            form.addEventListener('submit', function(event) {
                event.preventDefault();

                console.log('Submit button clicked');

                const emailValue = email.value;
                const passwordValue = password.value;
                const confirmPasswordValue = confirmPassword.value;
                const agreeValue = agreeBtn.checked;
               

                console.log(`Email: ${emailValue}`);
                console.log(`Password: ${passwordValue}`);
                console.log(`Confirm Password: ${confirmPasswordValue}`);
                console.log(`Agree: ${agreeValue}`);

                if (emailValue && passwordValue && confirmPasswordValue && agreeValue) {
                    if (passwordValue === confirmPasswordValue) {
                        alert(`Email: ${emailValue}, Password: ${passwordValue}`);
                    } else {
                        alert('Passwords do not match');
                    }
                } else {
                    alert('Please fill out all fields and agree to the terms');
                }
            });
        });