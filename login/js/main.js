(function ($) {
  "use strict";

  $(document).ready(function () {
    // Function to handle the login button click
    $("#signupButton").on("click", function (event) {
      event.preventDefault(); // Prevent the default action

      var username = $("#usernameInput").val(); // Get the username value
      var password = $("#passwordInput").val(); // Get the password value
      var email = $("#emailInput").val(); // Get the password value

      if (
        username.trim() !== "" &&
        password.trim() !== "" &&
        email.trim() !== ""
      ) {
        // Create user data object
        var userData = {
          username: username,
          password: password,
        };
        console.log("zoz");

        // Store user data in local storage
        let users = JSON.parse(localStorage.getItem("user"));
        if (users) {
          users.push(userData);
        } else {
          users = [userData];
        }
        localStorage.setItem("users", JSON.stringify(users));

        // Redirect to the admin page
        window.location.href = "login.html";
      } else {
        alert("Please enter both username and password.");
      }
    });
  });

  // Other existing code...
})(jQuery);
(function ($) {
  "use strict";

  $(document).ready(function () {
    // Function to handle the login button click
    $("#loginButton").on("click", function (event) {
      event.preventDefault(); // Prevent the default action

      var username = $("#usernameInput").val(); // Get the username value
      var password = $("#passwordInput").val(); // Get the password value

      if (username.trim() !== "" && password.trim() !== "") {
        // Create user data object
        var userData = {
          username: username,
          password: password,
        };
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users?.find(
          (user) => user.username === userData.username
        );
        if (userExists) {
          // Store user data in local storage
          localStorage.setItem("userData", JSON.stringify(userData));
          // Redirect to the admin page
          window.location.href = "../index.html";
        } else {
          alert("User not found!");
        }
      } else {
        alert("Please enter both username and password.");
      }
    });
  });

  // Other existing code...
})(jQuery)
