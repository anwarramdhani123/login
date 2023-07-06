// Firebase configuration
var firebaseConfig = {
 apiKey: "AIzaSyDwLz4xTWaJ-3vVkAm4-14MZuNtxmTea7A",
    authDomain: "anwr-login.firebaseapp.com",
    projectId: "anwr-login",
    storageBucket: "anwr-login.appspot.com",
    messagingSenderId: "686366789818",
    appId: "1:686366789818:web:8e4322533cf1c18b687283"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Cek status login setiap kali halaman dimuat
function checkAuth() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      // Jika pengguna belum login, redirect ke halaman login
      redirectToLogin();
    }
  });
}

// Simpan URL halaman asal saat mengarahkan pengguna ke halaman login
function redirectToLogin() {
  var currentUrl = window.location.href;
  sessionStorage.setItem("redirectUrl", currentUrl);
  window.location.href = "/sso/login22.html";
}

// Panggil fungsi checkAuth saat halaman dimuat
checkAuth();
