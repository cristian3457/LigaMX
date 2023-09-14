window.onload=function(){
    const EMAIL = document.getElementById('email');
    const PASS = document.getElementById('password');
    let EmailValido = false;
    let PassValido = false;
    const PASSHELPBLOCK = document.getElementById('passHelpBlock');
    const EMAILHELPBLOCK = document.getElementById('emailHelpBlock');
    const BTNINICIARSESION = document.getElementById('iniciarSesion');
    BTNINICIARSESION.setAttribute('disabled', 'true');
    const EMAILREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const REMEMBERUSER = document.getElementById('divRemember');

    EMAIL.addEventListener('keyup',function(){
      if (EMAILREGEX.test(this.value)) { 
        EMAIL.style.border = '2px solid green'; 
        EmailValido = true;
        habilitarBotonLogin(EmailValido,PassValido)
        EMAILHELPBLOCK.style.display = 'none';
      }else{
        EMAIL.style.border = '2px solid red'; 
        EmailValido = false;
        habilitarBotonLogin(EmailValido,PassValido)
        EMAILHELPBLOCK.style.display = 'block';
      }
    })


    PASS.addEventListener('keyup',function(){
      if (this.value.trim().length >= 8) {
        PASS.style.border = '2px solid green';
        PassValido = true;
        habilitarBotonLogin(EmailValido,PassValido)
        PASSHELPBLOCK.style.display = 'none'; 
      }else{
        PASS.style.border = '2px solid red';
        PassValido = false;
        habilitarBotonLogin(EmailValido,PassValido)
        PASSHELPBLOCK.style.display = 'block';
      }
    })

    function habilitarBotonLogin(EmailValido,PassValido){
      if (EmailValido && PassValido){
        BTNINICIARSESION.disabled = false;
        REMEMBERUSER.style.display = 'block';
        return;
      }
      BTNINICIARSESION.disabled = true;
      REMEMBERUSER.style.display = 'none';
    }

    BTNINICIARSESION.addEventListener('click', function(e){
      e.preventDefault();
      if (!EmailValido || !PassValido){
        BTNINICIARSESION.disabled = true;
        REMEMBERUSER.style.display = 'none';
        return;
      }

    }) 

  }
