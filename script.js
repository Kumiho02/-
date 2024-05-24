// script.js
document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskTableBody = document.querySelector('#taskTable tbody');
    const totalHoursElement = document.getElementById('totalHours');
    let totalHours = 0;

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const taskName = document.getElementById('taskName').value;
        const teamMember = document.getElementById('teamMember').value;
        const hoursSpent = parseFloat(document.getElementById('hoursSpent').value);
        
        const newRow = taskTableBody.insertRow();
        newRow.insertCell(0).textContent = taskName;
        newRow.insertCell(1).textContent = teamMember;
        newRow.insertCell(2).textContent = hoursSpent;

        totalHours += hoursSpent;
        totalHoursElement.textContent = `Загальна кількість витрачених годин: ${totalHours}`;

        taskForm.reset();
    });
});
