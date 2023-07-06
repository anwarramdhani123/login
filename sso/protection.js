// Firebase configuration
var firebaseConfig = {
  // Konfigurasi Firebase Anda di sini
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Cek status login setiap kali halaman dimuat
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    // Jika pengguna belum login, redirect ke halaman login
    window.location.href = "/login.html";
  }
});
