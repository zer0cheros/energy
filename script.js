function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
      } else {
        if (error) error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

loadJSON(
  "./energy.json",
  (data) => {
    //här fortsätter du
    displayData(data);
    console.log(data);
  },
  (err) => {
    console.error(err);
  }
);

function displayData(data) {
  const list = document.querySelector("table");
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");
    const flag = document.createElement("td");
    const country = document.createElement("td");
    const consumption = document.createElement("td");
    const img = document.createElement("img");

    country.innerHTML = data[i].country;
    consumption.innerHTML = data[i].consumption;
    img.src = data[i].flag;

    flag.appendChild(img);
    list.appendChild(tr);
    tr.appendChild(flag);
    tr.appendChild(country);
    tr.appendChild(consumption);
  }
}
