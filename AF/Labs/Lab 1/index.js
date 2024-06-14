const waitPromise = new Promise((resolve, reject) => {
  const success = Math.random >= 0.5;
  console.log(success);
  setTimeout(() => {
    if (success) {
      resolve("Wait for 3 sec");
    } else {
      reject("an error occurd while waitin for 3 sec");
    }
  }, 3000);
});

waitPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error", err);
  });
