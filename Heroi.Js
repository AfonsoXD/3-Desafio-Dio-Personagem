
function exibirAtaque(personagem) {
    let tipo = personagem.tipo;
    let ataque;
  
    switch (tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque especial";
    }
  
    console.log(`o ${tipo} atacou usando ${ataque}`);
  }
  
  let personagens = [
    { nome: "Ragnar", idade: "34", tipo: "guerreiro" },
    { nome: "Merlin", idade: "1000", tipo: "mago" },
    { nome: "Li Shang", idade: "32", tipo: "monge" },
    { nome: "Hanzo", idade: "40", tipo: "ninja" }
  ];
  
  for (let i = 0; i < personagens.length; i++) {
    exibirAtaque(personagens[i]);
  }
  
