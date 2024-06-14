const fetchData = (url, callback) => {
  var xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(null, xhr.responseText);
    } else {
      callback("Error:" + xhr.status);
    }
  };
};

fetchData(
  "https://api.api-ninjas.com/v1/animals?name=cheetah",
  (error, response) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Response", response);
    }
  }
);

//for understanding
const checkValue = (value, callback) => {
  if (value > 5) {
    callback(null, "Greater than 5");
  } else {
    callback("Error:" + "Not Greater than 5");
  }
};
const value = 6;
checkValue(value, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
