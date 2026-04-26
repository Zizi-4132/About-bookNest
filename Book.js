const products = [
     // ── NOVELS (20) ──────────────────────────────────────────────
  { id:  1, title: "Dune",                                 author: "Frank Herbert",                    price: 18.99, genre: "Sci-Fi",     type: "Book",   year: 1965 },
  { id:  2, title: "Neuromancer",                          author: "William Gibson",                   price: 14.99, genre: "Sci-Fi",     type: "Book",   year: 1984 },
  { id:  3, title: "The Left Hand of Darkness",            author: "Ursula K. Le Guin",                price: 15.99, genre: "Sci-Fi",     type: "Book",   year: 1969 },
  { id:  4, title: "Annihilation",                         author: "Jeff VanderMeer",                  price: 13.99, genre: "Sci-Fi",     type: "Book",   year: 2014 },
  { id:  5, title: "All Systems Red",                      author: "Martha Wells",                     price: 11.99, genre: "Sci-Fi",     type: "Book",   year: 2017 },
  { id:  6, title: "Recursion",                            author: "Blake Crouch",                     price: 16.99, genre: "Sci-Fi",     type: "Book",   year: 2019 },
  { id:  7, title: "The Long Way to a Small Angry Planet", author: "Becky Chambers",                   price: 15.49, genre: "Sci-Fi",     type: "Book",   year: 2014 },
  { id:  8, title: "The Kiss Quotient",                    author: "Helen Hoang",                      price: 14.99, genre: "Romance",    type: "Book",   year: 2018 },
  { id:  9, title: "Beach Read",                           author: "Emily Henry",                      price: 13.99, genre: "Romance",    type: "Book",   year: 2020 },
  { id: 10, title: "The Spanish Love Deception",           author: "Elena Armas",                      price: 14.99, genre: "Romance",    type: "Book",   year: 2021 },
  { id: 11, title: "Act Your Age, Eve Brown",              author: "Talia Hibbert",                    price: 13.99, genre: "Romance",    type: "Book",   year: 2021 },
  { id: 12, title: "Written in the Stars",                 author: "Alexandria Bellefleur",            price: 13.49, genre: "Romance",    type: "Book",   year: 2020 },
  { id: 13, title: "People We Meet on Vacation",           author: "Emily Henry",                      price: 14.49, genre: "Romance",    type: "Book",   year: 2021 },
  { id: 14, title: "Pachinko",                             author: "Min Jin Lee",                       price: 16.99, genre: "Literature", type: "Book",   year: 2017 },
  { id: 17, title: "Outline",                              author: "Rachel Cusk",                      price: 14.49, genre: "Literature", type: "Book",   year: 2014 },
  { id: 18, title: "Normal People",                        author: "Sally Rooney",                     price: 14.99, genre: "Literature", type: "Book",   year: 2018 },
  { id: 19, title: "Demon Copperhead",                     author: "Barbara Kingsolver",               price: 17.49, genre: "Literature", type: "Book",   year: 2022 },
  { id: 20, title: "A Gentleman in Moscow",                author: "Amor Towles",                      price: 16.99, genre: "Literature", type: "Book",   year: 2016 },
 
  // ── JOURNALS (20) ────────────────────────────────────────────
  { id: 21, title: "The New Yorker",                       author: "Various Contributors",             price:  7.99, genre: "Literature", type: "Journal", year: 2024 },
  { id: 22, title: "Granta: The Magazine of New Writing",  author: "Various Contributors",             price: 15.99, genre: "Literature", type: "Journal", year: 2024 },
  { id: 23, title: "The Paris Review",                     author: "Various Contributors",             price: 12.99, genre: "Literature", type: "Journal", year: 2024 },
  { id: 24, title: "Tin House Magazine",                   author: "Various Contributors",             price: 11.99, genre: "Literature", type: "Journal", year: 2024 },
  { id: 25, title: "McSweeney's Quarterly Concern",        author: "Dave Eggers (ed.)",               price: 22.00, genre: "Literature", type: "Journal", year: 2024 },
  { id: 26, title: "The Sun Magazine",                     author: "Various Contributors",             price:  6.99, genre: "Literature", type: "Journal", year: 2024 },
  { id: 27, title: "Ploughshares",                         author: "Emerson College (ed.)",           price: 14.00, genre: "Literature", type: "Journal", year: 2024 },
  { id: 28, title: "One Story",                            author: "Various Contributors",             price:  6.00, genre: "Literature", type: "Journal", year: 2024 },
  { id: 29, title: "Asimov's Science Fiction",             author: "Sheila Williams (ed.)",           price:  8.99, genre: "Sci-Fi",     type: "Journal", year: 2024 },
  { id: 30, title: "The Magazine of Fantasy & Sci-Fi",     author: "C.C. Finlay (ed.)",              price:  9.99, genre: "Sci-Fi",     type: "Journal", year: 2024 },
  { id: 31, title: "Clarkesworld Magazine",                author: "Neil Clarke (ed.)",               price:  3.99, genre: "Sci-Fi",     type: "Journal", year: 2024 },
  { id: 32, title: "Beneath Ceaseless Skies",              author: "Scott H. Andrews (ed.)",         price:  3.99, genre: "Sci-Fi",     type: "Journal", year: 2024 },
  { id: 33, title: "Lightspeed Magazine",                  author: "John Joseph Adams (ed.)",        price:  3.99, genre: "Sci-Fi",     type: "Journal", year: 2024 },
  { id: 34, title: "Strange Horizons",                     author: "Various Contributors",             price:  0.00, genre: "Sci-Fi",     type: "Journal", year: 2024 },
  { id: 35, title: "Uncanny Magazine",                     author: "Lynne M. Thomas (ed.)",          price:  3.99, genre: "Sci-Fi",     type: "Journal", year: 2024 },
  { id: 36, title: "Love & Laughter Quarterly",            author: "Various Contributors",             price:  9.99, genre: "Romance",    type: "Journal", year: 2024 },
  { id: 37, title: "Romantic Times Book Reviews",          author: "Various Contributors",             price:  7.99, genre: "Romance",    type: "Journal", year: 2024 },
  { id: 38, title: "All About Romance",                    author: "Various Contributors",             price:  6.99, genre: "Romance",    type: "Journal", year: 2024 },
  { id: 39, title: "Smart Bitches Trashy Books",           author: "Sarah Wendell (ed.)",            price:  4.99, genre: "Romance",    type: "Journal", year: 2024 },
  { id: 40, title: "Heroes & Heartbreakers",               author: "Various Contributors",             price:  5.99, genre: "Romance",    type: "Journal", year: 2024 },
 
  // ── COMICS (20) ──────────────────────────────────────────────
  { id: 41, title: "Saga, Vol. 1",                         author: "Brian K. Vaughan & Fiona Staples", price:  9.99, genre: "Sci-Fi",     type: "Comic",   year: 2012 },
  { id: 42, title: "Prophet: Remission",                   author: "Brandon Graham",                   price: 12.99, genre: "Sci-Fi",     type: "Comic",   year: 2012 },
  { id: 43, title: "East of West, Vol. 1",                 author: "Jonathan Hickman",                 price: 10.99, genre: "Sci-Fi",     type: "Comic",   year: 2013 },
  { id: 44, title: "The Incal",                            author: "Jodorowsky & Moebius",             price: 24.99, genre: "Sci-Fi",     type: "Comic",   year: 1981 },
  { id: 45, title: "Descender, Vol. 1",                    author: "Jeff Lemire",                      price: 11.99, genre: "Sci-Fi",     type: "Comic",   year: 2015 },
  { id: 46, title: "Black Science, Vol. 1",                author: "Rick Remender",                    price: 10.99, genre: "Sci-Fi",     type: "Comic",   year: 2014 },
  { id: 47, title: "Tokyo Ghost, Vol. 1",                  author: "Rick Remender & Sean Murphy",      price: 12.99, genre: "Sci-Fi",     type: "Comic",   year: 2016 },
  { id: 48, title: "Heartstopper, Vol. 1",                 author: "Alice Oseman",                     price:  9.99, genre: "Romance",    type: "Comic",   year: 2018 },
  { id: 49, title: "Blue Box, Vol. 1",                     author: "Kouji Miura",                      price: 10.99, genre: "Romance",    type: "Comic",   year: 2021 },
  { id: 50, title: "Komi Can't Communicate, Vol. 1",       author: "Tomohito Oda",                    price:  9.99, genre: "Romance",    type: "Comic",   year: 2016 },
  { id: 51, title: "My Love Story!!, Vol. 1",              author: "Kazune Kawahara",                  price:  9.99, genre: "Romance",    type: "Comic",   year: 2011 },
  { id: 52, title: "Ao Haru Ride, Vol. 1",                 author: "Io Sakisaka",                     price: 10.99, genre: "Romance",    type: "Comic",   year: 2011 },
  { id: 53, title: "Wotakoi, Vol. 1",                      author: "Fujita",                           price: 12.99, genre: "Romance",    type: "Comic",   year: 2014 },
  { id: 54, title: "A Silent Voice",                       author: "Yoshitoki Oima",                   price: 19.99, genre: "Romance",    type: "Comic",   year: 2013 },
  { id: 55, title: "Blankets",                             author: "Craig Thompson",                   price: 24.99, genre: "Literature", type: "Comic",   year: 2003 },
  { id: 56, title: "Maus: A Survivor's Tale",              author: "Art Spiegelman",                   price: 19.99, genre: "Literature", type: "Comic",   year: 1986 },
  { id: 57, title: "Persepolis",                           author: "Marjane Satrapi",                  price: 16.99, genre: "Literature", type: "Comic",   year: 2000 },
  { id: 58, title: "Fun Home",                             author: "Alison Bechdel",                   price: 17.99, genre: "Literature", type: "Comic",   year: 2006 },
  { id: 59, title: "March: Book One",                      author: "John Lewis & Andrew Aydin",        price: 14.99, genre: "Literature", type: "Comic",   year: 2013 },
  { id: 60, title: "Building Stories",                     author: "Chris Ware",                       price: 29.99, genre: "Literature", type: "Comic",   year: 2012 },
];

