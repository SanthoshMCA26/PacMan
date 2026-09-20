document.addEventListener("DOMContentLoaded", () => {

  // -------------------- BOOK MANAGEMENT --------------------
  const bookForm = document.getElementById("bookForm");
  if (bookForm) {

    function loadBooks() {
      const books = JSON.parse(localStorage.getItem("books")) || [];
      const tbody = document.getElementById("bookTable");
      tbody.innerHTML = "";

      books.forEach(book => {
        const row = `
          <tr>
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.Category}</td>
            <td>${book.year}</td>
            <td>${book.quantity}</td>
            <td>
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary me-2" onclick="editBook('${book.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteBooks('${book.id}')">Delete</button>
              </div>
            </td>
          </tr>
        `;
        tbody.insertAdjacentHTML("beforeend", row);
      });
    }

    bookForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const id = document.getElementById("bookId").value.trim();
      const name = document.getElementById("bookName").value.trim();
      const author = document.getElementById("author").value.trim();
      const Category = document.getElementById("Category").value.trim();
      const year = document.getElementById("year").value.trim();
      const quantity = parseInt(document.getElementById("quantity").value);

      if (!id || !name || !author || !Category || quantity <= 0) {
        alert("Please fill all required fields correctly!");
        return;
      }

      let books = JSON.parse(localStorage.getItem("books")) || [];
      const index = books.findIndex(b => b.id === id);

      if (index !== -1) {
        books[index] = { id, name, author, Category, year, quantity };
        alert("Book Not saved Because the ID already exists");
        this.reset();
        return;
      } else {
        books.push({ id, name, author, Category, year, quantity });
      }

      localStorage.setItem("books", JSON.stringify(books));
      alert("Book saved successfully!");
      this.reset();
      loadBooks();
    });

    const addBtn = document.getElementById("addBookBtn");
    if (addBtn) {
      addBtn.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("bookId").focus();
      });
    }

    window.deleteBooks = function(id) {
      let books = JSON.parse(localStorage.getItem("books")) || [];
      if (confirm("Are you sure you want to delete this book?")) {
        books = books.filter(b => b.id !== id);
        localStorage.setItem("books", JSON.stringify(books));
        alert("Book deleted successfully!");
        loadBooks();
      }
    };

    window.editBook = function(id) {
      const books = JSON.parse(localStorage.getItem("books")) || [];
      const book = books.find(b => b.id === id);
      if (!book) return;

      document.getElementById("bookId").value = book.id;
      document.getElementById("bookName").value = book.name;
      document.getElementById("author").value = book.author;
      document.getElementById("Category").value = book.Category;
      document.getElementById("year").value = book.year;
      document.getElementById("quantity").value = book.quantity;
    };

    loadBooks();
  }

  // -------------------- MEMBER MANAGEMENT --------------------
  const memberForm = document.getElementById("memberForm");
  if (memberForm) {

    function loadMembers() {
      const members = JSON.parse(localStorage.getItem("members")) || [];
      const tbody = document.getElementById("memberTable");
      tbody.innerHTML = "";

      members.forEach(member => {
        const row = `
          <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
            <td>
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary me-2" onclick="editMember('${member.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteMember('${member.id}')">Delete</button>
              </div>
            </td>
          </tr>
        `;
        tbody.insertAdjacentHTML("beforeend", row);
      });
    }

    memberForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const memberId = document.getElementById("memberId").value.trim();
      const memberName = document.getElementById("memberName").value.trim();
      const memberEmail = document.getElementById("memberEmail").value.trim();
      const memberPhone = document.getElementById("memberPhone").value.trim();

      if (!memberId || !memberName || !memberEmail || !memberPhone) {
        alert("Please fill all required fields correctly!");
        return;
      }

      let members = JSON.parse(localStorage.getItem("members")) || [];
      const index = members.findIndex(m => m.id === memberId);
      if (index !== -1) {
        members[index] = { id: memberId, name: memberName, email: memberEmail, phone: memberPhone };
      } else {
        members.push({ id: memberId, name: memberName, email: memberEmail, phone: memberPhone });
      }

      localStorage.setItem("members", JSON.stringify(members));
      alert("Member saved successfully!");
      this.reset();
      loadMembers();
    });

    const addMemberBtn = document.getElementById("addMemberBtn");
    if (addMemberBtn) {
      addMemberBtn.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("memberId").focus();
      });
    }

    window.deleteMember = function(id) {
      let members = JSON.parse(localStorage.getItem("members")) || [];
      if (confirm("Are you sure you want to delete this member?")) {
        members = members.filter(m => m.id !== id);
        localStorage.setItem("members", JSON.stringify(members));
        alert("Member deleted successfully!");
        loadMembers();
      }
    };

    window.editMember = function(id) {
      const members = JSON.parse(localStorage.getItem("members")) || [];
      const foundMember = members.find(m => m.id === id);
      if (!foundMember) return;

      document.getElementById("memberId").value = foundMember.id;
      document.getElementById("memberName").value = foundMember.name;
      document.getElementById("memberEmail").value = foundMember.email;
      document.getElementById("memberPhone").value = foundMember.phone;
    };

    loadMembers();
  }
  // js/script.js

// Load books from localStorage
let books = JSON.parse(localStorage.getItem("books")) || [];

// Select the correct cards
const totalBooksElement = document.querySelector(".card.bg-success .fs-4"); // green card
const addBooksElement = document.querySelector(".card.bg-warning .fs-4");   // yellow card
const localStorageElement = document.querySelector(".card.bg-primary .fs-4"); // blue card

// Initial update
updateDashboard();

// Function to update dashboard counts
function updateDashboard() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  totalBooksElement.textContent = books.length;      // total books
  addBooksElement.textContent = books.length;        // add books count
  localStorageElement.textContent = localStorage.length; // total keys in localStorage
}

// Function to add a new book
function addBook(name, author) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  const newBook = { name, author };
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));

  // Refresh dashboard instantly
  updateDashboard();
}
});