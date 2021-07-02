// Object literal

const microfone = {
  color: "Black",
  isOn: true,

  toggleOnOff: function () {
    if (microfone.isOn) {
      console.log("desligar");
    } else {
      console.log("ligar");
    }
    microfone.isOn = !microfone.isOn;
  },
};

microfone.toggleOnOff();
microfone.toggleOnOff();
