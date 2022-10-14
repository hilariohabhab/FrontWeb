function searchCarros() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("carros");

  for (m = 0; m < x.length; m++) {
    if (!x[m].innerHTML.toLowerCase().includes(input)) {
      x[m].style.display = "none";
    } else {
      x[m].style.display = "list-item";
    }
  }
}
