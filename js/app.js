'use strict';







let form = document.getElementById('employee form');
let list = document.getElementById('employee list');
let listContent= ['Name', 'Email','Department', 'Salary']
let arrayList= [];

function Build(name, email , depart, salary) {
    this.name = name;
    this.email = email;
    this.depart = depart;
    this.salary = salary;
    arrayList.push(this);
    
}

Build.prototype.renderItem = function () {

    for (let index = 0; index < arrayList.length; index++) {
    }

    let rowTD = document.createElement('tr');


    let nameTD = document.createElement('td');
    nameTD.textContent = this.name;
    let emailTD = document.createElement('td');
    emailTD.textContent = this.email;
    let depTD = document.createElement('td');
    depTD.textContent = this.depart;
    let salaryTD = document.createElement('td');
    salaryTD.textContent = this.salary;

    rowTD.appendChild(nameTD);
    rowTD.appendChild(emailTD);
    rowTD.appendChild(depTD);
    rowTD.appendChild(salaryTD);
    list.appendChild(rowTD);
    

}




function handelForm(event) {
    event.preventDefault();
    let yourName = event.target.name.value;
    let yourEmail = event.target.name.value;
    let yourDep = event.target.name.value;
    let yourSalary = event.target.name.value;
    
    let newItem = new Build(yourName, yourEmail, yourDep, yourSalary);
    newItem.renderItem();

    localStorage.setItem('KeyName', JSON.stringify(arrayList));
}


function renderHeader() {

    let headerRow = document.createElement('tr');
    let th;
    for (let index = 0; index < listContent.length; index++) {
    let th = document.createElement('th');
    th.textContent = listContent[index];
    headerRow.appendChild(th);
        
    }
    
    list.appendChild(headerRow);
}


form.addEventListener('submit', handelForm);
renderHeader();
