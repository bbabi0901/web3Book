// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract Book is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _page;
  address public author;

  event Write(uint256 page);
  event Rewrite(uint256 page);

  constructor(string memory title, address _author) ERC721(title, 'Book') {
    author = _author;
  }

  function write(string memory tokenURI) external isAuthor returns (uint256) {
    uint256 newPage = _page.current();
    _mint(msg.sender, newPage);
    _setTokenURI(newPage, tokenURI);

    _page.increment();

    emit Write(newPage);
    return newPage;
  }

  function rewrite(
    uint256 page,
    string memory newURI
  ) external isAuthor returns (bool) {
    _setTokenURI(page, newURI);

    emit Rewrite(page);
    return true;
  }

  modifier isAuthor() {
    require(author == msg.sender, 'Not AUTHORized!');
    _;
  }
}
