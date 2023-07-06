// Inisialisasi Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCeoWEQjitYPAlZ0ggWlhOwAZsgzskIlHk",
  authDomain: "ar-login2-c934e.firebaseapp.com",
    storageBucket: "ar-login2-c934e.appspot.com",
    messagingSenderId: "340128442382",
  projectId: "ar-login2-c934e",
  appId: "1:340128442382:web:93901ccc0ee8249d24b45f"
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
