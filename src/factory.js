// Factory: pattern

function createMicrofone(color = "Black") {
  let isOn = true;

  const toggleOnOff = () => {
    if (isOn) {
      console.log("desligar");
    } else {
      console.log("ligar");
    }
    isOn = !isOn;
  };

  return { color, toggleOnOff };
}

const microfoneBlack = createMicrofone("Black");
const microfoneWhite = createMicrofone("White");

console.log(microfoneBlack.color);
microfoneBlack.toggleOnOff();

console.log(microfoneWhite.color);
microfoneWhite.toggleOnOff();
