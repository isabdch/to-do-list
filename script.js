function show_hide() {
  let title = document.getElementsByTagName("h1")[0];
  if (title.style.display == "none") {
    title.style.display = "inline-block";
  } else {
    title.style.display = "none";
  }
}

function change(input) {
    let title = document.getElementsByTagName("h1")[0];
    title.innerText = input.value;
    title.style.color = "blueviolet";
}
