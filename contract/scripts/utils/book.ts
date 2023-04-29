import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract } from 'ethers';

const { ethers } = require('hardhat');

module.exports = {
  Book: class Book {
    private static instance: Book;
    private provider: JsonRpcProvider;
    private endPoint: string;
    private book: Contract;
    private author: string;

    constructor(address: string, author: string, endPoint: string) {
      this.endPoint = endPoint;
      this.author = author;
      this.provider = new ethers.providers.JsonRpcProvider(endPoint);
      this.book = new ethers.Contract(address, BOOK_ABI, this.provider);
    }

    public static getInstance(
      address: string,
      author: string,
      endPoint = 'http://localhost:8545',
    ) {
      if (!Book.instance) {
        Book.instance = new Book(address, author, endPoint);
      }
      return Book.instance;
    }

    public async write(tokenUri: string) {}

    public async rewrite(page: number, tokenUri: string) {}
  },
};
