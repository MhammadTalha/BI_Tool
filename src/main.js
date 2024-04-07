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
  
  const Complementary = document.querySelector(".Complementary_submit"); 

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

  Complementary.addEventListener('click', function() { 
    var txtarea= document.getElementById("Complementary_textarea")
    var Complementary_output= document.getElementById("Complementary_para_output")
    var text= txtarea.value;
    invoke('complementary', {seq: text}).then((result) => Complementary_output.textContent=result);
    if (Terminal.style.display === 'none') { 
      Terminal.style.display = 'block';
    } else {
      Terminal.style.display = 'block';
    }
  });


});

document.addEventListener("DOMContentLoaded", function() {
  const Terminal = document.querySelector('.Mainscreen-terminal');
  const NC_Submitbtn = document.querySelector('.NC_submit'); 
  

  NC_Submitbtn.addEventListener('click', function() { 
    var txtarea= document.getElementById("NCtextarea")
    var NC_output= document.getElementById("NC_para_output")
    var text= txtarea.value;
    invoke('n_count', {seq: text}).then((result) => NC_output.textContent=result);
    if (Terminal.style.display === 'none') { 
      Terminal.style.display = 'block';
    } else {
      Terminal.style.display = 'block';
    }
  });


  
});

document.addEventListener("DOMContentLoaded", function() {
  const Terminal = document.querySelector('.Mainscreen-terminal');
  const GC =document.querySelector(".GC_submit");

  GC.addEventListener('click', function() { 
    var txtarea= document.getElementById("GCtextarea")
    var GC_output= document.getElementById("GC_para_output")
    var text= txtarea.value;
    invoke('gc', {seq: text}).then((result) => GC_output.textContent=result);
    if (Terminal.style.display === 'none') { 
      Terminal.style.display = 'block';
    } else {
      Terminal.style.display = 'block';
    }
  });
});