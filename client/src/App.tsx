// modules
import React, { useState } from 'react';
import { Layout, Space } from 'antd';

// styles
import { styles } from './assets/styles/styles';
import styled from 'styled-components';
// global.d.ts에 전역 개체 타입 정의해야함.
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
import library from './assets/img/library.jpeg';

// components
// import Router from './router/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Sidebar from './components/Sidebar/Sidebar';

const { Content: _Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Space direction="vertical" style={{ width: '100%' }}>
        <Layout>
          <MainLayout>
            <Header />
            <Content>Content</Content>
            <Footer />
          </MainLayout>
        </Layout>
      </Space>
    </div>
  );
};

const Content = styled(_Content)`
  padding: 0 50px;
  display: flex;
  flexdirection: column;
  gap: ${styles.space_9};
`;

// background: linear-gradient(${styles.main_theme_darker}, ${styles.white});
const MainLayout = styled(Layout)`
  height: 100%;
  background: url(${library});
  background-size: 100%;
  color: ${styles.main_theme_darker};
  gap: ${styles.space_8};
`;

export default App;
