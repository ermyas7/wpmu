(function main(){
    let isValid = false;

    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="name"]');
    const password = document.querySelector('input[name="name"]');
    const submit = document.getElementById('submit');

    const handleInput = function(evt){
        console.log(this)
        if(evt.target.value.length > 0){
            if(evt.target.name === 'name'){
                document.getElementById('name-extra').classList.add('content__extra--top__show');
            }else if(evt.target.name === 'email'){
                document.getElementById('email-extra').classList.add('content__extra--top__show');
            }
        }else{
            if(evt.target.name === 'name'){
                document.getElementById('name-extra').classList.remove('content__extra--top__show');
            }else if(evt.target.name === 'email'){
                document.getElementById('email-extra').classList.remove('content__extra--top__show');
            } 
        }
    }

    name.addEventListener('input', handleInput);
})();