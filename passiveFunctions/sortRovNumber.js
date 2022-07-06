export function sortRovNumber() {
    tbody = document.querySelector("#placeForNewSystem");

    for(let i = 0; i < tbody.childNodes.length; i++) {
        tbody.childNodes[i].id[tbody.childNodes[i].id.length-1];
        Bottom = document.querySelector(`#buttrow${tbody.childNodes[i].id[tbody.childNodes[i].id.length-1]}`);
        Bottom.id = `buttrow${i}`;
        tbody.childNodes[i].id = `row${i}`;


    }

    listNumberRow = document.querySelectorAll("#number")

    for (let i = 0; i < listNumberRow.length; i++) {
        listNumberRow[i].innerHTML = `${i+1}`;
    }
}