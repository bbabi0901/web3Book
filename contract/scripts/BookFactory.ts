import { ethers } from 'hardhat';

async function main() {
  const BookFactory = await ethers.getContractFactory('BookFactory');
  const bookFactory = await BookFactory.deploy();

  await bookFactory.deployed();

  console.log(`
  Book Factory ADDR :  ${bookFactory.address}
`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
