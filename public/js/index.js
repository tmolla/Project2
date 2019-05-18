// Get references to page elements
var $loginSubmitBtn = $("#loginSubmitBtn");
var $regSubmitBtn = $("#regSubmitBtn");
var $btnUpdateInfo = $("#btnUpdateInfo");
var $btnUpdateSubmit = $("#btnUpdateSubmit");
var $btnLogOff = $("#btnLogoff");
var $btnHarvest = $("#btnHarvest");

// The API object contains methods for each kind of request we'll make
var API = {
  login: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users/login",
      data: JSON.stringify(user)
    });
  },
  newLog: function(logEntry) {
    console.log("New log entery");
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/logs",
      data: JSON.stringify(logEntry)
    });
  },

  userInfo: function() {
    console.log("in userInfo " + "api/user/" + localStorage.getItem("userID"));
    return $.ajax({
      type: "GET",
      url: "api/user/" + localStorage.getItem("userID")
    });
  },

  saveUserInfo: function(userInfo) {
    console.log("In saveUserInfo");
    console.log(JSON.stringify(userInfo));
    return $.ajax({
      url: "/api/users/" + localStorage.getItem("userID"),
      type: "PUT",
      data: userInfo
    });
  },

  regisgerUser: function(userInfo) {
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

var handleMySubmit = function(event) {
  event.preventDefault();
  var user = {
    EMail: $("#email")
      .val()
      .trim(),
    Password: $("#password")
      .val()
      .trim()
  };
  console.log(user);
  API.login(user).then(function(res) {
    if (!res) {
      console.log("no data");
      //put some error message here
    } else {
      //save userid in localStorage for later reference
      localStorage.setItem("userID", res.id);
      //load user detail page
      window.location.href = "/userinfo/" + res.id;
    }
  });
};

var handleRegister = function(event) {
  event.preventDefault();
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
  API.regisgerUser(userInfo).then(function(res) {
    if (!res) {
      console.log("no shit");
    } else {
      console.log(res);
    }
  });
};

var handleHarvestSubmit = function(event) {
  event.preventDefault();
  console.log(
    "1 in Harves submit comment is " +
      $("#textComment")
        .text()
        .trim()
  );
  console.log(
    "2 in Harves submit comment is " +
      $("#textComment")
        .val()
        .trim()
  );
  var logEntry = {
    UserId: localStorage.getItem("userID"),
    sharing: $("input[id='customRadio1']:checked", "#harvest").val() === "on",
    quantity: $("#inputQuantity")
      .val()
      .trim(),
    harvest: $("#iputHarvest option:selected")
      .text()
      .trim(),
    comment: $("#textComment")
      .val()
      .trim(),
    createdAt: "2019-05-15T12:34:44.000Z",
    updatedAt: "2019-05-15T12:34:44.000Z"
  };
  console.log("Log entry " + logEntry);
  API.newLog(logEntry).then(function(res) {
    console.log("back from new log " + res);
    if (res) {
      location.reload();
    }
  });
};

var handleLogOff = function(event) {
  event.preventDefault();
  //save userid in localStorage for later reference
  localStorage.removeItem("userID");
  //load user detail page
  window.location.href = "/";
};

var handleUserInfoGet = function(event) {
  event.preventDefault();
  API.userInfo().then(function(data) {
    if (!data) {
      console.log("There is problem handle it");
    } else {
      console.log("in user update " + data.Name);
      $("#inputName").val(data.Name);
      $("#inputAddress").val(data.Address);
      $("#inputCity").val(data.City);
      $("#inputState").val(data.State);
      $("#inputZip").val(data.Zip);
      $("#inputEmail").val(data.EMail);
      $("#inputPhone").val(data.Phone);
      $("#inputPassword").val(data.Password);
    }
  });
};

var handleSaveUpdate = function(event) {
  event.preventDefault();
  console.log("in handleSaveUpdate");
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
      .trim()
  };

  console.log(userInfo);
  console.log("before api call ");
  API.saveUserInfo(userInfo).then(function(res) {
    if (!res) {
      console.log("no shit");
    } else {
      console.log(res);
      location.reload();
    }
    //refreshExamples();
  });
};

$loginSubmitBtn.on("click", handleMySubmit);
$regSubmitBtn.on("click", handleRegister);
$btnHarvest.on("click", handleHarvestSubmit);
$btnLogOff.on("click", handleLogOff);
$btnUpdateInfo.on("click", handleUserInfoGet);
$btnUpdateSubmit.on("click", handleSaveUpdate);
