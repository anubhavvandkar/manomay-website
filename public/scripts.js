import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqDV4tmv9Ma08Ga9WFflMqF2ccS8efePc",
  authDomain: "manomay-74eb0.firebaseapp.com",
  projectId: "manomay-74eb0",
  storageBucket: "manomay-74eb0.appspot.com",
  messagingSenderId: "523447708765",
  appId: "1:523447708765:web:9cf02cddc71ffc1b32b1b4",
  measurementId: "G-DTYBH18M1G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
  }2
  scazrollTo(0,0);  
}

function responsive_navbar(x) {
  x.classList.toggle("fa-times");
  var y = document.getElementById("navbar");
  if (y.className == "navbar") {
    y.className += " responsive";
  } else {
    y.className = "navbar";
  }
}