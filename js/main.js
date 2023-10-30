let image = document.getElementById("authorimg");
let file = document.getElementById("authorinputfile");
let span = document.getElementById('authorspan');
file.addEventListener('change', function(){
  image.src = URL.createObjectURL(file.files[0]);
  image.style.display = "block";
  span.style.display = 'none'
});
