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
        let root = document.getElementById('root');
        data.forEach(element => root.insertAdjacentHTML('beforebegin', `<tr><td>${element.country}</td><td>${element.consumption}</td><td>${element.flag}</td></tr>`));
        //här fortsätter du
        console.log(data);
    },
    (err) => { console.error(err); }
);
