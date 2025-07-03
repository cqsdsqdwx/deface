
document.body.innerHTML = `
<!DOCTYPE html>
<html lang="fr" >
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>deface de 2 skids</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

    * {
      margin: 0; padding: 0; box-sizing: border-box;
    }

    body {
      height: 100vh;
      background:
        radial-gradient(circle at center, #1a0000 0%, #000 80%),
        repeating-radial-gradient(circle at center, #330000 0, #330000 2px, transparent 3px, transparent 6px);
      font-family: 'Orbitron', sans-serif;
      color: #ff003c;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      animation: bgPulse 6s ease-in-out infinite alternate;
      user-select: none;
      text-align: center;
      padding: 0 1rem;
    }

    @keyframes bgPulse {
      0% {
        background-position: center;
        filter: brightness(1);
      }
      100% {
        background-position: center;
        filter: brightness(1.2);
      }
    }

    h1 {
      font-size: clamp(3rem, 8vw, 5rem);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #ff003c;
      position: relative;
      animation: glitchText 2.5s infinite;
      margin-bottom: 1rem;
    }

    /* Glitch effect */
    @keyframes glitchText {
      0% {
        text-shadow:
          2px 0 #ff003c,
          -2px 0 #fff,
          0 0 6px #ff003c;
      }
      20% {
        text-shadow:
          -2px 0 #ff003c,
          2px 0 #fff,
          0 0 8px #ff003c;
      }
      40% {
        text-shadow:
          2px 2px #fff,
          -2px -2px #ff003c,
          0 0 10px #ff003c;
      }
      60% {
        text-shadow:
          -2px -2px #ff003c,
          2px 2px #fff,
          0 0 12px #ff003c;
      }
      80% {
        text-shadow:
          2px 0 #ff003c,
          -2px 0 #fff,
          0 0 6px #ff003c;
      }
      100% {
        text-shadow:
          -2px 0 #ff003c,
          2px 0 #fff,
          0 0 8px #ff003c;
      }
    }

    .logos {
      display: flex;
      gap: clamp(40px, 6vw, 80px);
      margin: 40px 0 50px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .logos a {
      display: inline-block;
      border-radius: 20px;
      border: 3px solid #ff003c;
      box-shadow:
        0 0 15px #ff003c,
        0 0 40px #ff003c,
        inset 0 0 10px #ff003c;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
      cursor: pointer;
      filter: drop-shadow(0 0 6px #ff003c);
      background: #1a0000;
      text-decoration: none;
    }

    .logos a img {
      width: clamp(130px, 18vw, 180px);
      border-radius: 20px;
      display: block;
      pointer-events: none;
    }

    .logos a:hover {
      transform: scale(1.18) rotate(3deg);
      box-shadow:
        0 0 50px #fff,
        0 0 80px #ff003c,
        inset 0 0 25px #ff003c;
      filter: drop-shadow(0 0 10px #fff);
    }

    .typewriter {
      font-size: clamp(1rem, 2vw, 1.4rem);
      color: #fff;
      text-shadow: 0 0 10px #ff003c;
      border-right: 3px solid #ff003c;
      padding-right: 6px;
      white-space: nowrap;
      overflow: hidden;
      max-width: 90vw;
      margin-bottom: 40px;
      letter-spacing: 0.06em;
      font-weight: 600;
      font-style: italic;
    }

    .btn-telegram {
      background: linear-gradient(135deg, #0088cc, #00aaff);
      color: #fff;
      font-weight: 700;
      font-family: 'Orbitron', sans-serif;
      padding: 14px 36px;
      border-radius: 50px;
      text-decoration: none;
      box-shadow:
        0 0 15px #0088cc,
        0 0 30px #00aaff;
      transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
      user-select: none;
      letter-spacing: 0.1em;
      display: inline-block;
    }

    .btn-telegram:hover {
      background: linear-gradient(135deg, #00aaff, #33bbff);
      box-shadow:
        0 0 40px #33bbff,
        0 0 70px #00aaff;
      transform: scale(1.12);
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 2.8rem;
      }
      .typewriter {
        font-size: 1rem;
      }
      .logos a img {
        width: 140px;
      }
      .btn-telegram {
        padding: 12px 24px;
        font-size: 0.9rem;
      }
    }
  </style>
</head>
<body>
  <h1>SKIDS<br>x vdp x hxh<br> FICHA PAR HASSANNN</h1>
  
  
  
  <p class="typewriter" id="typewriter"></p>
  
  <a href="https://baddiehub.com" target="_blank" class="btn-telegram" rel="noopener noreferrer" aria-label="Lien Ficha d'eux">ficha</a>

<script>
  const messages = [
    "salut les skids",
    "ils deface des sites de 2012 sans protection et flex?",
    "0 opsec",
    "acces au systeme ? sqlmap, deface ? chatgpt",
    "apprend mais en silence stp",

"message de hassan family"
  ];

  const typeEl = document.getElementById("typewriter");
  let msgIndex = 0, wordIndex = 0, isDeleting = false;

  function type() {
    const words = messages[msgIndex].split(" ");
    if (!isDeleting) {
      typeEl.textContent = words.slice(0, wordIndex + 1).join(" ");
      wordIndex++;
      if (wordIndex === words.length) {
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      wordIndex--;
      typeEl.textContent = words.slice(0, wordIndex).join(" ");
      if (wordIndex === 0) {
        isDeleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
      }
    }
    setTimeout(type, isDeleting ? 360 : 456);
  }

  type();
</script>
</body>
</html>

`;
