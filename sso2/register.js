// Fungsi Register dengan Google
function registerWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  // Simpan URL halaman asal sebelum diarahkan ke halaman register
  sessionStorage.setItem("redirectUrl", window.location.href);

  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Redirect ke halaman asal setelah register dan login berhasil
      redirectToOriginalPage();
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Fungsi Register dengan Twitter
function registerWithTwitter() {
  var provider = new firebase.auth.TwitterAuthProvider();

  // Simpan URL halaman asal sebelum diarahkan ke halaman register
  sessionStorage.setItem("redirectUrl", window.location.href);

  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Redirect ke halaman asal setelah register dan login berhasil
      redirectToOriginalPage();
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Fungsi untuk mengarahkan pengguna ke halaman asal setelah login atau register berhasil
function redirectToOriginalPage() {
  var redirectUrl = sessionStorage.getItem("redirectUrl");
  if (redirectUrl) {
    window.location.href = redirectUrl;
  } else {
    // Jika tidak ada URL halaman asal, arahkan ke halaman default
    window.location.href = "m.html";
  }
}
