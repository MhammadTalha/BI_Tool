const invoke = window.__TAURI__.invoke;

var preload = document.querySelector('.pre')
window.addEventListener("load",function(){
  setInterval(()=> {
    preload.style.display="none";
  } , 3000)
})

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
  const NC_code = document.querySelector(".NC_code");
  const NC_code_output = document.querySelector(".NC-data-code")

  NC_code.addEventListener('click', function() {
    if (NC_code_output.style.display === 'none') {
      NC_code_output.style.display = 'block';
    } else {
      NC_code_output.style.display = 'none';
    }
  });  

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
});

document.addEventListener("DOMContentLoaded", function() {
  const Complementary_code = document.querySelector(".Complementary_code");
  const Complementary_code_output = document.querySelector(".Complementary-data-code")

  Complementary_code.addEventListener('click', function() {
    if (Complementary_code_output.style.display === 'none') {
      Complementary_code_output.style.display = 'block';
    } else {
      Complementary_code_output.style.display = 'none';
    }
  });  
});

document.addEventListener("DOMContentLoaded", function() {
const GC_code = document.querySelector(".GC_code");
const GC_code_output = document.querySelector(".GC-data-code")
GC_code.addEventListener('click', function() {
  if (GC_code_output.style.display === 'none') {
    GC_code_output.style.display = 'block';
  } else {
    GC_code_output.style.display = 'none';
  }
  }); 
});

document.addEventListener("DOMContentLoaded", function() {
  const Transcription_code = document.querySelector(".Transcription_code");
  const Transcription_code_output = document.querySelector(".Transcription-data-code")
  Transcription_code.addEventListener('click', function() {
    if (Transcription_code_output.style.display === 'none') {
      Transcription_code_output.style.display = 'block';
    } else {
      Transcription_code_output.style.display = 'none';
    }
  }); 
});

document.addEventListener("DOMContentLoaded", function() {
  const Terminal = document.querySelector('.Mainscreen-terminal');
  const Complementary = document.querySelector(".Complementary_submit"); 
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

document.addEventListener("DOMContentLoaded", function() {
  const Terminal = document.querySelector('.Mainscreen-terminal');
  const Transcription =document.querySelector(".Transcription_submit");

  Transcription.addEventListener('click', function() { 
    var txtarea= document.getElementById("Transcription_textarea")
    var Transcription_output= document.getElementById("Transcription_para_output")
    var text= txtarea.value;
    invoke('transcription', {seq: text}).then((result) => Transcription_output.textContent=result);
    if (Terminal.style.display === 'none') { 
      Terminal.style.display = 'block';
    } else {
      Terminal.style.display = 'block';
    }
  });
});