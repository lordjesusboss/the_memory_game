var vara = 6;
//var ctrl = ((vara + 1)*(vara + 1)) / 2;
var ctrl = 18;
var nums1 = [];
for( var j = 0 ; j < ctrl ; j++) {
      var holdRandomNumber = Math.ceil (Math.random() * 99)
      if (holdRandomNumber >10) {
          //nums1.push (holdRandomNumber);
          nums1[ctrl+j] = nums1[j]  = holdRandomNumber;

      } else {
          j--;
      }
 }

var nums2 = shuffleArray(nums1);
var gridHTML ="<div class='container'>";
var counter =0;

for (; counter < vara; counter++) {
    gridHTML += " <div class='row'> ";
    var columnCounter =0;
    for (; columnCounter < vara; columnCounter++) {
        gridHTML += "<span id='" +( vara* (counter) +columnCounter) + "'><button type='button' class='to-animate intro-animate-2 btn btn-info btn-lg'> ++ </button></span><span id='x"+( vara * (counter) +columnCounter)+ "'>" + nums2[vara* (counter) +columnCounter] +"</span> "  ;
    }
    gridHTML += "</div>";
}
gridHTML +="</div>";
var clickedText = "NeverClicked";
var firstButtonId;
var secondButtonId;
document.getElementById("grid").innerHTML =gridHTML;
$(document).ready(function(){
    $("span[id^=x]").hide()
    $("button").click(function(){
        if(isNaN(this.textContent) === false ) {
            return;
        }
        if (clickedText === "NeverClicked") {
            clickedText = "FirstClick";
            firstButtonId = this.parentElement.id;
        }else if(clickedText === "FirstClick") {
            clickedText = "SecondClick";
            secondButtonId = this.parentElement.id;
        } else {
            //alert(firstButtonId);
            //alert(secondButtonId);
            if($("#"+firstButtonId).children("button")[0].textContent !== $("#"+secondButtonId).children("button")[0].textContent) {
                $("#"+firstButtonId).children("button")[0].textContent ="++"
                $("#"+secondButtonId).children("button")[0].textContent ="++"
            }
            clickedText = "FirstClick";
            firstButtonId = this.parentElement.id;;
            //secondButtonId = -1;
        }
        var getCurrentId= this.parentElement.id;
        if(nums2[getCurrentId].length === 1) {
            this.textContent = " " + nums2[getCurrentId];
        }else{
            this.textContent =nums2[getCurrentId];
        }

        });
});
function shuffleArray(d) {
  for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d
};
