

    document.getElementById('close').addEventListener('click', function(){
        document.getElementById('main').classList.add('op')
        document.getElementById('main').style.border = 'transparent'
        document.getElementById('show').style.opacity = 1
    })
    document.getElementById('show').addEventListener('click', function(){
        document.getElementById('main').classList.remove('op')
        document.getElementById('main').style.width = '300px'
        document.getElementById('main').style.height = '550px'
        document.getElementById('main').style.border = '1px solid darkblue'
        document.getElementById('show').style.opacity = 0

    })

    // end of show and hide click 

    document.getElementById('login').addEventListener('click', (e)=>{
        
        let flag = 0
        let _mail = document.getElementById('user')
        let _pass = document.getElementById('pass')
        let _pass2 = document.getElementById('pass2')
        let _alert = document.getElementById('error')
        let _alert2 = document.getElementById('erroruser')
        
        _alert.innerHTML = ''
        _alert2.innerHTML = ''
        _mail.style.border = 'transparent'
        _pass.style.border = 'transparent'
        _pass2.style.border = 'transparent'
    

        if(_mail.value == '' || _mail.value == '<script' || (_mail.value.search(/<script/) )>=0){
            _alert2.innerHTML = 'username is empty !'
            _mail.style.border = '2px solid red'
            flag++
        }else{
            if(
                ((_mail.value.search(/[A-Z]/)) == -1) ||
                ((_mail.value.search(/[0-9]/)) > -1) ||
                ((_mail.value.search(/[!@#$%^&*=+?`~]/)) > -1)
            ){
                _alert2.innerHTML = 'your username is not valid !'
                _mail.style.border = '2px solid red'
                flag++
            }
        }

        // end of email section 

        if(_pass.value == '' || (_pass.value.search(/<script/) )>=0 ){
            _alert.innerHTML = 'password is empty !'
            _pass.style.border = '2px solid red'
            _pass2.style.border = '2px solid red'
            flag++
        }else{
            if(
                (_pass.value.search(/[0-9]/) < 0) ||
                (_pass.value.search(/[!@#$%^&*`~=+?]/) < 0) ||
                ((_pass.value.search(/[A-Z]/)) == -1) ||
                (_pass.value.length < 8 )
            ){
                _alert.innerHTML = 'password is weak !'
                _pass.style.border = '2px solid red'
                _pass2.style.border = '2px solid red'
                flag++
            }
        }

        // end of pass section 

        if(_pass.value != _pass2.value){
            _pass.style.border = '2px solid red'
            _pass2.style.border = '2px solid red'
            _alert.innerHTML = 'passwords are not same !'
            flag ++
        }       

        // end of pass2 section 

        if(flag == 0){
            document.getElementById('pop').style.width = '600px'
            document.getElementById('pop').style.height = '400px'
            document.getElementById('pop').style.border = '1px solid green'
        }
        e.preventDefault()
    })


    document.getElementById('popclose').addEventListener('click', function(){
        document.getElementById('pop').style.height = 0
        document.getElementById('pop').style.width = 0
    })