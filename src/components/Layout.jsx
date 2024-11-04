import React, { useState } from 'react';

import { Breadcrumb, Layout as LayoutAnt, Menu, theme } from 'antd';
import { HomeFilled, InfoCircleFilled, ProductFilled, LikeFilled } from '@ant-design/icons';
// import ProductTable from './ProductTable';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { DoctorContext } from '../context/Doctor.context';
import { useContext } from 'react';

const { Header, Content, Footer } = LayoutAnt;

const items = [
    {
        key: '/',
        label: "Home",
        icon: <Link to="/"><HomeFilled /></Link>,
    },
    {
        key: '/hospital',
        label: "Hospital",
        icon: <Link to="/hospital"><ProductFilled /></Link>,
    },
    {
        key: '/about',
        label: "About",
        icon: <Link to="/about"><InfoCircleFilled /></Link>,
    },
    {
        key: '/favorites',
        label: "Favorites",
        icon: <Link to="/favorites"><LikeFilled /></Link>,
    },
];

const Layout = () => {

    const { count } = useContext(DoctorContext);
    const [current] = useState(useLocation().pathname);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <LayoutAnt className='Layout'>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[current]}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
                 <span style={{ color: 'white' }}>Count: {count}</span>
            </Header>

            <Content className='main'
                style={{
                    padding: '0 48px',
                    margin: '24px 0'
                }}
            >
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {/* render component based on active route */}
                    <Outlet />
                </div>
            </Content>

            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </LayoutAnt>
    );
};
export default Layout;