function displayBooks(items, gridId) {
  const grid = document.getElementById(gridId);

  // If no books match, show a message
  if (items.length === 0) {
    grid.innerHTML = "<p>No books found.</p>";
    return;
  }

   grid.innerHTML = items.map(item => `
    <div class="book-card">
      <div class="genre-tag">${item.genre}</div>
      <div class="title">${item.title}</div>
      <div class="author">${item.author}</div>
      <div class="price">RM ${item.price}</div>
    </div>
  `).join("");
}

// Show all books when page loads
displayBooks(products.filter(p => p.type === "Book"), "books-grid");
displayBooks(products.filter(p => p.type === "Journal"), "journals-grid");
displayBooks(products.filter(p => p.type === "Comic"), "comics-grid");

function filterByGenre() {
  const selectedGenre = document.getElementById("genre-select").value;

  let filtered = products; // start with everything

  if (selectedGenre !== "All") {
    filtered = products.filter(p => p.genre === selectedGenre);
  }

  // Still split by type into their own grids
  displayBooks(filtered.filter(p => p.type === "Book"),    "books-grid");
  displayBooks(filtered.filter(p => p.type === "Journal"), "journals-grid");
  displayBooks(filtered.filter(p => p.type === "Comic"),   "comics-grid");
}

function searchBooks() {
  const query = document
    .getElementById("search-input").value
    .toLowerCase(); // make it lowercase for easy matching

  const results = products.filter(function(products) {
    const titleMatch = products.title
      .toLowerCase().includes(query);

    const authorMatch = products.author
      .toLowerCase().includes(query);

    
    return titleMatch || authorMatch;
  });

  displayBooks(results.filter(p => p.type === "Book"), "books-grid");
  displayBooks(results.filter(p => p.type === "Journal"), "journals-grid");
  displayBooks(results.filter(p => p.type === "Comic"), "comics-grid");
}
