var tbaleBody = document.querySelector('table tbody')
var btnAdd = document.querySelector('.btnAdd')
var input = document.querySelector('.input')

function addRow(text) {
    var htmlString = '<tr><td>' + text + '</td></td><td><button class = "btnDel">Del</button></td></tr>';
    tbaleBody.insertAdjacentHTML('beforeend', htmlString);
}

btnAdd.addEventListener('click', function() {
    addRow(input.value)
    input.value = null;
    input.focus();
});

document.addEventListener('click', function(e) {
    if (e.target && e.target.className == 'btnDel') {
        e.target.parentNode.parentNode.remove();
    }
})