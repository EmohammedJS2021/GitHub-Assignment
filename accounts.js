
function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
 }

function sortAccountsByLastName(accounts) {
  return accounts.sort((previous, next) => 
    previous.name.last.toLowerCase() > next.name.last.toLowerCase() ? 1 : -1);   
  
  /*
    return accounts.sort((previous, next) =>
    {
   if (previous.name.last.toLowerCase() > next.name.last.toLowerCase() ) {
    return 1 
  } else {
    return -1
  }
});  
*/
}

function getTotalNumberOfBorrows(account, books) { 
   return books.reduce((acc, book) => {
    return acc + book.borrows.reduce((acc, num) => {
      if (num.id === account.id) {
        acc += 1;
      };
      return acc;
    }, 0);
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
 return books.filter((book) => {
      const borrow = book.borrows[0];
      return !borrow.returned && borrow.id === account.id;
    }).map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return {...book, author};
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
