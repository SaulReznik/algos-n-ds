class Node {
  constructor() {
    this.letters = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insertWord(word) {
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      if (!curr.letters.hasOwnProperty(letter)) {
        curr.letters[letter] = new Node();
      }

      curr = curr.letters[letter];
    }

    curr.isWord = true;
  }

  searchWord(word) {
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      if (!curr.letters.hasOwnProperty(letter)) return false;
      curr = curr.letters[letter];
    }

    return curr.isWord;
  }

  startsWith(prefix) {
    let curr = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const letter = prefix[i];

      if (!curr.letters.hasOwnProperty(letter)) return false;
      curr = curr.letters[letter];
    }

    return true;
  }
}

const trie = new Trie();
trie.insertWord('bruh');
trie.insertWord('brother');

console.log(trie.searchWord('bruh'));
console.log(trie.searchWord('bro'));
console.log(trie.searchWord('bruuh'));

console.log(trie.startsWith('br'));
console.log(trie.startsWith('ba'));
