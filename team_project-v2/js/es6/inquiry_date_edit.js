const dateBox = document.getElementById("date");

function writeTime() {
    const newDate = new Date(),
        year = newDate.getFullYear(),
        month = newDate.getMonth()+1,
        date = newDate.getDate();
    
    dateBox.value = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;
}

function init() {
    writeTime();
}

init();
