  document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que recargue la página

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const data = {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    const array = [];

    // Guarda en localStorage (puedes usar una lista)
    let submissions = JSON.parse(localStorage.getItem('formData')) || [];
    submissions.push(data);
    localStorage.setItem('formData', JSON.stringify(submissions));

    alert('Datos guardados en el navegador.');
    document.getElementById('myForm').reset();
  });

 
console.log(array[4]);

  // ¿Cómo borrar datos si estás probando?
   /*Abre consola (F12) y ejecuta:
  localStorage.removeItem('formData');
  */