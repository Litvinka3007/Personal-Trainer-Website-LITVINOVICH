const books = document.querySelectorAll('.book')

window.addEventListener('scroll', recommendations)

recommendations()

function recommendations() {
    const triggerBottom = window.innerHeight / 5 * 4

    books.forEach(book => {
        const bookTop = book.getBoundingClientRect().top

        if(bookTop < triggerBottom) {
          book.classList.add('show')
        } else {
          book.classList.remove('show')
        }
    })
}