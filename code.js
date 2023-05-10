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

// Book Read Toggle
Book.prototype.toggleReadVal = function () {
    if(this.status == '0'){
        this.status = '1';
    }
    else{
        this.status = '0';
    }
    //this.status = this.status === '0' ? this.status = '1' : this.status = '0'
};

function toggleRead(index) {
    Library[index].toggleReadVal();
    createBookList();
}

function removeBook(index) {
    Library.splice(index, 1);
    createBookList();
}

//Create Book Library to the page
function createBookList() {
    const bookShelf = document.querySelector('.book-collection');
    
    bookShelf.textContent = '';
    

    for(let i = 0; i < Library.length; i++) {
        
        const book = Library[i];
        const readClass = book.status == '1' ? 'read' : 'not-read';
        const readText = book.status == '1' ? 'Read' : 'Not Read';
        
        
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const btnContainer = document.createElement('div');
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        card.className = "card";
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        btnContainer.className = "card-buttons";
        readBtn.className = "check-read";
        readBtn.textContent = readText;
        readBtn.id = i;
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "Remove";
        removeBtn.id = i;

        readBtn.addEventListener('click', () => {
            toggleRead(readBtn.id)
        });
        removeBtn.addEventListener('click', () => {
            removeBook(removeBtn.id)
        });

        btnContainer.appendChild(readBtn);
        btnContainer.appendChild(removeBtn);

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(btnContainer);
        
        bookShelf.appendChild(card);
    }
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