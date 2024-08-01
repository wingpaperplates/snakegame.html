// const animation = element.animate(keyframes, options);

var rf = document.getElementById("drf");
function movxy() {
  //cited SkillForge

  var position = 5;
  var animate = setInterval(function () {
    position += 3;
    rf.style.left = position + "px";
  }, 1000);
}

function stop() {
  var position = 5;
  var position = rf.style.left;
  console.log(position);
  var animate = clearInterval(position);
  console.log(animate);
}

// window.onload = function () {
//   // Your code to execute when the page reloads
//   console.log("Page reloaded!");
//   // Call your custom function
//   myFunction();
//   movxy();
// };

// function myFunction() {
//   // Your function logic here
//   clearInterval(animate);
//   console.log("myFunction executed!");
// }
