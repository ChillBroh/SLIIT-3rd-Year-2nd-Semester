const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject("Error" + xhr.status);
      }
    };
  });
};

fetchData("https://api.api-ninjas.com/v1/animals?name=cheetah")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//for understanding
const checkValue = (value) => {
  return new Promise((resolve, reject) => {
    if (value > 5) {
      resolve("Value is greater than 5");
    } else {
      reject("Value is not greater than 5");
    }
  });
};
const value = 3;
checkValue(value)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
