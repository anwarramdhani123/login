// Inisialisasi Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Mendapatkan referensi objek autentikasi Firebase
var auth = firebase.auth();

// Mengambil elemen form login dan register
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");

// Event listener untuk login form
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Masuk menggunakan Firebase Auth
  auth.signInWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log("Login berhasil: ", user);
      // Redirect ke halaman lain setelah login berhasil
    })
    .catch(function(error) {
      console.log("Login gagal: ", error);
    });
});

// Event listener untuk register form
registerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("regEmail").value;
  var password = document.getElementById("regPassword").value;

  // Membuat pengguna baru menggunakan Firebase Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log("Registrasi berhasil: ", user);
      // Redirect ke halaman lain setelah registrasi berhasil
    })
   .catch(function(error) {
      console.log("Registrasi gagal: ", error);
    });
});
