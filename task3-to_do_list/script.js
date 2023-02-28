function addListItem(text) {
    var parent = document.getElementById('list');
    var listItem = document.createElement('div');
    listItem.className = 'item';
    listItem.innerHTML = text;
    parent.appendChild(listItem);
}

var add = document.getElementById('add');
var del = document.getElementById('delete');

add.addEventListener('click', function () {
    data = document.getElementById('input').value;
    document.getElementById('input').value = ""
    addListItem(data);
});

del.addEventListener('click', function () {
    var lis = document.getElementById('list');
    lis.removeChild(lis.firstChild);
    console.log(lis.innerHTML);
    console.log(document.getElementById('list').innerHTML);
    document.getElementById('list').innerHTML = lis.innerHTML;
});

document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        add.click();
    }
});
