// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import './BookAccessControl.sol';

contract Book is ERC721URIStorage, BookAccessControl {
  using Counters for Counters.Counter;
  Counters.Counter public episode;

  event Write(uint256 page);

  constructor(
    string memory title,
    string memory symbol,
    address _author,
    address _reader
  ) ERC721(title, symbol) BookAccessControl(_author, _reader) {}

  function supportsInterface(
    bytes4 interfaceId
  ) public view virtual override(ERC721URIStorage, AccessControl) returns (bool) {
    return
      interfaceId == type(IAccessControl).interfaceId ||
      interfaceId == bytes4(0x49064906) ||
      super.supportsInterface(interfaceId);
  }

  function write(string memory _tokenURI) external onlyAuthor {
    episode.increment();

    uint256 newEpisode = episode.current();
    _safeMint(msg.sender, newEpisode);
    _setTokenURI(newEpisode, _tokenURI);

    emit Write(newEpisode);
  }

  function latestEpisode() public view returns (uint256) {
    require(episode.current() > 0, 'Book: Empty episode');
    return episode.current();
  }

  function tokenURI(uint256 tokenId) public view override onlyReader returns (string memory) {
    return super.tokenURI(tokenId);
  }
}

// library에서는 readEpisodes 해서 start, end받아서 넣을거고 end가 latest보다 크면 revert
// front에서는 latest받아와서 보여주고 그대로 넣을거지만 그거는 거기서 생각이고 여기서는 분리해서 처리하는 게
// 그렇게 하려면 latestEpisode가 뭔지 있어야함. 별도의 함수 없어도 될지는 모르겠음.
// readEpisode
