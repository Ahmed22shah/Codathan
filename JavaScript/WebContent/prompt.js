window.onload = initAll;

function initAll() {
   var ans= prompt("Are you sure you want to do that?","");
   if (ans) {
       alert("you said " + ans);
       document.write("you said "+ ans);
      }
     else {
       alert("you reused to answer");
       }
}