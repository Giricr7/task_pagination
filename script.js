setdata=  (page)=>{
    

// fetching json data from given url
    let url = 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json'

    fetch(url)
    .then((data) => {
        return data.json();
    })
        .then((jsondata) => {
        
         return (jsondata);
        })
        .then((jsdata) => {
          
           

            for (let i = 0; i < jsdata.length; i++){

                table = document.createElement('table');
                
                row_1 = table.insertRow();
                id_row = row_1.insertCell();
                id_row.textContent = 'Id: ';
                id_row.setAttribute('id','number')
                id_data = row_1.insertCell();
                id_data.textContent = jsdata[i].id;

                row_2 = table.insertRow();
                name_row = row_2.insertCell();
                name_row.textContent = 'Name: ';
                name_row.setAttribute('id','name')
                name_data = row_2.insertCell();
                name_data.textContent = jsdata[i].name;
                

                row_3 = table.insertRow();
                email_row = row_3.insertCell();
                email_row.textContent = 'Email: ';
                email_row.setAttribute('id','email')
                email_data = row_3.insertCell();
                email_data.textContent = jsdata[i].email;

                data_div = document.getElementById('display_data');
                data_div.appendChild(table);

                
            }


 
    })





}




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

//writing eventlistener for all pagination buttons
pag_numbers = pag_table.getElementsByClassName('paging_buttons');


setdata();
