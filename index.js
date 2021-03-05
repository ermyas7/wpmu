(function main(){
    let isValid = false;

    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const password = document.querySelector('input[name="password"]');
    const submit = document.getElementById('submit');
    const eye = document.getElementById('password-visibility');

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleInput = function(evt){
        console.log(this)
        if(evt.target.value.length > 0){
            if(evt.target.name === 'name'){
                document.getElementById('name-extra').classList.add('content__extra--top__show');
            }else if(evt.target.name === 'email'){
                document.getElementById('email-extra').classList.add('content__extra--top__show');
                
                if(!validateEmail(evt.target.value)){
                    document.getElementById('email-extra').classList.add('color-red');
                    this.classList.add('content__input--invalid');;
                    document.getElementById('email-error').classList.add('show');  
                }else{
                    this.classList.remove('content__input--invalid');
                    document.getElementById('email-extra').classList.remove('color-red');
                    document.getElementById('email-error').classList.remove('show'); 
                }
            }
        }else{
            if(evt.target.name === 'name'){
                document.getElementById('name-extra').classList.remove('content__extra--top__show');
            }else if(evt.target.name === 'email'){
                document.getElementById('email-extra').classList.remove('content__extra--top__show');
                this.classList.remove('content__input--invalid');
            }

        }
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

    eye.addEventListener('click', togglePasswordVisibility);

})();