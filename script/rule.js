document.getElementById('terms').addEventListener('click', function() {
    document.getElementById('offScreenMenu').classList.add('show');
  });
  
  document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('offScreenMenu').classList.remove('show');
  });