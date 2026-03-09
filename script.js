document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-respuesta');
  const corazon = document.getElementById('corazon');

  btn.addEventListener('click', () => {
    corazon.style.opacity = '1';
    corazon.style.animation = 'latir 1.2s infinite';
    
    // Pequeño confeti o mensaje (opcional)
    alert('¡Sí! ♾️ Ahora somos eternos, como Kaneki y Touka. Te amo para siempre ❤️');
    
    // Puedes agregar más efectos si quieres (confeti con librería, etc.)
  });
});