function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


loadJSON('./energy.json',
    (data) => {
        let table = "<body><h2>HTML Table</h2><table><tr><th>Flag</th><th>Country</th><th>Consumption</th></tr>";

        for (let i = 0; i < data.length; i++) {
            table += "<tr><td><img src='" + data[i].flag + "' width='30' height='20'/></td><td>" + data[i].country + "</td><td>" + data[i].consumption + "</td></tr>";
        }

        table += "</table></body>";

        document.body.innerHTML = table;
        console.log(data);
    },
    (err) => { console.error(err); }
);