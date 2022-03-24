function activeListener(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("primary");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";

  if(tabName == "Contact"){
    document.getElementById("footer").style.display = "none";
  }
  else{
    document.getElementById("footer").style.display = "table";
  }
  scrollTo(0,0);
}