import React from 'react';
import { Layout } from 'antd';

import styled from 'styled-components';
import { styles } from '../../assets/styles/styles';

const { Footer: _Footer } = Layout;

const Footer: React.FC = () => {
  return <Foot style={{ textAlign: 'center' }}>Footer</Foot>;
};

const Foot = styled(_Footer)`
  background-color: ${styles.main_theme};
  color: ${styles.white};
`;

export default Footer;
