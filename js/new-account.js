window.onload=function(){
    const EMAIL = document.getElementById('email');
    const PASS = document.getElementById('password');
    const CONFIRMPASS = document.getElementById('confirmPassword');
    let EmailValido = false;
    let PassValido = false;
    let ConfirmPassValido = false;
    const PASSHELPBLOCK = document.getElementById('passHelpBlock');
    const CONFIRMPASSHELPBLOCK = document.getElementById('confirmPassHelpBlock');
    const EMAILHELPBLOCK = document.getElementById('emailHelpBlock');
    const BTNCREATEACCOUNT = document.getElementById('createAccount');
    BTNCREATEACCOUNT.setAttribute('disabled', 'true');
    const EMAILREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const REMEMBERUSER = document.getElementById('divRemember');
    let pass = "";
    let confirmPass = "";

    EMAIL.addEventListener('keyup',function(){
      if (EMAILREGEX.test(this.value)) { 
        EMAIL.style.border = '2px solid green'; 
        EmailValido = true;
        habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido)
        EMAILHELPBLOCK.style.display = 'none';
      }else{
        EMAIL.style.border = '2px solid red'; 
        EmailValido = false;
        habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido)
        EMAILHELPBLOCK.style.display = 'block';
      }
    })


    PASS.addEventListener('keyup',function(){
      if (this.value.trim().length >= 8) {
        PASS.style.border = '2px solid green';
        PassValido = true;
        habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido)
        PASSHELPBLOCK.style.display = 'none'; 
      }
      else{
        PASS.style.border = '2px solid red';
        PassValido = false;
        habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido)
        PASSHELPBLOCK.style.display = 'block';
      }
      pass = this.value.trim();
      if(pass.length >= 8 && confirmPass.length >= 8){
        if(pass !== confirmPass){
          CONFIRMPASS.style.border = '2px solid red';
          CONFIRMPASSHELPBLOCK.style.display = 'block';
          CONFIRMPASSHELPBLOCK.textContent = 'Los valores de las contraseñas no son iguales';
          habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido);
          return;
        }
        CONFIRMPASS.style.border = '2px solid green';
        CONFIRMPASSHELPBLOCK.style.display = 'none';
        habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido)
      }
    })

    CONFIRMPASS.addEventListener('keyup',function(){
      if (this.value.trim().length >= 8) {
        CONFIRMPASS.style.border = '2px solid green';
        ConfirmPassValido = true;
        habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido)
        CONFIRMPASSHELPBLOCK.style.display = 'none'; 
      }
      else{
        CONFIRMPASS.style.border = '2px solid red';
        ConfirmPassValido = false;
        habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido)
        CONFIRMPASSHELPBLOCK.style.display = 'block';
      }
      confirmPass = this.value.trim();
      if(pass.length >= 8 && confirmPass.length >= 8){
        if(pass !== confirmPass){
          CONFIRMPASS.style.border = '2px solid red';
          CONFIRMPASSHELPBLOCK.style.display = 'block';
          CONFIRMPASSHELPBLOCK.textContent = 'Los valores de las contraseñas no son iguales';
          habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido);
          return;
        }
        CONFIRMPASS.style.border = '2px solid green';
        CONFIRMPASSHELPBLOCK.style.display = 'none';
        habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido);
      }
    })

    function habilitarBotonLogin(EmailValido,PassValido,ConfirmPassValido){
      if (EmailValido && PassValido && ConfirmPassValido && pass === confirmPass){
        BTNCREATEACCOUNT.disabled = false;
        REMEMBERUSER.style.display = 'block';
        return;
      }
      BTNCREATEACCOUNT.disabled = true;
      REMEMBERUSER.style.display = 'none';
    }

    BTNCREATEACCOUNT.addEventListener('click', function(e){
      e.preventDefault();
      if (!EmailValido || !PassValido || !ConfirmPassValido && pass !== confirmPass){
        BTNCREATEACCOUNT.disabled = true;
        REMEMBERUSER.style.display = 'none';
        return;
      }

    }) 
    
  }
