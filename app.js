ui = new UI();
ls = new LS();

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const form = document.querySelector("form");
const tabel = document.querySelector("tbody");

form.addEventListener("submit", addBook);
tabel.addEventListener("click", deleteBook);

document.addEventListener('DOMContentLoaded', getBooks);

function addBook(e) {
	const book = new Book(titleInput.value, authorInput.value, isbnInput.value);
	ui.addBook(book);
	ls.addBook(book);
	e.preventDefault();
}

function deleteBook(e){
	let book = e.target.parentElement.firstChild
	ui.deleteBook(book);
	ls.deleteBook(book);
}

function getBooks(e){
	books = ls.getData();
	console.log(books);
	books.forEach(ui.getBooks.bind(books));
}