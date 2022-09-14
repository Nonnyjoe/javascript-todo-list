const taskEntry = document.getElementById("taskEntry");
const submit = document.getElementById("submit");
const newEntriesContainer = document.getElementById("newEnriesContainer");



submit.addEventListener('click', function(e) {
    e.preventDefault();
    if (taskEntry.value !== "") {
        //create an task entry
        let newInput = document.createElement('input');
        newInput.classList.add("noDesign")
        newInput.id = "taskList";
        newInput.value = taskEntry.value
        newInput.setAttribute("readonly", "readonly");
        console.log(newInput);

        //create an edit and delete btn
        let editBtn = document.createElement('button');
        editBtn.id = "edit";
        editBtn.textContent = "Edit"
        let deleteBtn = document.createElement('button');
        deleteBtn.id = "delete";
        deleteBtn.textContent = "Delete"

        // create the del and edit container
        let actions = document.createElement('div');
        actions.classList.add("actions");
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        //create a form and append task entry
        let newForm = document.createElement('form');
        newForm.classList.add("taskEntries");
        newForm.appendChild(newInput);
        newForm.appendChild(actions);
        console.log(newForm)

        // create a div container for form and append form to it
        let formContainer = document.createElement('div');
        formContainer.classList.add('newEntry');
        newEntriesContainer.appendChild(formContainer).appendChild(newForm);
        taskEntry.value = "";
    } else {
        alert("Please fill in task to be added")
    }
});

newEntriesContainer.addEventListener('click', function(e) {
    if (e.target.id === "edit") {
        e.preventDefault();
        let toEdit = e.target.parentNode.previousElementSibling;
        if (e.target.textContent === " Edit ") {
            toEdit.removeAttribute("readonly");
            toEdit.classList.add("border");
            toEdit.focus();
            e.target.textContent = "Save";
        } else {
            toEdit.setAttribute("readonly", "readonly");
            e.target.textContent = " Edit ";
            toEdit.classList.remove("border");
        }

    } else if (e.target.id === "delete") {
        e.preventDefault();
        let toBeDeleted = e.target.parentNode.parentNode.parentNode;
        newEntriesContainer.removeChild(toBeDeleted);
    }


});