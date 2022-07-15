import GlobalVars from '../Vars/GlobalVars.json' assert {type: "json"};

let n = GlobalVars.n;

export  function getNextTableElement(numberOfRow, now) {
    switch(numberOfRow) {
        case 0:
            return `<td id="number">${n+1}</td>`;
            break;
        case 1:
            return `<td><a href="financialSystems.html">${prompt("Введите название новой системы", `Система №${n+1}`)}</a></td>`;
            break;
        case 2:
            return '<td style="min-width: 70px"><a href="#">цель</a></td>';
            break;
        case 3:
            return `<td>${(now.getDate() < 10) ? '0':''}${now.getDate()}-${(now.getMonth()+1 < 10) ? '0':''}${now.getMonth()+1}-${now.getFullYear()}</td>`;
            break;
        case 4:
            return `<td>${(now.getDate() < 10) ? '0':''}${now.getDate()}-${(now.getMonth()+1 < 10) ? '0':''}${now.getMonth()+1}-${now.getFullYear()}</td>`;
            break;
        case 5:
            return `<td class="delete-system"><bottom id="buttrow${n}" class="bottom-delete-system" ><img class="icon-delete" src="../static/icon/deleteElement.png" alt="Удалть Систему"></bottom></td>`;

    }   
}
