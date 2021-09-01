const searchBook = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    // console.log(searchText)
    searchField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        // .then(data => displaySearchResult(data.docs))
        .then(data => console.log(data.numFound))
}

const displaySearchResult = (books) => {
    // console.log(books);
    const searchResult = document.getElementById('search-result');

    books.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="container card h-100">
                     <img width="250px" height="250px" src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">Book Name: ${book.title}</h4>
                    <p class="card-text">Author Name: ${book.author_name[0]} </p>
                    <p class="card-text">Publisher: ${book.publisher} </p>
                    <p>Publishing Date: ${book.publish_date}</p>
                    <p>First Publishing Year: ${book.first_publish_year}</p>
                    
                </div>
        </div>
        `;
        searchResult.appendChild(div);

    })
}