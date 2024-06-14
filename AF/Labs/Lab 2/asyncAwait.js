const fetchDataAsync = async (url) => {
  try {
    const res = await fetchData(url);
    console.log("response", res);
  } catch (error) {
    console.log("Error", error);
  }
};

fetchDataAsync("https://api.api-ninjas.com/v1/animals?name=cheetah");

//for understanding
const checkValue = async (value) => {
  try {
    if (value <= 5) {
      throw new Error("Value is not greater than 5");
    }
    console.log("value is greater than 5");
  } catch (error) {
    console.log(error);
  }
};

const value = 2;
checkValue(value);
