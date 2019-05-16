// Get references to page elements
//var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
//var $submitBtn = $("#submit");
//var $exampleList = $("#example-list");
var $loginSubmitBtn = $("#loginSubmitBtn");
var $regSubmitBtn = $("#regSubmitBtn");
var $authDiv = $("#authDiv");
var $detailInfoDiv = $("#detailInfoDiv");


$authDiv.show();
$detailInfoDiv.hide();

// The API object contains methods for each kind of request we'll make
var API = {
  login: function (user) {
    console.log("Hello you!" + JSON.stringify(user));
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users/login",
      data: JSON.stringify(user)
    });
  },
  regisgerUser: function (userInfo) {
    console.log("regiserUser " + JSON.stringify(userInfo));
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(userInfo)
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshUserProfile = function() {
//   API.getUser().then(function(data) {
// var $examples = data.map(function (example) {
//   var $a = $("<a>")
//     .text(example.text)
//     .attr("href", "/example/" + example.id);

//   var $li = $("<li>")
//     .attr({
//       class: "list-group-item",
//       "data-id": example.id
//     })
//     .append($a);

//   var $button = $("<button>")
//     .addClass("btn btn-danger float-right delete")
//     .text("ｘ");

//   $li.append($button);

//   return $li;
// });

// $exampleList.empty();
// $exampleList.append($examples);
//   $("#userName").val(data.Name);
//   $("#userAddress").val(data.Address);
//   $("#userEmail").val(data.EMila);
//   $("#userPhone").val(data.Phonenumber);
// });
// };
/*
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var user = {
    Name: userName,
    Address: address,
    Email: email,
    Phone: phoneNumber,
    City: city,
    State: state,
    Zip: zip,
    Password: password,

    createdAt: "2019-05-14T14:31:40.000Z",
    updatedAt: "2019-05-14T22:13:47.000Z"
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(user).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};
*/
var handleMySubmit = function (event) {
  event.preventDefault();
  console.log("in handleMySubmit");

  var user = {
    EMail: $("#email")
      .val()
      .trim(),
    Password: $("#password")
      .val()
      .trim()
  };

  console.log(user);
<<<<<<< HEAD
  API.login(user).then(function (res) {
    if (!res) {
      var now = DateTime.local();
      console.log(now);
      console.log("no shit");
    } else {
      console.log(res);

      sessionStorage.setItem("id", res.id);

      $authDiv.hide();
      $detailInfoDiv.show();

      console.log(res.id);
=======
  API.login(user).then(function(res) {
    if (!res) {
      console.log("no shit");
    } else {
      console.log("Returned user " + res);
      $authDiv.hide();
      $detailInfoDiv.show();
      $("#userName").text(res.Name);
      $("#userAddress").text(res.Address);
      $("#userEmail").text(res.EMail);
      $("#userPhone").text(res.Phone);
>>>>>>> master
    }
  });
};

var handleRegister = function (event) {
  event.preventDefault();
  console.log("in handleRegister");
  var userInfo = {
    Name: $("#inputName")
      .val()
      .trim(),
    EMail: $("#inputEmail")
      .val()
      .trim(),
    Password: $("#inputPassword")
      .val()
      .trim(),
    Phone: $("#inputPhone")
      .val()
      .trim(),
    Address: $("#inputAddress")
      .val()
      .trim(),
    City: $("#inputCity")
      .val()
      .trim(),
    State: $("#inputState")
      .val()
      .trim(),
    Zip: $("#inputZip")
      .val()
      .trim(),
    createdAt: "2019-05-15T12:34:44.000Z",
    updatedAt: "2019-05-15T12:34:44.000Z"
  };

  console.log(userInfo);
  API.regisgerUser(userInfo).then(function (res) {
    if (!res) {
      console.log(DateTime.local());
      console.log("no shit");
    } else {
      console.log(res);
    }
    //refreshExamples();
  });
};
// Add event listeners to the submit and delete buttons
//$submitBtn.on("click", handleFormSubmit);
//$exampleList.on("click", ".delete", handleDeleteBtnClick);
console.log(555555);
$loginSubmitBtn.on("click", handleMySubmit);
$regSubmitBtn.on("click", handleRegister);
