


function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");
  let books = getBooks()

  if (filter === "high_to_low") {
    console.log(filter)
    books.sort((a, b) => (b.salePrice) - (a.salePrice));
  }
  else if (filter === "low_to_high") {
    books.sort((a, b) => (a.salePrice) - (b.salePrice));
  }
  else if (filter === "rating") {
    books.sort((a, b) => (b.rating) - (a.rating));
  }

  const booksHtml = books.map((book) => {
    return `<div class="book">
    <figure class="book__img--wrapper">
      <img
        class="book__img"
        src="${book.url}"
        alt=""
      />
    </figure>
    <h3 class="book__title">${book.title}</h3>
    <div class="book__rating">
    ${ratingsHTML(book.rating)}
    </div>
    <div class="book__price">
      <p>$${book.salePrice.toFixed(2)}</p>
    </div>
  </div>`
  })
    .join('')

    booksWrapper.innerHTML = booksHtml

  

}

function ratingsHTML(rating) {
  let ratingHTML = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratingHTML += '<i class="fas fa-star"></i>\n';
  }
  if (!Number.isInteger(rating)) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
  }
  return ratingHTML;
}


function filterBooks(event) {{
    renderBooks(event.target.value)
}}



setTimeout(() => {
  renderBooks()
},10);

// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
      url: "assets2/crack the coding interview.png",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets2/atomic habits.jpg",
      originalPrice: 39,
      salePrice: 39,
      rating: 5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets2/deep work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "assets2/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "assets2/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "assets2/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "assets2/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets2/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "assets2/book-6.jpeg",
      originalPrice: 35,
      salePrice: 35.00,
      rating: 4,
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "assets2/book-7.jpg",
      originalPrice: 40,
      salePrice: 40.00,
      rating: 4,
    },
    {
      id: 11,
      title: "Mastery",
      url: "assets2/book-8.jpeg",
      originalPrice: 30,
      salePrice: 30.00,
      rating: 4.5,
    },
  ];
}
