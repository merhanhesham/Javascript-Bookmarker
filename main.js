var bookmarkName = document.getElementById('BN');
var websiteUrl = document.getElementById('WU');

var allSites = [];
if (localStorage.getItem('All Sites') != null) {
    allSites = JSON.parse(localStorage.getItem('All Sites'));
    displaySites();
}

function addSites() {
    var site = {
        Name: bookmarkName.value,
        Url: websiteUrl.value
    }
    allSites.push(site);
    localStorage.setItem('All Sites', JSON.stringify(allSites));

    displaySites();
    clear();
}

function displaySites() {
    var cartona = '';
    for (var i = 0; i < allSites.length; i++) {
        cartona +=
            `<div class="siteContent mx-auto">
            <div class="row ">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-2">
                            <h4 class="ps-3 fw-bold">${allSites[i].Name}</h4>
                        </div>
                        <div class="col-md-4  d-flex offset-md-6">
                        <button class="btn btn-primary me-2" onclick="window.open('${allSites[i].Url}','_blank')">Visit</button>
                        <button type="button" class="btn btn-danger" onclick="deleteSite(${i})">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    document.getElementById('sites').innerHTML = cartona;
}

function clear() {
    bookmarkName.value = '';
    websiteUrl.value = '';
}

function deleteSite(index) {

    allSites.splice(index, 1);
    displaySites();
}

