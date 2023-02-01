async function getCountryListapi() {
  try {
    const jsondataCountries = await fetch(
      "https://api.covid19api.com/countries"
    );
    const jsdataCountries = await jsondataCountries.json();

    let countriesDropDown = document.getElementById("countriesDropDown");

    jsdataCountries.forEach((item) => {
      let option = document.createElement("option");
      option.setAttribute("value", item.Slug);

      let optionText = document.createTextNode(item.Country);
      option.appendChild(optionText);

      countriesDropDown.appendChild(option);
    });
  } catch (error) {
    console.error(`Error fetching list of Countries`);
  }
}

async function handleCountryChange(selected) {
  try {
    const selectedUrl = `https://api.covid19api.com/country/${selected.value}`;
    getCovidapi(selectedUrl);
  } catch (error) {
    console.error(`Error selecting countries from dropdown`);
  }
}

async function getCovidapi(selectedUrl) {
  try {
    let Global = "https://api.covid19api.com/country/Global";
    let value = selectedUrl;
    if (value == Global) {
      getGlobalCovidapi();
    } else {
      const jsondata = await fetch(selectedUrl);
      const jsdata = await jsondata.json();
      let todaydata = jsdata[jsdata.length - 1];
      // console.log(todaydata);

      let todayConformedCases = document.querySelector("#todayConfirmed");
      let todayConformedNum = todaydata.Active;
      var todayConformedNum1 = todayConformedNum.toLocaleString("hi-IN");
      todayConformedCases.append(todayConformedNum1);

      let todayRecoveredCases = document.querySelector("#todayRecovered");
      let todayRecoveredNum = todaydata.Recovered;
      var todayRecoveredNum1 = todayRecoveredNum.toLocaleString("hi-IN");
      todayRecoveredCases.append(todayRecoveredNum1);

      let todayDeathCases = document.querySelector("#todayDeaths");
      // let todayDeathNum = todaydata.NewDeaths;
      // var todayDeathNum1 = todayDeathNum.toLocaleString("hi-IN");
      todayDeathCases.append(`DATA NOT AVAILABLE`);

      let totalConformedCases = document.querySelector("#totalConfirmed");
      let totalConformedNum = todaydata.Confirmed;
      var totalConformedNum1 = totalConformedNum.toLocaleString("hi-IN");
      totalConformedCases.append(totalConformedNum1);

      let totalDeathCases = document.querySelector("#totalDeaths");
      let totalDeathNum = todaydata.Deaths;
      var totalDeathNum1 = totalDeathNum.toLocaleString("hi-IN");
      totalDeathCases.append(totalDeathNum1);

      let totalRecoveredCases = document.querySelector("#totalRecovered");
      let totalRecoveredNum = totalConformedNum - totalDeathNum;
      var totalRecoveredNum1 = totalRecoveredNum.toLocaleString("hi-IN");
      totalRecoveredCases.append(totalRecoveredNum1);

      let todayDate = document.querySelector("#todayDate");
      const todayDateNum = new Date(todaydata.Date);
      var todayDateNum1 = todayDateNum.toLocaleDateString("en-US");
      todayDate.append(todayDateNum1);
    }
  } catch (error) {
    console.error(`Error fetching data of seleted Country`);
  }
}

async function getGlobalCovidapi() {
  try {
    let jsonCoviddata = await fetch("https://api.covid19api.com/summary");
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

    let totalDeathCases = document.querySelector("#totalDeaths");
    let totalDeathNum = todaydata.TotalDeaths;
    var totalDeathNum1 = totalDeathNum.toLocaleString("hi-IN");
    totalDeathCases.append(totalDeathNum1);

    let totalRecoveredCases = document.querySelector("#totalRecovered");
    let totalRecoveredNum = totalConformedNum - totalDeathNum;
    var totalRecoveredNum1 = totalRecoveredNum.toLocaleString("hi-IN");
    totalRecoveredCases.append(totalRecoveredNum1);

    let todayDate = document.querySelector("#todayDate");
    const todayDateNum = new Date(todaydata.Date);
    var todayDateNum1 = todayDateNum.toLocaleDateString("en-US");
    todayDate.append(todayDateNum1);
  } catch (error) {
    console.error(`Error Fetching Global data`);
  }
}

getCountryListapi();
getGlobalCovidapi("https://api.covid19api.com/summary");
