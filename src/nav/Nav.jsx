import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Input } from 'antd';
const { Search } = Input;
import { Select, Space } from 'antd';
const items1 = ['Home', 'Auth', 'Admin'].map((key) => ({
    key,
    label: `${key}`,
    
  }));
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const items2 = [UserOutlined, LaptopOutlined].map((icon) => {
  
    return {
      key: ["Products", "Users"],
      icon: React.createElement(icon),
      label: ["Products","Users"] ,
  
    };
  });
const Nav = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

      return (
        <Layout>
         
          <Header

            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between' 
              
            }}
          >
            <div className="demo-logo"/>
            <h1 style={{color:"#fff"}}>
            E-commerce
          </h1>
            <Search className='search' placeholder="input search text" enterButton="Search" size="large"style={{maxWidth:'320px'}} />
            <Menu
           
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items1}
             
            />
                    <Space wrap>
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Uzbek',
          label: 'Uzbek',
        },
        {
          value: 'Rus',
          label: 'Rus',
        },
     
      ]}
   />
  </Space>
          </Header>
         
          <Content
            style={{
              padding: '0 48px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              
            </Breadcrumb>
            <Layout
              style={{
                padding: '24px ',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
           <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
              background:"#000"
            }}
            items={items2}
          />
        </Sider>
 
              <Content
                style={{
                  padding: '0 24px',
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      );
  

}

export default Nav