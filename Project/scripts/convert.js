nameList = [];

const output = (nameList) => {
  nameList.forEach(
    countryName => 
    {
      var select = document.getElementById("list");
      var cName = document.createElement("option");
      cName.textContent = countryName.name;
      cName.value = countryName.name;
      select.appendChild(cName);
    }
  )
}

const url = 'https://api.coinbase.com/v2/currencies';
async function getList(url) {
    const response = await fetch(url);
    templeList = await response.json();
    nameList = templeList.data;
    output(nameList);
};

getList(url);