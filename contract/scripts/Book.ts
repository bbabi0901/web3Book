import { ethers } from 'hardhat';

async function main() {
  try {
    const BookFactory = await ethers.getContractFactory('BookFactory');
    const bookFactory = await BookFactory.deploy();

    await bookFactory.deployed();

    console.log(`Book Factory ADDR :  ${bookFactory.address}`);

    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
  } catch (error) {
    console.log(error);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
