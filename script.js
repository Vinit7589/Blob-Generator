let output = document.getElementById("css-code");
let sliders = document.querySelectorAll("input[type='range']")
let copyBtn = document.querySelector("#copy")

sliders.forEach(function (slider) {
    slider.addEventListener("input", createBlob)
})

let input = document.querySelectorAll("input[type='number']")
// console.log(input)
input.forEach(function (inp) {
    inp.addEventListener("change", createBlob)
})

function createBlob() {
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;

    let blobHeight = input[0].value;
    let blobWidth = input[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;

    document.getElementById("blob").style.cssText = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px`

    output.value = `border-radius: ${borderRadius}`

}

const copyCode = () => {
    navigator.clipboard.writeText(output.value);
    copyBtn.innerText = "Code Copied"
    setTimeout(() => copyBtn.innerText = "Copy", 1600)
}

copyBtn.addEventListener("click", copyCode)





