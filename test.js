function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making request to ${location}`);
    if (location === "Google") {
      resolve("Google says Hi!");
    } else {
      reject("we can only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`extra info + ${response}`);
  });
}

// ------------Async & Await------------
async function doWork() {
  const response = makeRequest("Google");
  console.log("Response Received");
  const processResponse = processRequest(response);
  console.log(processResponse);
}
doWork();
