class LS{
	getData(book){
		let data;
		if(localStorage.getItem('books') === null){
			data = [];
		} else {
			data = JSON.parse(localStorage.getItem('books'));
		}
		return data;
	}
	setData(book, data){
		localStorage.setItem(book, JSON.stringify(data));
	}
	addBook(book){
		// set data to the LS
		let books = this.getData("books");
		if(localStorage.getItem('books') === null){
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}
		books.push(book);
		this.setData("books", books);
		// log to console that task is added to LS
		book.addedToLS();
	}
	deleteBook(book){
		let books = this.getData("books");
		books.forEach(function(booksElement, booksIndex){
			if(booksElement.name === book){
				books.splice(booksIndex, 1);
			}
		});
		this.setData("books",books);
	}
}