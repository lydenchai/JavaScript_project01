// show form when user click on button add
const showForm = document.querySelector('.addbtn');
showForm.addEventListener('click', e =>{
    let form = document.querySelector('.form-container');
    form.style.display = 'block';
    updateBtn.style.display = 'none';
    send.style.display = 'block';

    // Hide table when click on button add
    let hideTable = document.querySelector('.table-container');
    hideTable.style.display = 'none';

    // clear value from form when user click button add
    fullName.value = '';
    getDate.value = '';
    getEmail.value = '';
    getID.value = '';
    getClass.value = ''; 
});

// Hide form when user click on button cancel
const hideForm = document.querySelector('#cancel');
hideForm.addEventListener('click', e =>{
    let cencel = document.querySelector('.form-container');
    cencel.style.display = 'none';

    //Show table when click on button cancel
    let hideTable = document.querySelector('.table-container');
    hideTable.style.display = 'block';
});

// Search bar => only name
const search = document.querySelector('.search-data');
search.addEventListener('keyup', function (event){
    let text = search.value.toLowerCase();
    let item = document.querySelectorAll('tbody tr');
    for (let items of item) {
        let name = items.firstElementChild.textContent.toLowerCase();
        if (name.indexOf(text) === -1) {
            items.style.display = "none";
        } else {
            items.style.display = "";
        }
    }
});

// function send data to table
let tbody = document.querySelector("tbody");
let fullName = document.querySelector('#fullName');
let getDate = document.querySelector('#date');
let getEmail = document.querySelector('#email');
let getID = document.querySelector('#number');
let getClass = document.querySelector('#class'); 

function sendData(event){
    event.preventDefault();

    // Check if user didn't complete form, user can't click on button update
    if (fullName.value === '' || getDate === '' || getEmail === "" || getID === '' || getClass === ''){
        confirm("field cannot empty!");
    }else{
        let tr = document.createElement('tr')
        let td1 = document.createElement('td');
        td1.textContent = fullName.value;
        let td2 = document.createElement('td');
        td2.textContent = getDate.value;
        let td3 = document.createElement('td');
        td3.textContent = getEmail.value;
        let td4 = document.createElement('td');
        td4.textContent = getID.value;
        let td5 = document.createElement('td');
        td5.textContent = getClass.value;
        
        //clear value after field the form
        fullName.value = '';
        getDate.value = '';
        getEmail.value = '';
        getID.value = '';
        getClass.value = ''; 

        // edit button
        let td6 = document.createElement('td');
        td6.textContent = "Edit";
        td6.classList.add("btn-edit");

        //delete button
        let td7 = document.createElement('td');
        td7.textContent = "Delete";
        td7.classList.add("btn-delete");

        //upload data td
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tbody.appendChild(tr);  
    }
    // When user click on update button form will hide
    let cencel = document.querySelector('.form-container');
    cencel.style.display = 'none';

    // Show table when click on button update
    let hideTable = document.querySelector('.table-container');
    hideTable.style.display = 'block';
}

// Call function submit
let send = document.querySelector('#submit');
send.addEventListener('click', sendData);


// function for delete and edit
function delet(event){
    let tbody = event.target.className;
    if(tbody === "btn-delete"){
        let deleteTbody = event.target.parentElement;
        deleteTbody.remove();
    } else if (tbody === "btn-edit"){
        getTr = event.target.parentElement;

        // Form show when user click on edit button
        let formToShow = document.querySelector('.form-container');
        formToShow.style.display = 'block';

        // Form hide when user click on edit button
        let tableToHide = document.querySelector('.table-container');
        tableToHide.style.display = 'none';
        send.style.display = 'none';
        
        // Update button will show  
        updateBtn.style.display = 'block';

        // edit item form field 
        // Call value to edit
        fullName.value = getTr.children[0].textContent;
        getDate.value = getTr.children[1].textContent;
        getEmail.value = getTr.children[2].textContent;
        getID.value = getTr.children[3].textContent;
        getClass.value = getTr.children[4].textContent;
        updateBtn.addEventListener('click', function(){
            getTr.children[0].textContent = fullName.value;
            getTr.children[1].textContent = getDate.value;
            getTr.children[2].textContent = getEmail.value;
            getTr.children[3].textContent = getID.value;
            getTr.children[4].textContent = getClass.value;
            formToShow.style.display = 'none';
            tableToHide.style.display = 'block';
        });
    }
}

// update button
let updateBtn = document.querySelector('#update');

// Call function delete items
let test = document.querySelector("tbody");
test.addEventListener("click", delet);