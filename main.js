var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i=1; i<=5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', `images/moon-0${i}.svg`);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(){
    let currentSrcValue = event.target.getAttribute("src");
    // console.log(currentSrcValue);
    displayedImage.setAttribute('src', currentSrcValue);
    };
  };

/* Wiring up the Darken/Lighten button */
  btn.addEventListener ("click", event =>{
    event.preventDefault();
    let classBtn = btn.getAttribute("class");
    if (classBtn === "blue") {
      btn.setAttribute("class", "light");
      btn.textContent = "blueish";
      overlay.style.background = "radial-gradient(transparent, blue)";
    } else {
      btn.setAttribute("class", "blue");
      btn.textContent = "greenish";
      overlay.style.background = "radial-gradient(transparent, green)";
    }
    console.log(classBtn);
  });
