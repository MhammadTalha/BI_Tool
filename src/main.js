document.addEventListener("DOMContentLoaded", function() {
  var sidebar = document.getElementById('sidebar');
  var resizeable = document.querySelector('.sidr'); // Select the resizable handle
  
  var isResizing = false;

  resizeable.addEventListener('mousedown', function(e) {
    isResizing = true;
    window.addEventListener('mousemove', resize);
  });

  document.addEventListener('mouseup', function() {
    isResizing = false;
    window.removeEventListener('mousemove', resize);
  });

  function resize(e) {
    if (isResizing) {
      sidebar.style.width = (e.clientX - sidebar.getBoundingClientRect().left) + 'px';
    }
  }
});


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

  Submitbtn.addEventListener('click', function() { // Added event listener for the submit button
    if (Terminal.style.display === 'none') { 
      Terminal.style.display = 'block';
    } else {
      Terminal.style.display = 'block';
    }
  });
});
