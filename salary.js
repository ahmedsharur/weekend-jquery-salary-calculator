console.log('in salary ')

$(document).ready(readyNow)


function readyNow(){
    console.log('in readyNow')

    $('#submit-button').on('click', addEmployeeSalary)
}

function addEmployeeSalary(){

    // Target element by id
    let firstName = $('#f-name').val();
    let lastName = $('#l-name').val();
    let iD = $('#i-d').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();

    $('employeesalary').append(`<thead>
    <th>First Name</th>
    <th>Last Name</th>
    <th>ID</th>
    <th>Title</th>
    <th>Annual Salary</th>
    <th></th>
</thead>
<tr>
    <td>4</td>
    <td>5</td>
    <td>4</td>
    <td>4</td>
    <td>4</td>
    <th>Delete</th>
</tr>`)

    //empty the fields
    $('#f-name').val('');
    $('#l-name').val('');
    $('#i-d').val('');
    $('#title').val('');
    $('#annual-salary').val();

}