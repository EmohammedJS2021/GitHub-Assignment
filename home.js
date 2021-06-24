function getTotalBooksCount(books) {
  const total= books.length;
  return total;
}

function getTotalAccountsCount(accounts) {
  const total= accounts.length;
  return total;
}

function getBooksBorrowedCount(books) {
return books.reduce((acc, book)=> acc +!book.borrows[0].returned, 0);
}

function getMostCommonGenres(books) {
  let result = [];
  const genreList = books.map((book) => book.genre);
  const accList = genreList.reduce((tally, genre) => {
    tally[genre] === undefined ? (tally[genre] = 1) : (tally[genre] += 1);
    return tally;
  }, {})

  for(prop in accList) {
    const num = accList[prop];
    const consise = {"name": prop, "count": num };
    result.push(consise);
  };
  return  result.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}

function getMostPopularBooks(books) {
let result = [];
  books.forEach(book => {
    const num = book.borrows.length;
    const title = book.title;
    const consise = {"name": title, "count": num};
    result.push(consise);
  });
return result.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let result = [];
 books.forEach(book => {
 authors.forEach(author => {
  const first = author.name.first;
  const last = author.name.last;
  const full = `${first} ${last}`;
  if(author.id === book.authorId){
     const final = {"name": full, "count": book.borrows.length}
     result.push(final);
     }
        });
    });
return result.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
