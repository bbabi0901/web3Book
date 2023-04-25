// modules
import React, { useState } from 'react';
import { Layout, Space } from 'antd';

// styles
import { styles } from './assets/styles/styles';

// components
// import Router from './router/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Sidebar from './components/Sidebar/Sidebar';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Space direction="vertical" style={{ width: '100%' }}>
        <Layout>
          <Layout
            style={{
              height: '100%',
              background: `${styles.white} )`,
              color: `${styles.very_dark_blue_line}`,
              gap: `${styles.space_8}`,
            }}
          >
            <Header />
            <Content
              style={{
                padding: '0 50px',
                display: 'flex',
                flexDirection: 'column',
                gap: `${styles.space_9}`,
              }}
              className="site-layout-content"
            >
              Content
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Space>
    </div>
  );
};

export default App;
