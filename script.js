function decimalToBinary(decnum) {
  //Write you code here
	let binary = '';
    while (decnum > 0) {
        binary = (decnum % 2) + binary;
        decnum = Math.floor(decnum / 2);
    }
    return binary || '0';
  
}

window.decimalToBinary = decimalToBinary;
