window.onload = function() {
  var sidebar = document.getElementById('sidebar');
  var sidebarResizer = document.createElement('div');
  sidebarResizer.style.width = '10px';
  sidebarResizer.style.height = '100%';
  sidebarResizer.style.backgroundColor = '#555';
  sidebarResizer.style.cursor = 'ew-resize';
  sidebarResizer.style.position = 'absolute';
  sidebarResizer.style.left = '0';
  sidebarResizer.style.top = '0';
  sidebar.appendChild(sidebarResizer);

  sidebarResizer.addEventListener('mousedown', function(e) {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
  });

  function resize(e) {
    sidebar.style.width = (e.clientX - sidebar.getBoundingClientRect().left) + 'px';
  }

  function stopResize() {
    window.removeEventListener('mousemove', resize);
  }
}

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

