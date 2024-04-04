const invoke = window.__TAURI__.invoke;
const someString="IDK_What_I'm_Doing";
invoke('greet', {name: someString}).then((message) => console.log(message));


var resizeable = document.querySelector('.sidr'),
    sidebar = document.getElementById('sidebar');

function resizer(sidebar,resizeable){
  var x,w;

  function rs_mousedownHandler(e){
    x=e.clientX;
    var sbwidth = window.getComputedStyle(sidebar).width;
    w=parseInt(sbwidth,10);
    document.addEventListener("mousemove", rs_mousemoveHandler);
    document.addEventListener("mouseup", rs_mouseupHandler);
  }

  function rs_mousemoveHandler(e){
    var dx=e.clientX-x;
    var cw= dx+w;
    if (cw<700){
      sidebar.style.width=`${cw}px`;
    }

  }
  function rs_mouseupHandler(){
    document.removeEventListener("mousemove", rs_mousemoveHandler);
    document.removeEventListener("mouseup", rs_mouseupHandler);
  }

  resizeable.addEventListener("mousedown", rs_mousedownHandler);

}

resizer(sidebar,resizeable);

document.addEventListener("DOMContentLoaded", function() {
  const DNA_main = document.querySelector('.DNA');
  const DNA_data = document.querySelector('.DNA-data');
  const RNA_main = document.querySelector('.RNA');
  const RNA_data = document.querySelector('.RNA-data'); 
  const Terminal = document.querySelector('.Mainscreen-terminal');
  const Submitbtn = document.querySelector('.submit'); // Corrected target for the submit button

  DNA_main.addEventListener('click', function() {
    if (DNA_data.style.display === 'none') {
      DNA_data.style.display = 'block';
    } else {
      DNA_data.style.display = 'none';
    }
  });

  RNA_main.addEventListener('click', function() {
    if (RNA_data.style.display === 'none') { 
      RNA_data.style.display = 'block';
    } else {
      RNA_data.style.display = 'none';
    }
  });

  Submitbtn.addEventListener('click', function() { 
    var txtarea= document.getElementById("NCtextarea")
    var text= txtarea.value;
    invoke('n_count', {seq: text}).then((result) => console.log(result));
    if (Terminal.style.display === 'none') { 
      Terminal.style.display = 'block';
    } else {
      Terminal.style.display = 'block';
    }
  });
});

