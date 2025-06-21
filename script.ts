const API_URL = 'http://localhost/mysql-crud-app/api/'

const form = document.getElementById('book-form') as HTMLFormElement
const bookList = document.getElementById('book-list')!

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const title = (document.getElementById('title') as HTMLInputElement).value
  const author = (document.getElementById('author') as HTMLInputElement).value
  const year = (document.getElementById('year') as HTMLInputElement).value

  await fetch(`${API_URL}create.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author, year })
  })

  form.reset()
  fetchBooks()
})

async function fetchBooks() {
  const res = await fetch(`${API_URL}read.php`)
  const books = await res.json()

  bookList.innerHTML = ''
  books.forEach((book: any) => {
    const li = document.createElement('li')
    li.innerHTML = `
      ${book.title} by ${book.author} (${book.year})
      <button onclick="deleteBook(${book.id})">Delete</button>
    `
    bookList.appendChild(li)
  })
}

window.deleteBook = async function(id: number) {
  await fetch(`${API_URL}delete.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  })
  fetchBooks()
}

fetchBooks()
