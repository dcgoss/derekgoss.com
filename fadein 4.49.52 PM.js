$(document).ready(function() {
    $("#greeting").delay(500).fadeTo(1000,1);
    $("#name").delay(1500).fadeTo(1000,1);
    $("#subtitle").delay(2500).fadeTo(1000,1);
    
    if($("#navigationbar").css("display") !== "none"){
    $("#logo").hover(
  function() {
    $("#top").fadeTo(500,1);
  }, function() {
    $("#top").fadeTo(500,0);
    }
    );
    }
});