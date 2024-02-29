document.addEventListener("DOMContentLoaded", function() {
  const DNA_main = document.querySelector('.DNA');
  const DNA_data = document.querySelector('.DNA-data');
  const RNA_main = document.querySelector('.RNA');
  const RNA_data = document.querySelector('.RNA-data'); // Corrected variable name

  DNA_main.addEventListener('click', function() {
    if (DNA_data.style.display === 'none') {
      DNA_data.style.display = 'block';
    } else {
      DNA_data.style.display = 'none';
    }
  });

  RNA_main.addEventListener('click', function() {
    if (RNA_data.style.display === 'none') { // Corrected variable name
      RNA_data.style.display = 'block';
    } else {
      RNA_data.style.display = 'none';
    }
  });
});