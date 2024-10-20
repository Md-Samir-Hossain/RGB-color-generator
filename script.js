const colorBox = document.getElementById("color-box");
const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");
const copyButton = document.getElementById("copyButton");
const inputRGBvalue = document.getElementById("input-rgb-value");

redSlider.addEventListener("input",updateColor);
greenSlider.addEventListener("input",updateColor);
blueSlider.addEventListener("input",updateColor);

copyButton.addEventListener("click",copyRGBvalue);

function updateColor(){
    const valueRed = redSlider.value;
    const valueGreen = greenSlider.value;
    const valueBlue = blueSlider.value;
    // console.log(valueRed,valueGreen,valueBlue);
    
    redValue.innerText = valueRed;
    greenValue.innerText = valueGreen;
    blueValue.innerText = valueBlue;
    
    const rgbColor = `rgb(${valueRed},${valueGreen},${valueBlue})`;
    colorBox.style.backgroundColor = rgbColor;
    
    inputRGBvalue.innerText = rgbColor;
}

function copyRGBvalue(){
    const valueRed = redSlider.value;
    const valueGreen = greenSlider.value;
    const valueBlue = blueSlider.value;
    const rgbColor = `rgb(${valueRed},${valueGreen},${valueBlue})`;

    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert("RGB value copied to clipboard.");
    })
    .catch((error)=>{
        console.error("Failed to copy RGB value.",error); 
    })
}