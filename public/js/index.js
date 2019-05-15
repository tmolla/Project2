// Get references to page elements
//var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
//var $submitBtn = $("#submit");
//var $exampleList = $("#example-list");
var $loginSubmitBtn = $("#loginSubmitBtn");

// The API object contains methods for each kind of request we'll make
var API = {
  login: function(user) {
    console.log("Hello you!");
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET",
      url: "api/uses/login",
      data: JSON.stringify(user)
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
/*var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

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
var handleMySubmit = function(event) {
  event.preventDefault();
  console.log("hello");
  var user = {
    Email: $("#email")
      .val()
      .trim(),
    Password: $("#password")
      .val()
      .trim()
  };
  console.log(user);
  API.login(user).then(function(data) {
    console.log(data);
    //refreshExamples();
  });
};
// Add event listeners to the submit and delete buttons
//$submitBtn.on("click", handleFormSubmit);
//$exampleList.on("click", ".delete", handleDeleteBtnClick);
console.log(555555);
$loginSubmitBtn.on("click", handleMySubmit);
