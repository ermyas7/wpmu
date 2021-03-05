(function main(){
    let isValid = false;

    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const password = document.querySelector('input[name="password"]');
    const submit = document.getElementById('submit');
    const eye = document.getElementById('password-visibility');
    const describe = document.getElementById('describe');

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInput = function(){
        if((name.value.length > 0) && validateEmail(email.value) && (password.value.length >= 8) && (describe.value)){
            submit.classList.add('btn--valid');
        }else{
            submit.classList.remove('btn--valid');
        }
    }


    const handleInput = function(evt){
        const {name, value} = evt.target;
        if(value.length > 0){
            if(name === 'name'){
                document.getElementById('name-extra').classList.add('content__extra--top__show');
            }else if(name === 'email'){
                document.getElementById('email-extra').classList.add('content__extra--top__show');
                
                if(!validateEmail(value)){
                    document.getElementById('email-extra').classList.add('color-red');
                    this.classList.add('content__input--invalid');;
                    document.getElementById('email-error').classList.add('show');
                    document.getElementById('email-invalid').classList.remove('content__eye-hidden');
                }else{
                    this.classList.remove('content__input--invalid');
                    document.getElementById('email-extra').classList.remove('color-red');
                    document.getElementById('email-error').classList.remove('show');
                    document.getElementById('email-invalid').classList.add('content__eye-hidden'); 
                }
            }else if(name === 'password'){
                document.getElementById('password-extra').classList.add('content__extra--top__show');
                if(value.length < 8){
                    this.classList.add('content__input--invalid');
                    document.getElementById('password-extra').classList.add('color-red');
                }else{
                    this.classList.remove('content__input--invalid');
                    document.getElementById('password-extra').classList.remove('color-red');
                }
            }
        }else{
            if(name === 'name'){
                document.getElementById('name-extra').classList.remove('content__extra--top__show');
            }else if(name === 'email'){
                document.getElementById('email-extra').classList.remove('content__extra--top__show');
                this.classList.remove('content__input--invalid');
            }

        }

        validateInput();
    }

    const togglePasswordVisibility = function(evt){
        console.log(this);
        if(password.type==='password'){
            password.setAttribute('type', 'text');
            this.classList.add('content__show');
            this.classList.remove('content__hide');
        }else if(password.type==='text'){
            password.setAttribute('type', 'password');
            this.classList.add('content__hide');
            this.classList.remove('content__show');
        }
    }

    name.addEventListener('input', handleInput);
    email.addEventListener('input', handleInput);
    password.addEventListener('input', handleInput);
    describe.addEventListener('change', validateInput);
    eye.addEventListener('click', togglePasswordVisibility);

})();