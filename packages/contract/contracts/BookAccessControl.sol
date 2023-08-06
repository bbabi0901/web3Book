// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import '@openzeppelin/contracts/access/AccessControl.sol';

abstract contract BookAccessControl is AccessControl {
  bytes32 public constant AUTHOR_ROLE = keccak256('AUTHOR_ROLE');
  bytes32 public constant READER_ROLE = keccak256('READER_ROLE');

  address public author;

  constructor(address _author, address _reader) {
    author = _author;
    _grantRole(AUTHOR_ROLE, _author);
    _grantRole(READER_ROLE, _reader);
  }

  modifier onlyAuthor() {
    _checkRole(AUTHOR_ROLE);
    _;
  }

  modifier onlyReader() {
    _checkRole(READER_ROLE);
    _;
  }

  function changeAuthor(address newAuthor) external onlyAuthor {
    author = newAuthor;
    _grantRole(AUTHOR_ROLE, newAuthor);
    _revokeRole(AUTHOR_ROLE, _msgSender());
  }
}
