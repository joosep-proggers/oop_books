class UI{
	addBook(book){
		const td = document.createElement("td");
		const tr = document.createElement("tr");
		const tbody = document.querySelector("#juuxur")

		const tdTitle = document.createElement("td");
		const tdAuthor = document.createElement("td");
		const tdIsbn = document.createElement("td");
		
		tdTitle.appendChild(document.createTextNode(book.title));
		tr.appendChild(tdTitle);

		tdAuthor.appendChild(document.createTextNode(book.author));
		tr.appendChild(tdAuthor);

		tdIsbn.appendChild(document.createTextNode(book.isbn));
		tr.appendChild(tdIsbn);

		const tdLink = document.createElement('td')
		const link = document.createElement('a');
		link.className = 'secondary-content';
		link.appendChild(document.createTextNode('X'));
		link.setAttribute('href', '#');
		tdLink.appendChild(link)
		tr.appendChild(tdLink);

		tbody.appendChild(tr);
	}
	deleteBook(book){
		if(book.textContent == "X"){
			book.parentElement.parentElement.remove();
		}
	}
}