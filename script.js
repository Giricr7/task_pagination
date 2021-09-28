var currentPage;


displaydata = (page) => {
    data_div = document.getElementById('display_data');
 
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
  
    heading = document.createElement('h1')
    heading.innerHTML=`Employee Details-Page ${page}`
        data_div.appendChild(heading);
   
    for (let i = (page * 10) - 10; i < page * 10; i++){

        //creating table and inserting the fetched data 
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

        
        data_div.appendChild(table);

        br = document.createElement('br')
        data_div.appendChild(br);
       
    }
    currentPage = page
   
  //highlighting the current page in pagination button
    let cells = pag_div.getElementsByTagName('td')
    for (i = 0; i < cells.length;i++)
    {
        cells[i].style.background='#e47474'
    }
    
    document.getElementById(`${currentPage}`).style.background = 'green'
   
})
}
 
    
    
// sending the exact page which is to be fetched
    
setdata = async (page_num) => {

    var data_div = document.getElementById('display_data');
    data_div.innerHTML = ''


    if (page_num > 0) {
    
    displaydata(page_num)
    
    }

    if (page_num==='first') {
    
        displaydata(1);
    }
    
    if (page_num==='last') {
        displaydata(10);
    }

    if (page_num === 'previous')
    {
        if(currentPage>1)
            displaydata(currentPage - 1)
        else {
            displaydata(1)
           
        }
            
    }

    if (page_num === 'next')
    {
        if(currentPage<10)
            displaydata(currentPage + 1)
        else
        {
            displaydata(10)
        }
            
    }

}




//creating pagination outlook

var pag_table = document.createElement('table');

var pag_row = pag_table.insertRow()

for (let i = 1; i <= 14; i++){
    
    if (i === 1) {
        let cell = pag_row.insertCell();
        cell.textContent = 'First'
        cell.setAttribute('id', 'first')
        cell.setAttribute('onclick',"setdata('first')")
    }
    if (i === 2) {
        let cell = pag_row.insertCell();
        cell.textContent = '<< Previous'
        cell.setAttribute('id', 'previous')
        cell.setAttribute('onclick',"setdata('previous')")
    }
    if (i > 2 && i< 13) {
        let cell = pag_row.insertCell();
        cell.textContent = i - 2;
        cell.setAttribute('id', i - 2)
        cell.setAttribute('onclick',`setdata(${i-2})`)
    }
    if (i===13) {
        
        let cell = pag_row.insertCell();
        cell.textContent = 'Next >>'
        cell.setAttribute('id', 'next')
        cell.setAttribute('onclick',"setdata('next')")
    }
    if (i === 14) {
        let cell = pag_row.insertCell();
        cell.textContent = 'Last'
        cell.setAttribute('id', 'last')
        cell.setAttribute('onclick',"setdata('last')")
    }

}


//inserting the table to html

var pag_div = document.getElementById('pag_div')

pag_div.appendChild(pag_table)

// on reloading set the page to display the 1st page as default
if (location.reload) {
    setdata(1)
}



