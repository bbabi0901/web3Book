import { expect } from 'chai';
import { ethers } from 'hardhat';
import {
  BookFactory as IBookFactory,
  BookFactory__factory,
  Book as IBook,
  Book__factory,
} from '../typechain-types';

const { expectRevert } = require('@openzeppelin/test-helpers');

describe('BookFactory', function () {
  /*
  * evm_snapshot
  Snapshot the state of the blockchain at the current block.
  Returns the id of the snapshot that was created. 

  * evm_revert
  Takes the id of the snapshot as an argument.
  Set the state of the blockchain as snapshot. 
  */

  let BookFactory: BookFactory__factory;
  let bookFactory: IBookFactory;
  let Book: Book__factory;
  let book: IBook;
  let snapshotId: any;

  before(async () => {
    BookFactory = await ethers.getContractFactory('BookFactory');
    bookFactory = await BookFactory.deploy();
    await bookFactory.deployed();

    Book = await ethers.getContractFactory('Book');
  });

  beforeEach(async () => {
    snapshotId = await ethers.provider.send('evm_snapshot', []);
  });

  afterEach(async () => {
    await ethers.provider.send('evm_revert', [snapshotId]);
  });

  describe('Book Factory', function () {
    it('Should set the right address of Contract of Book', async () => {});

    it('Should set the right ownedBook', async () => {});
  });

  describe('Book', function () {
    describe('Publish', function () {
      it('Should set the right author', async () => {});

      it('Should set the right title', async () => {});
    });

    describe('Write', function () {
      it('Should revert when not authorized', async () => {});

      it('Should set the right page', async () => {});

      it('Should set the right token URI', async () => {});
    });

    describe('Rewrite', function () {
      it('Should revert when not authorized', async () => {});

      it('Should set the right token URI', async () => {});
    });
  });
});
