document.querySelectorAll("button")[0].onclick = () => {
  let b = document.getElementById("base").value;
  b = Number(b);
  let h = document.getElementById("height").value;
  h = Number(h);

  let hypotenuse = Math.sqrt(Math.pow(b, 2) + Math.pow(h, 2));

  document.getElementById(
    "hypotenuse"
  ).innerHTML = `Hypotenuse is ${hypotenuse}`;
};
