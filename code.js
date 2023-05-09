// Book List Array
let Library = [];

// Book Constructor
function Book(title,author,pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

// Book Creation
function addBookToLibrary() {
    const title = document.querySelector('#new_title').value;
    const author = document.querySelector('#new_author').value;
    const pages = document.querySelector('#new_pages').value;
    const status = document.querySelector('#new_status').value;

    const newBook = new Book(title,author,pages,status);
    Library.push(newBook);
    createBookList();
}

//Create Book Library to the page
function createBookList() {
    const bookShelf = document.querySelector('#book-collection');

    bookShelf.textContent = '';

    for(let i = 0; i < Library.length; i++) {
        const book = Library[i];
        const card = document.createElement('div');

        const readClass = book.status == '1' ? 'read' : 'not-read';
        const readText = book.status == '1' ? 'Read' : 'Not Read';
        
        card.innerHTML = `
        <div class="card">
            <h2>${book.title}</h2>
            <p><i>by ${book.author}</i></p>
            <p>${book.pages} pages</p>
            <div class="card-buttons">
                <button class="check-read ${readClass}" onclick="toggleRead(${i})">${readText}</button>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
            </div>
        </div>`;

        bookShelf.appendChild(card);
    }
}

// Book Read Toggle
Book.prototype.toggleRead = function () {
    this.status = this.status == '0' ? this.status = '1' : this.status = '0'
};

function toggleRead(index) {
    Library[index].toggleRead();
    createBookList();
}

function removeBook(index) {
    Library.splice(index, 1);
    createBookList();
}


//User Interface
const addBookBtn = document.querySelector('#addBookBtn');
const closeModal = document.querySelector('#closeModal');
const submitBook = document.querySelector('.new_book')
const addModal = document.querySelector('.overlay');

addBookBtn.addEventListener('click', () => {
    addModal.classList.add('active')
    console.log("opening...")
});

closeModal.addEventListener('click', () => {
    addModal.classList.remove('active')
    console.log("closeing...")
});

submitBook.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    addModal.classList.remove('active')
    console.log("submiting...")
});