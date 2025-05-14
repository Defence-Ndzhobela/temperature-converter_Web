let submitButton = document.getElementById("button");

submitButton.onclick = function () {
  let temperature = Number(document.getElementById("temperature").value);
  let conversionRadios = document.getElementsByName("conversionType");
  let resultBox = document.getElementById("displaying");

  let selectedConversion = "";
  for (let radio of conversionRadios) {
    if (radio.checked) {
      selectedConversion = radio.value;
      break;
    }
  }

  if (selectedConversion === "cToF") {
    let conversion = (temperature * 9 / 5) + 32;
    resultBox.value = `${temperature}°C = ${conversion.toFixed(2)}°F`;
  } else if (selectedConversion === "fToC") {
    let conversion = (temperature - 32) * 5 / 9;
    resultBox.value = `${temperature}°F = ${conversion.toFixed(2)}°C`;
  } else {
    resultBox.value = "Please select a conversion type.";
  }
};
