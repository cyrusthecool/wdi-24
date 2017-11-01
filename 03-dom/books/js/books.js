const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

const ul = document.createElement('ul');

for (let i = 0; i < books.length; i++) {
  let b = books[ i ]; // Current book

  let li = document.createElement('li');
  li.innerHTML = `${ b.title } by ${ b.author }`;

  if (b.alreadyRead) {
    li.style.opacity = 0.2;
  }

  ul.appendChild( li );
}

document.body.appendChild( ul );
