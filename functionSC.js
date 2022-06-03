filtermode = 'all';
function showDemo(idDemo) {
    viewer = document.getElementById('viewer');
    viewer.style.display = 'flex';
    viewer.style.height = '100vh';
    viewer.style.width = '100%';
    document.getElementById('viewerCanvas').src = `Nat`;
    document.getElementById('imageDescription').textContent = `NAT`
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].id == idDemo) {
            document.getElementById('viewerCanvas').src = `${jsonData[i].image}`;
            document.getElementById('imageDescription').textContent = `${jsonData[i].description}`;
            break;
        }
    }
}
function closeViewer() {
    viewer = document.getElementById('viewer');
    viewer.style.height = '0vh';
    viewer.style.width = '0%';
    document.getElementById('viewerCanvas').src = ``;
    viewer.style.display = 'none';   
}
jsonData = [];
filteredJsonData = updateFilter('all');
// fetch api for showcase
fetch('json/showcase.json') //takes photoshop.json from server
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
    for (var i = 0; i < data.length; i++) { //loops through all items in JSON
        var buffer = document.createElement("div"); //creates element "div" (A blank box to place image)
        buffer.className = "imgThumbnail";
        // buffer.onclick = showDemo(data[i].id);
        buffer.setAttribute("onclick", `showDemo(${data[i].id})`);
        buffer.setAttribute("data-Category", `${data[i].category}`);
        buffer.innerHTML = `<img src="${data[i].image}" alt="${data[i].title}">
                            <div class="titleOfImage">
                                <p>${data[i].title}</p>
                            </div>`
        container.appendChild(buffer);
    }
}

// search filter for photoshop
function search() {
    // Declare variables
    let input = document.getElementById('searchInGallery').value.toUpperCase();
    let container = document.getElementById("gallery");
    let elements = container.getElementsByClassName('imgThumbnail');

    // Loop through all list items, and hide those who can't index the the search query
    for (let i = 0; i < elements.length; i++) {
        let p = elements[i].getElementsByTagName("p")[0];
        let txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
            elements[i].style.display = "";
        } else {
            elements[i].style.display = "none";
        }
    }
}

function filter() {
    let selection = document.getElementById('filter').value;
    console.log(selection);
    updateFilter(selection);
}
function updateFilter(f){
    let counter = 0;
    let filteredData = [];
    if (f == "all"){
        filteredData = jsonData;
    } else {
        for (let i = 0; i < jsonData.length; i++){
            if (jsonData[i].category == f){
                filteredData[counter] = jsonData[i];
                counter++;
            }
        }
    }
    // If selection is "all", it returns everything from jsonData
    // else, it filters the data based on the selection
    filteredJsonData = filteredData;
    appendData(filteredData);
}