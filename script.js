const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const list1 = [];

function newTodo() {
    /*Add Logic for creating a new Todo Item. */

    var box = document.getElementById("box");
    var li = document.createElement("li");
    li.setAttribute('id', box.value);

    var cbox = document.createElement('INPUT');
    cbox.setAttribute('type', 'checkbox');
    li.appendChild(cbox);
    cbox.setAttribute('id', 'box');

    

    checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxArray = Array.from(checkboxes)
    checkboxArray.forEach(function (checkbox) 
    {
        checkbox.addEventListener('change', confirmCheck);
    })
    countItem()


function confirmCheck()
 {
    let checkedToDo = todos.find(todo => 
    {
        return todo.id == this.parentElement.id;
    })
    checkedToDo.isChecked = !checkedToDo.isChecked
    countItem()
}

function countItem() 
{

    let itemCount = document.querySelectorAll('input[type="checkbox"]').length;
    let checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    let uncheckedCount = itemCount - checkedCount;

    itemCountSpan.innerHTML = itemCount
    uncheckedCountSpan.innerHTML = uncheckedCount
}

li.appendChild(document.createTextNode(box.value));
list.appendChild(li);

itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;

}

function removeTodo() {
    /*Add Logic for removing an existing TODO Item */

    var box = document.getElementById("box");
    var item = document.getElementById(box.value);
    list.removeChild(item);

    /*Below lines can be used to updated the data on frontend */

    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1;;
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1;
}

