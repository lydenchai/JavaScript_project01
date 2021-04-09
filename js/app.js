// show form
let showForm = document.querySelector('.addbtn');
showForm.addEventListener('click', e =>{
    let form = document.querySelector('.form-container');
    form.style.display = 'block';
});

// Hide form
let hideForm = document.querySelector('#cencel');
hideForm.addEventListener('click', e =>{
    let cencel = document.querySelector('.form-container');
    cencel.style.display = 'none'
});

// Search 
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

// function send data
function sendData(event){
    event.preventDefault();
    let tbody = document.querySelector("tbody");
    let fullName = document.querySelector('#fullName');
    let getDate = document.querySelector('#date');
    let getEmail = document.querySelector('#email');
    let getID = document.querySelector('#number');
    let getCountry = document.querySelector('#country');
    
    if (fullName.value === '' || getDate === '' || getEmail === "" || getID === '' || getCountry === ''){
        confirm("Please complet the form before update data!!!");
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
        td5.textContent = getCountry.value;
        
        //clear value from form 
        fullName.value = '';
        getDate.value = '';
        getEmail.value = '';
        getID.value = '';
        getCountry.value = ''; 

        // edit button
        let td6 = document.createElement('td');
        td6.textContent = "Edit";
        td6.classList.add("btn-edit");
        //delete button
        let td7 = document.createElement('td');
        td7.textContent = "Delete";
        td7.classList.add("btn-delete");
        //upload data
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tbody.appendChild(tr);  
    }
    let cencel = document.querySelector('.form-container');
    cencel.style.display = 'none'
}

// Call function submit
let send = document.querySelector('#submit');
send.addEventListener('click', sendData);

// Function delete items 
function delet(event){
    let tbody = event.target.className;
    if(tbody === "btn-delete"){
        let deleteTbody = event.target.parentElement;
        deleteTbody.remove();
    }
}

// Call function delete items
let test = document.querySelector("tbody");
test.addEventListener("click", delet);
// Function edit items