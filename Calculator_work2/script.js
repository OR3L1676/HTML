function sumbit() {
  const x = document.getElementById("num_x").value;
  const y = document.getElementById("num_y").value;
  const numericPattern = /^\d+$/;
  if (!numericPattern.test(x) || !numericPattern.test(y)) {
    alert("Please enter only numeric values!");
  } else {
    const sum = parseInt(x) + parseInt(y);
    const product = parseInt(x) * parseInt(y);
    
    document.getElementById("operator1").value = sum;
    document.getElementById("operator2").value = product;
  }
}