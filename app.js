// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nuevoAmigo = inputAmigo.value.trim(); 
  
    if (nuevoAmigo === '') {
      alert('Por favor, ingresa un nombre.');
      return;
    }
  
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = nuevoAmigo;
    listaAmigos.appendChild(nuevoItem);
    inputAmigo.value = '';
  }
  
  function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.children).map(li => li.textContent);
  
    if (amigos.length < 2) {
      alert('Necesitas al menos dos amigos para jugar.');
      return;
    }
  
    const amigosSorteados = [];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
  
    while (amigos.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0]; 
      amigosSorteados.push({ 
        dador: amigos[0], 
        receptor: amigoSorteado 
      });
      amigos.shift(); // Eliminar el primer elemento de la lista después de cada asignación
    }
  
    amigosSorteados.forEach(asignacion => {
      const resultadoItem = document.createElement('li');
      resultadoItem.textContent = `${asignacion.dador} le toca: ${asignacion.receptor}`;
      resultado.appendChild(resultadoItem);
    });
  }