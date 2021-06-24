function findAuthorById(authors, id) {
  let found= authors.find((author) => author.id===id);
  return found;
}

function findBookById(books, id) {
   let found= books.find((book) => book.id=== id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  const booksOut = books.filter((book) => !book.borrows[0].returned);
  const booksIn = books.filter((book) => book.borrows[0].returned);
  return [booksOut, booksIn];
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.map((account) => {
    book.borrows.find((borrow) => {
      if(borrow.id === account.id) { 
        account["returned"] = borrow.returned;
        borrowers.push(account);
      };
    });
  });
  return borrowers.splice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
