$(document).ready(function (){
    if (localStorage.getItem('notes') === null) {
        arr = [];
        localStorage.setItem('notes', JSON.stringify(arr));
    } else {
        var arr = JSON.parse(localStorage.getItem('notes'));
        refresh_table(arr);
    }
})