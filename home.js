async function getCovidapi() {
  const jsondata = await fetch("https://api.covid19api.com/country/nepal");
  const jsdata = await jsondata.json();
  // console.log(jsdata);
  const Todaydata = jsdata[jsdata.length - 1];
  
  // console.log(`Active Cases are ${Todaydata.Active}`);
  let activeCases = document.querySelector("#activeCases");
  let activeNum = Todaydata.Active;
  var activeNum1 = activeNum.toLocaleString('hi-IN')
  activeCases.append(activeNum1);

  // console.log(`Total Cases are ${Todaydata.Confirmed}`);
  let conformedCases = document.querySelector("#conformedCases");
  let conformedNum = Todaydata.Confirmed;
  var conformedNum1 =conformedNum.toLocaleString('hi-IN')
  conformedCases.append(conformedNum1);

  // console.log(`Recovered Cases are ${Todaydata.Recovered}`);
  let conformedRecovered = document.querySelector("#recoveredCases");
  let recoveredNum = Todaydata.Recovered;
  var recoveredNum1 =recoveredNum.toLocaleString('hi-IN')
  conformedRecovered.append(recoveredNum1);

  // console.log(`Total Deaths are ${Todaydata.Deaths}`);
  let conformedDeaths= document.querySelector("#totalDeaths")
  let deathNum = Todaydata.Deaths;
  var deathNum1 =deathNum.toLocaleString('hi-IN')
  conformedDeaths.append(deathNum1)
  
  // console.log(`Last updated time: ${date.toLocaleDateString('en-US')}`);
  let todaysDate= document.querySelector("#bodyUpdated")
  const date = new Date(Todaydata.Date);
  todaysDate.append(date.toLocaleDateString("en-US"));
}

getCovidapi();
