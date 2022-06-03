jsonData = []
fetch('json/boardMembers.json') //takes json from server
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        jsonData = data;
        appendData(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var container = document.getElementById("gallery"); //takes the gallary
    container.innerHTML = ""; //clears the gallary
    for (var i = 1; i < data.length; i++) { //loops through all items in JSON
        var buffer = document.createElement("div"); //creates element "div" (A blank box to place image)
        buffer.className = "imageCircle";
        buffer.setAttribute("onclick", `memberView(${data[i].id})`);
        buffer.innerHTML = `<img src="${data[i].image}" alt="${data[i].name}">
                            <div class="titleOfImage">
                                <p>${data[i].name}</p>
                            </div>`
        container.appendChild(buffer);
    }
}

function memberView(pid) {
    viewer = document.getElementById('viewer');
    viewer.style.display = 'flex';
    viewer.style.height = '100vh';
    viewer.style.width = '100%';
    var x = `<h1>S/he says,</h1><br>"Nothing"`;
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].id == pid) {
            x = `<h1>${jsonData[i].name} says,</h1><br>"${jsonData[i].quote}"`;
            break;
        }
    }
    document.getElementById('text').innerHTML = x;
}
function closeViewer() {
    viewer = document.getElementById('viewer');
    viewer.style.height = '0vh';
    viewer.style.width = '0%';
    document.getElementById('text').innerHtml = ``;
    viewer.style.display = 'none';   
}