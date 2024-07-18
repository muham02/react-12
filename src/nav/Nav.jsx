import React from 'react'
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Input } from 'antd';
const { Search } = Input;
import { Select, Space } from 'antd';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const items1 = ['Home', 'Auth', 'Admin'].map((key) => ({
    key,
    label: `${key}`,
    
  }));
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
const Nav = () => {
  
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
const [collapsed,setCollapsed] =useState(false)
      return (

              
<>
<Layout style={{minHeight:"100vh"}}>
      <Sider  trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{display:"Flex"}} />
       
        <Menu 
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
        
              label: <NavLink to="/admin/product">Basket</NavLink>,
            },
            {
              key: '2',
            
              label:<NavLink to='/admin/user'>Foots</NavLink>,
            },
           
          ]}
    ></Menu>
      </Sider>
      <Layout>
        <Header style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color:"#fff",
              
            }}
          />
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <Menu style={{width:"350px"}}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
            
              label: 'nav 1',
            },
            {
              key: '2',
          
              label: 'nav 2',
            },
            {
              key: '3',
          
              label: 'nav 3',
            },
          ]}
        />

        </Header>
        <Content  style={{
            padding: 24,
            minHeight: 380,
            background: "dodgerblue",
            color:"#fff",
            fontSize:"25px",
           borderRadius:"15px",
            margin:"30px"
          }}>
         <Outlet/>
        </Content>
      </Layout>
      </Layout>
      
        
       
      
      </>
      )

}

export default Nav