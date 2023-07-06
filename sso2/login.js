// Fungsi Login dengan Google
function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  // Simpan URL halaman asal sebelum diarahkan ke halaman login
  sessionStorage.setItem("redirectUrl", window.location.href);

  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Redirect ke halaman asal setelah login berhasil
      redirectToOriginalPage();
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Fungsi Login dengan Twitter
function loginWithTwitter() {
  var provider = new firebase.auth.TwitterAuthProvider();

  // Simpan URL halaman asal sebelum diarahkan ke halaman login
  sessionStorage.setItem("redirectUrl", window.location.href);

  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // Redirect ke halaman asal setelah login berhasil
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
