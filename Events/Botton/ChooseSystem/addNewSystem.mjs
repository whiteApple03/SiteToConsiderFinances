function addNewSystem(botton) {




    let system = document.createElement('tr');
    system.id = `row${n}`;
    
    system.innerHTML = "<tr id=`row${n}`></tr>";
    document.querySelector("#placeForNewSystem").append(system);
    rowId = document.querySelector(`#row${n}`);


    for (let i = 0; i < 6; i++) {
        let contentOfSystem = ""
        let now = new Date();
        contentOfSystem = getNextTableElement(i, now);

        rowId.insertAdjacentHTML('beforeend', contentOfSystem);
    }

    n += 1; 
    let AlertAboutNoActiveSystem = document.querySelector("#noActiveSystem");

    if (n > 0) {

        AlertAboutNoActiveSystem.style.display = "none";        

    }
    if (n >= limitOfSystem) {
        botton.style.display = "none";
        
        let limit = document.createElement('span');
        limit.id = 'AlertAboutLimit';
        limit.textContent = 'Достигнут лимит систем';
        botton.after(limit);
        
        return 
    } 

}

