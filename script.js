//creating pagination outlook

let pag_table = document.createElement('table');

var pag_row = pag_table.insertRow()

for (let i = 1; i <= 14; i++){
    
    if (i===1)
    {
        let cell = pag_row.insertCell();
        cell.textContent = 'First'
        cell.setAttribute('id', 'first')
        cell.setAttribute('class','paging_buttons')
    }
    if (i === 2) {
        let cell = pag_row.insertCell();
        cell.textContent = '<< Previous'
        cell.setAttribute('id', 'previous')
        cell.setAttribute('class','paging_buttons')
    }
    if (i > 2 && i< 13) {
        let cell = pag_row.insertCell();
        cell.textContent = i - 2;
        cell.setAttribute('id', i - 2)
        cell.setAttribute('class','paging_buttons')
    }
    if (i===13) {
        
        let cell = pag_row.insertCell();
        cell.textContent = 'Next >>'
        cell.setAttribute('id', 'next')
        cell.setAttribute('class','paging_buttons')
    }
    if (i === 14) {
        let cell = pag_row.insertCell();
        cell.textContent = 'Last'
        cell.setAttribute('id', 'last')
        cell.setAttribute('class','paging_buttons')
    }

}


//inserting the table to html

let pag_div = document.getElementById('pag_div')

pag_div.appendChild(pag_table)

pag_numbers = pag_table.getElementsByClassName('paging_buttons');



