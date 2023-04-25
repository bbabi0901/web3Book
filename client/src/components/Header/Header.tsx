// modules
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

// antd
import { Layout, Menu as _Menu, Row, Col, Input, Form } from 'antd';
import type { MenuProps } from 'antd';
import { WalletOutlined } from '@ant-design/icons';

// styles
import styled from 'styled-components';
import { styles } from '../../assets/styles/styles';

// atoms
import { collapsedState } from '../../atoms/Atoms';

const { Header: _Header } = Layout;
const { Search: _Search } = Input;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label?: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Library', 'library'),
  getItem('Write', 'write', null, [
    getItem('Publish', 'publish'),
    getItem('New Page', 'newpage'),
    getItem('Rewrite', 'rewrite'),
  ]),
];

const profile: MenuItem[] = [
  getItem('MyPage', 'mypage'),
  getItem('', 'wallet', <WalletOutlined />),
];

const Nav: React.FC = () => {
  const navigate = useNavigate();

  // search
  const [search, setSearch] = useState<string>('');
  const searchHandler = (value: string): void => {
    navigate(`/search/${value}`);
    setSearch('');
  };

  // wallet
  const [collapsed, setCollapsed] = useRecoilState<boolean>(collapsedState);

  // menu
  const onMenuClick: MenuProps['onClick'] = (e): void => {
    if (e.key === 'wallet') {
      setCollapsed(!collapsed);
      return;
    }
    console.log('click', e.key);
    navigate(`/${e.key}`);
  };

  return (
    <Header style={{ textAlign: 'center' }}>
      <Row wrap={false} justify="start" align="middle" gutter={{ md: 24 }}>
        <Col md={2}>
          <Link to="/">HomeHome</Link>
        </Col>
        <Col md={5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Menu
            mode="horizontal"
            style={{ justifyContent: 'flex-end' }}
            items={items}
            onClick={onMenuClick}
          />
        </Col>
        <Col md={11}>
          <Search
            size="large"
            value={search}
            onSearch={searchHandler}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Enter contracts / accounts address..."
          />
        </Col>
        <Col md={6}>
          <Menu
            mode="horizontal"
            style={{ justifyContent: 'flex-end' }}
            items={profile}
            onClick={onMenuClick}
          />
        </Col>
      </Row>
    </Header>
  );
};
// background-color: ${styles.main_theme};
const Header = styled(_Header)`
  background-color: rgba(255, 255, 255, 0);
  color: ${styles.white};
  z-index: 1000;
  a:link,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
    color: ${styles.white};
  }
`;

const Search = styled(_Search)`
  margin-top: 10px;
`;

const Menu = styled(_Menu)`
  background-color: rgba(255, 255, 255, 0);
  color: ${styles.white};
  margin: 0 5%;
`;

export default Nav;
