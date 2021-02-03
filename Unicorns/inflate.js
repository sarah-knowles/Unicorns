

  let unicorn0 = 1;
  let unicorn1 = 1;
  let unicorn2 = 1;

  function inflateFunction(unicorn) {
    let img = document.getElementsByClassName("inflate-an-image")[unicorn];

    switch (unicorn) {
      case 0:
        if (unicorn0 == 4) {
          alert("Unicorn 1 says thanks!");
        } else {
          img.src = "./images/unicorn-" + unicorn0++ + ".png";
        }
        break;
      case 1:
        if (unicorn1 == 4) {
          alert("Unicorn 2 says thanks!");
        } else {
          img.src = "./images/unicorn-" + unicorn1++ + ".png";
        }
        break;
      case 2:
        if (unicorn2 == 4) {
          alert("Unicorn 3 says thanks!");
        } else {
          img.src = "./images/unicorn-" + unicorn2++ + ".png";
        }
        break;
      default:

    }
  };
  console.log("Inflate The Unicorn!")
