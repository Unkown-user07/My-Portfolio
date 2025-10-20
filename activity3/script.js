
  const btnaboutme = document.getElementById('btn-aboutme');
  const divaboutme = document.getElementById('info');

  btnaboutme.addEventListener('click', function() {
    if(divaboutme.classList.contains('hide')){
        divaboutme.classList.remove('hide');
        btnaboutme.textContent = "show less";

    }else{
      divaboutme.classList.add('hide');
      btnaboutme.textContent = "about me";
      console.log('hideeee');
    }
  });