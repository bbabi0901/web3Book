// module
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

// pages
// import Home from '../pages/Home/Home';
// import Search from '../pages/Search/Search';
// import Market from '../pages/Market/Market';
// import Create from '../pages/Create/Create';
// import Accept from '../pages/Accept/Accept';
// import MyPage from '../pages/MyPage/MyPage';
// import Mint from '../pages/Mint/Mint';
import NotFound from '../pages/NotFound';

// abi
import { bookFactoryAbi, bookFactoryAddr } from '../assets/abi/BookFactory';

const Router: React.FC = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [bookFactory, setBookFactory] = useState<Contract | null>(null);
  useEffect(() => {
    const web = new Web3(Web3.givenProvider || 'https://localhost:8545');
    setWeb3(web);

    const contract = new web.eth.Contract(
      bookFactoryAbi as AbiItem[],
      bookFactoryAddr,
    );
    setBookFactory(contract);
  }, []);

  return (
    <Routes>
      {/* <Route path={'/'} element={<Home />} />
      <Route path={'/search/:address'} element={<Search />} />
      <Route path={'/library'} element={<Library />} />
      <Route path={'/publish'} element={<Publish />} />
      <Route path={'/newpage'} element={<Write />} />
      <Route path={'/rewrite'} element={<Rewrite />} />
      <Route
        path={'/mypage'}
        element={<MyPage web3={web3} cdsLounge={cdsLounge} />}
      />
      <Route path={'/*'} element={<NotFound />} /> */}
    </Routes>
  );
};

export default Router;
