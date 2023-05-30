const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = '';

form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********

const addItem = (e) => {
    e.preventDefault();

    const value = groceryInput.value;
    const id = new Date().getTime().toString(); // don't do this in serious projects

    if (value && !editFlag) {
        const element = document.createElement('article');
        element.classList.add('grocery-item');

        const attribute = document.createAttribute('data-id');
        attribute.valu = id;
        element.setAttributeNode(attribute);
        element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
        </div>
    `;

        list.appendChild(element);
        alert('Item added to the list', 'success');
        container.classList.add('show-container');

        addToLocalStorage(id, value);
        setBackToDefault();
    } else if (value && editFlag) {
    } else {
        displayAlert('Please, enter value!', 'danger');
    }
};

const displayAlert = (text, action) => {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000);
};