import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract } from 'ethers';

const { ethers } = require('hardhat');

module.exports = {
  BookFactory: class BookFactory {
    private static instance: BookFactory;
    private provider: JsonRpcProvider;
    private endPoint: string;
    private gasPrice;
    private bookFactory: Contract;

    constructor(address: string, endPoint: string) {
      this.endPoint = endPoint;
      this.provider = new ethers.providers.JsonRpcProvider(endPoint);
      this.gasPrice = this.provider.getGasPrice();
      this.bookFactory = new ethers.Contract(
        address,
        BOOKFACTORY_ABI,
        this.provider,
      );
    }

    public static getInstance(
      address: string,
      endPoint = 'http://localhost:8545',
    ) {
      if (!BookFactory.instance) {
        BookFactory.instance = new BookFactory(address, endPoint);
      }
      return BookFactory.instance;
    }

    public async publish(author: string, title: string) {}
  },
};
