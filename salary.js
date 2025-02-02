console.log('in salary ')


$(document).ready(readyNow)

// an empty array
let totalMonthlySalary = [];

function readyNow(){
    console.log('in readyNow')
    // Submit button that outputs values or employee info when clicked
    $('#submit-button').on('click', addEmployeeSalary)
    //Delete button that deletes the employee info when clicked
    $('#employeesalary').on('click', '#delete-button', deleteEmployeeInfo)

}


    
function addEmployeeSalary(){

    // Target output by id
    let firstName = $('#f-name').val();
    let lastName = $('#l-name').val();
    let id = $('#i-d').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();

    // appending the list in the employee salary calculator
    $('#employeesalary').append(`
<tr>
     <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>$${annualSalary}</td>
    <th><button id="delete-button">Delete</button></th>
</tr> 

`)

    //empty the fields
    $('#f-name').val('');
    $('#l-name').val('');
    $('#i-d').val('');
    $('#title').val('');
    $('#annual-salary').val('');

// pushing annualSalary to the totalMonthlySalary array
totalMonthlySalary.push(annualSalary)

let totalSalary = 0;
// looping through the totalMonthlySalary array
for (let salary of totalMonthlySalary){
    totalSalary += Number(salary);
}


//if total monthly costs exceeds 20,000 there will be a red background color on the total monthly cost
if (totalSalary/12 > 20000){
    $('#totalMonthlySalary').text(`Total Monthly: $ ${(totalSalary/12).toFixed(2)}`).css('background-color', 'red')
    }

    $('#totalMonthlySalary').text(`Total Monthly: $ ${(totalSalary/12).toFixed(2)}`)

}


function deleteEmployeeInfo(){
// this will delete 
$(this).parent().parent().remove();

}

