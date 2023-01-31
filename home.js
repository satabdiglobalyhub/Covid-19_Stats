async function getCountryListapi() {
  const jsondataCountries = await fetch("https://api.covid19api.com/countries");
  const jsdataCountries = await jsondataCountries.json();

  let countriesDropDown = document.getElementById("countriesDropDown");

  jsdataCountries.forEach((item) => {
    let option = document.createElement("option");
    option.setAttribute("value", item.Slug);

    let optionText = document.createTextNode(item.Country);
    option.appendChild(optionText);

    countriesDropDown.appendChild(option);
  });
}

async function handleCountryChange(selected) {
  const selectedUrl = `https://api.covid19api.com/country/${selected.value}`;
  console.log(selectedUrl);
}

async function getCovidapi() {
  const jsonCoviddata = await fetch("https://api.covid19api.com/summary");
  const jsCoviddata = await jsonCoviddata.json();
  let todaydata = jsCoviddata.Global;

  let todayConformedCases = document.querySelector("#todayConfirmed");
  let todayConformedNum = todaydata.NewConfirmed;
  var todayConformedNum1 = todayConformedNum.toLocaleString("hi-IN");
  todayConformedCases.append(todayConformedNum1);

  let todayRecoveredCases = document.querySelector("#todayRecovered");
  let todayRecoveredNum = todaydata.NewRecovered;
  var todayRecoveredNum1 = todayRecoveredNum.toLocaleString("hi-IN");
  todayRecoveredCases.append(todayRecoveredNum1);

  let todayDeathCases = document.querySelector("#todayDeaths");
  let todayDeathNum = todaydata.NewDeaths;
  var todayDeathNum1 = todayDeathNum.toLocaleString("hi-IN");
  todayDeathCases.append(todayDeathNum1);

  let totalConformedCases = document.querySelector("#totalConfirmed");
  let totalConformedNum = todaydata.TotalConfirmed;
  var totalConformedNum1 = totalConformedNum.toLocaleString("hi-IN");
  totalConformedCases.append(totalConformedNum1);

  let totalRecoveredCases = document.querySelector("#totalRecovered");
  let totalRecoveredNum = todaydata.TotalRecovered;
  var totalRecoveredNum1 = totalRecoveredNum.toLocaleString("hi-IN");
  totalRecoveredCases.append(totalRecoveredNum1);

  let totalDeathCases = document.querySelector("#totalDeaths");
  let totalDeathNum = todaydata.TotalDeaths;
  var totalDeathNum1 = totalDeathNum.toLocaleString("hi-IN");
  totalDeathCases.append(totalDeathNum1);

  let todayDate = document.querySelector("#todayDate");
  const todayDateNum = new Date(todaydata.Date);
  var todayDateNum1 = todayDateNum.toLocaleDateString("en-US");
  todayDate.append(todayDateNum1);
}

getCountryListapi();
getCovidapi();
