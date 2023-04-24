// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './Book.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract BookFactory {
  using Counters for Counters.Counter;
  Counters.Counter private _bookId;

  mapping(address => Book[]) private _ownedBook;
  mapping(uint256 => Book) public books;

  event Publish(uint256 bookId);

  function publish(string memory title) external returns (uint256) {
    uint256 newBookId = _bookId.current();
    Book book = new Book(title, msg.sender);
    _ownedBook[msg.sender].push(book);
    books[newBookId] = book;

    _bookId.increment();

    emit Publish(newBookId);
    return newBookId;
  }

  function ownedBook(address owner) external view returns (Book[] memory) {
    return _ownedBook[owner];
  }
}
