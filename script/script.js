const bgAnimation = document.getElementById('bgAnimation');

const numberOfcColorBoxes = 400;

for (let i = 0; i < numberOfcColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox);
}