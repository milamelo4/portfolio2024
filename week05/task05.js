async function getUsers(names) {
  let jobs = [];

  for (let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      (failResponse) => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

//Fetch: Cross-Origin Requests
// 1. Declare the function to process the weather data
function gotWeather({ temperature, humidity }) {
  console.log(`temperature: ${temperature}, humidity: ${humidity}`);
}
let script = document.createElement("script");
script.src = `http://another.com/weather.json?callback=gotWeather`;
document.body.append(script);
// The expected answer from the server looks like this:
gotWeather({
  temperature: 25,
  humidity: 78
});