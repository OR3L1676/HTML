function sumbit() {
    const x = parseInt(document.getElementById("num_x").value);
    const y = parseInt(document.getElementById("num_y").value);
    const sum = x + y;
    const product = x * y;
    document.getElementById("operator1").value = sum;
    document.getElementById("operator2").value = product;
  }