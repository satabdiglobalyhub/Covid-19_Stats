async function getCovidapi() {
  const jsondata = await fetch("https://api.covid19api.com/country/nepal");

  const jsdata = await jsondata.json();
  console.log(jsdata);
  const Todaydata = jsdata[jsdata.length - 1];
  console.log(`Active Cases are ${Todaydata.Active}`);
  console.log(`Total Cases are ${Todaydata.Confirmed}`);
  console.log(`Recovered Cases are ${Todaydata.Recovered}`);
  console.log(`Total Deaths are ${Todaydata.Deaths}`);
  const date= new Date(Todaydata.Date)  
  console.log(`Last updated time: ${date.toLocaleDateString('en-US')}`);
}

getCovidapi();
