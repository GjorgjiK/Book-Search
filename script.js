const bookList = [
  {
    author: "Margaret Atwood",
    title: "The Handmaid's Tale",
    genre: "Dystopian Fiction",
  },
  {
    author: "George Orwell",
    title: "1984",
    genre: "Dystopian Fiction",
  },
  {
    author: "Aldous Huxley",
    title: "Brave New World",
    genre: "Dystopian Fiction",
  },
  {
    author: "Ray Bradbury",
    title: "Fahrenheit 451",
    genre: "Dystopian Fiction",
  },
  {
    author: "Suzanne Collins",
    title: "The Hunger Games",
    genre: "Dystopian Fiction",
  },
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
  },
  {
    author: "J.R.R. Tolkien",
    title: "The Lord of the Rings",
    genre: "Fantasy",
  },
  {
    author: "Terry Pratchett",
    title: "The Colour of Magic",
    genre: "Fantasy",
  },
  {
    author: "Neil Gaiman",
    title: "American Gods",
    genre: "Fantasy",
  },
  {
    author: "George R.R. Martin",
    title: "A Game of Thrones",
    genre: "Fantasy",
  },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    genre: "Romance",
  },
  {
    author: "Emily Bronte",
    title: "Wuthering Heights",
    genre: "Romance",
  },
  {
    author: "Nicholas Sparks",
    title: "The Notebook",
    genre: "Romance",
  },
  {
    author: "Charlotte Bronte",
    title: "Jane Eyre",
    genre: "Romance",
  },
  {
    author: "Gabriel Garcia Marquez",
    title: "Love in the Time of Cholera",
    genre: "Romance",
  },
  {
    author: "Agatha Christie",
    title: "Murder on the Orient Express",
    genre: "Mystery",
  },
  {
    author: "Arthur Conan Doyle",
    title: "The Hound of the Baskervilles",
    genre: "Mystery",
  },
  {
    author: "Gillian Flynn",
    title: "Gone Girl",
    genre: "Mystery",
  },
  {
    author: "Stieg Larsson",
    title: "The Girl with the Dragon Tattoo",
    genre: "Mystery",
  },
  {
    author: "Dan Brown",
    title: "The Da Vinci Code",
    genre: "Mystery",
  },
  {
    author: "Stephen King",
    title: "The Shining",
    genre: "Horror",
  },
  {
    author: "H.P. Lovecraft",
    title: "The Call of Cthulhu",
    genre: "Horror",
  },
  {
    author: "Bram Stoker",
    title: "Dracula",
    genre: "Horror",
  },
  {
    author: "Mary Shelley",
    title: "Frankenstein",
    genre: "Horror",
  },
  {
    author: "Shirley Jackson",
    title: "The Haunting of Hill House",
    genre: "Horror",
  },
  {
    author: "Bret Easton Ellis",
    title: "American Psycho",
    genre: "Horror",
  },
  {
    author: "Edgar Allan Poe",
    title: "The Tell-Tale Heart",
    genre: "Horror",
  },
  {
    author: "Jules Verne",
    title: "Twenty Thousand Leagues Under the Sea",
    genre: "Adventure",
  },
  {
    author: "Ernest Hemingway",
    title: "The Old Man and the Sea",
    genre: "Adventure",
  },
  {
    author: "Jack London",
    title: "The Call of the Wild",
    genre: "Adventure",
  },
  {
    author: "Herman Melville",
    title: "Moby-Dick",
    genre: "Adventure",
  },
  {
    author: "Michael Crichton",
    title: "Jurassic Park",
    genre: "Science Fiction",
  },
  {
    author: "Philip K. Dick",
    title: "Do Androids Dream of Electric Sheep?",
    genre: "Science Fiction",
  },
  {
    author: "Isaac Asimov",
    title: "Foundation",
    genre: "Science Fiction",
  },
  {
    author: "Ray Bradbury",
    title: "The Martian Chronicles",
    genre: "Science Fiction",
  },
  {
    author: "Douglas Adams",
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: "Science Fiction",
  },
  {
    author: "Kurt Vonnegut",
    title: "Slaughterhouse-Five",
    genre: "Science Fiction",
  },
  {
    author: "William Gibson",
    title: "Neuromancer",
    genre: "Science Fiction",
  },
  {
    author: "Octavia Butler",
    title: "Kindred",
    genre: "Science Fiction",
  },
  {
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    genre: "Science Fiction",
  },
  {
    author: "David Mitchell",
    title: "Cloud Atlas",
    genre: "Science Fiction",
  },
  {
    author: "Frank Herbert",
    title: "Dune",
    genre: "Science Fiction",
  },
  {
    author: "C.S. Lewis",
    title: "The Lion, the Witch and the Wardrobe",
    genre: "Children's",
  },
];

// Get the elements 
const bookListElement = document.getElementById("book-list");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// Sort the book list by author name alphabetically
bookList.sort((a, b) => a.author.localeCompare(b.author));

// Function to render the book list
function renderBookList() {
  bookListElement.innerHTML = "";
  bookList.forEach((book) => {
    const li = document.createElement("li");
    li.innerText = `${book.author} - ${book.title} (${book.genre})`;
    bookListElement.appendChild(li);
  });
}

renderBookList();

// Function to search for books
function searchBooks(searchTerm) {
  const filteredList = bookList.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  bookListElement.innerHTML = "";
  filteredList.forEach((book) => {
    const li = document.createElement("li");
    li.innerText = `${book.author} - ${book.title} (${book.genre})`;
    bookListElement.appendChild(li);
  });
}

// Event listener for the search form
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  searchBooks(searchTerm);
});

// Event listener to reset the book list when the search input is empty
searchInput.addEventListener("input", () => {
  if (searchInput.value === "") {
    renderBookList();
  }
});
