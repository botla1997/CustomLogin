function makePwdToggler(pwd){
    // Create show-password checkbox
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    var id = pwd.id + 'toggler';
    checkbox.setAttribute('id', id);
  
    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.appendChild(document.createTextNode('show password'));
  
    var div = document.createElement('div');
    div.appendChild(checkbox);
    div.appendChild(label);
  
    // Add show-password checkbox under password input
    pwd.insertAdjacentElement('afterend', div);
  
    // Add toggle password callback
    function toggle(){
      if(pwd.type === 'password'){
        pwd.type = 'text';
      } else {
        pwd.type = 'password';
      }
    }
    checkbox.onclick = toggle;
    // For non-mouse usage
    checkbox.onkeydown = toggle;
  }
  
  function setupPwdTogglers(){
    var pwdInputs = document.querySelectorAll('input[type=password]');
    for (var i = 0; i < pwdInputs.length; i++) {
      makePwdToggler(pwdInputs[i]);
    }
  }
  
  setupPwdTogglers();