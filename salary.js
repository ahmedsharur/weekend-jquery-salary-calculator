console.log('in salary ')

$(document).ready(readyNow)


function readyNow(){
    console.log('in readyNow')

    $('#submit-button').on('click', addEmployeeSalary)
    $('#delete-button').on('click', deleteEmployeeInfo)

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
     <td>'${firstName}'</td>
    <td>'${lastName}'</td>
    <td>'${id}'</td>
    <td>'${title}'</td>
    <td>'${annualSalary}'</td>
    <th><button id="delete-button">Delete</button></th>
</tr> `)

    //empty the fields
    $('#f-name').val('');
    $('#l-name').val('');
    $('#i-d').val('');
    $('#title').val('');
    $('#annual-salary').val('');
}


function deleteEmployeeInfo(){

}