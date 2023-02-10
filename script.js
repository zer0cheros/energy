function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
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

const root = document.querySelector('.root')
loadJSON('./energy.json' ,
        (data)=> {
            //här fortsätter du
            displayData(data)
        },
        (err)=> { console.error(err); }
);

function displayData(json){
    root.innerHTML = `
    <tr>
        <th>Country</th>
        <th>Consumption</th>
        <th>Flag</th>
    </tr>
    ${json.map(d=> root.innerHTML = `
        <tr>
            <td>${d.country}</td>
            <td>${d.consumption}</td>
            <td><img height="50px" width="100px" src="${d.flag}" /></td>
        </tr>
    `)}
    `
}