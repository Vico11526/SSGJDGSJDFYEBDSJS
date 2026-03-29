window.addEventListener('load', function() {
  console.log('Iniciando sincronización de letras...');
  var audioElement = document.querySelector("audio");
  var lyricsElement = document.querySelector("#lyrics");
  if (!audioElement) {
    console.error('❌ No se encontró el elemento audio');
    return;
  }
  if (!lyricsElement) {
    console.error('❌ No se encontró el elemento #lyrics');
    return;
  }

  console.log('✅ Elementos encontrados correctamente');

  var lyricsData = [
    { text: "...", time: 0.0 },
    { text: "Tengo las manos sudá'", time: 9.7 },
    { text: "Estoy nervioso", time: 11.3 },

    // Verso 1
    { text: "Por Dios, que no quisiera sentir esta ilusión", time: 15.2 },
    { text: "Tal vez podría cometer un grave error", time: 18.5 },
    { text: "Porque tú eres prohibida para mí", time: 21.5 },
    { text: "Pero yo no pude controlar al corazón", time: 25.1 },
    { text: "Y apenas que te vio, de ti se enamoró", time: 27.6 },
    { text: "Y a cada instante me pregunta por ti", time: 30.5 },

    // Pre-coro
    { text: "Acepta, por favor, salir conmigo", time: 33.7 },
    { text: "Así sea solamente para hablarte como amigos", time: 36.4 },
    { text: "Y puedas conocer un poco más de las razones", time: 39.4 },
    { text: "Que me hacen dedicarte este montón de canciones", time: 42.3 },

    // Puente
    { text: "Quién quita que haya en ti una llamita", time: 45.7 },
    { text: "De querer vivir una experiencia distinta", time: 48.6 },
    { text: "¿Qué tal si te despierto esas maripositas?", time: 51.8 },
    { text: "Por favor, acéptame una cena clandestina", time: 54.8 },

    // Coro 1
    { text: "¿Qué tal si te enamoras de las locuras mías?", time: 57.8 },
    { text: "¿Qué tal que te hagan falta unas noches divertidas?", time: 60.9 },
    { text: "¿Qué tal que sea yo el portador de tu alegría?", time: 64.0 },
    { text: "¿Qué tal que estemos juntos por el resto de la vida?", time: 67.1 },

    // Coro 1 (continuación)
    { text: "¿Qué tal si estás viviendo en la monotonía?", time: 70.0 },
    { text: "¿Qué tal que yo te pinte los labios de sonrisas?", time: 73.2 },
    { text: "¿Qué tal que tú te atrevas a besar la boca mía?", time: 76.3 },
    { text: "Y no te provoquen otros labios en la vida", time: 79.4 },

    // Post-coro
    { text: "No me dejes caer de las alturas", time: 82.5 },
    { text: "¿A dónde me lleva esa carita tierna tuya?", time: 85.6 },
    { text: "Déjame vivir enredado", time: 88.7 },
    { text: "Por favor, vamos a intentarlo", time: 91.2 },

    // Coro 2
    { text: "Ay, ¿qué tal si te enamoras de las locuras mías?", time: 94.5 },
    { text: "¿Qué tal que te hagan falta una noche divertida?", time: 97.9 },
    { text: "¿Qué tal que sea yo el portador de tu alegría?", time: 100.9 },
    { text: "¿Qué tal que estemos juntos por el resto de la vida?", time: 104.0 },
    { text: "...", time: 107.0 },

    // Interludio / Dedicatoria
    { text: "Esto se lo dedico con mucho cariño", time: 121.6 },
    { text: "Para, Para", time: 124.6 },
    { text: "Tu saber que es para ti", time: 128.4 },
    { text: "Ven, mi amor", time: 135.7 },

    // Verso 2
    { text: "Qué tal que un día grites con orgullo", time: 150.7 },
    { text: "Que lo mejor que te ha pasado ha sido conocerme", time: 153.4 },
    { text: "Que nunca imaginaste sentir algo tan puro", time: 157.0 },
    { text: "Cada vez que, con ternura, esta boquita te bese", time: 159.3 },

    // Pre-coro 2
    { text: "No creas que dejaré de enamorarte", time: 162.7 },
    { text: "Tengo fe que, de otra forma, un día tú vas a mirarme", time: 165.5 },
    { text: "Y te pido, por lo que tú más quieras en la vida", time: 168.5 },
    { text: "Que, por favor, me aceptes una cena clandestina", time: 171.6 },

    // Coro 3
    { text: "Ay, ¿qué tal si te enamoras de las locuras mías?", time: 174.6 },
    { text: "¿Qué tal que te hagan falta una noche divertida?", time: 177.8 },
    { text: "¿Qué tal que sea yo el portador de tu alegría?", time: 180.9 },
    { text: "¿Qué tal que estemos juntos por el resto de la vida?", time: 184.0 },

    // Coro final
    { text: "¿Qué tal si estás viviendo en la monotonía?", time: 187.0 },
    { text: "¿Qué tal que yo te pinte los labios de sonrisas?", time: 190.1 },
    { text: "¿Qué tal que tú te atrevas a besar la boca mía?", time: 193.3 },
    { text: "Y no te provoquen otros labios en la vida", time: 196.3 },

    // Outro
    { text: "Que los míos saben a chocolate", time: 201.6 },
    { text: "Te amo mi amor ❤️", time: 210.0 },
  ];

  function updateLyrics() {
    var time = audioElement.currentTime;
    var currentLine = lyricsData.filter(function(line) {
      return time >= line.time;
    }).pop();

    if (currentLine) {
      var fadeInDuration = 0.5;
      var timeSinceStart = time - currentLine.time;
      var opacity = Math.min(1, timeSinceStart / fadeInDuration);

      lyricsElement.style.opacity = opacity;
      lyricsElement.innerHTML = currentLine.text;
    } else {
      lyricsElement.style.opacity = 0;
      lyricsElement.innerHTML = "";
    }
  }

  setInterval(updateLyrics, 100);

  function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    if (titulo) {
      titulo.style.animation = "fadeOut 3s ease-in-out forwards";
      setTimeout(function () {
        titulo.style.display = "none";
      }, 3000);
    }
  }

  setTimeout(ocultarTitulo, 216000);
});