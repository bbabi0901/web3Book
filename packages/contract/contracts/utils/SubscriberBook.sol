// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import '@openzeppelin/contracts/utils/structs/EnumerableSet.sol';

library SubscriberBook {
  using EnumerableSet for EnumerableSet.AddressSet;

  struct Book {
    EnumerableSet.AddressSet _subscribers;
  }

  function add(Book storage self, address subscriber) internal returns (bool) {
    return self._subscribers.add(subscriber);
  }

  function remove(Book storage self, address subscriber) internal returns (bool) {
    return self._subscribers.remove(subscriber);
  }

  function contains(Book storage self, address subscriber) internal view returns (bool) {
    return self._subscribers.contains(subscriber);
  }

  function length(Book storage self) internal view returns (uint256) {
    return self._subscribers.length();
  }
}
