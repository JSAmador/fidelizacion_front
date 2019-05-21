import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const CustomLayout = (props) => {
    return (
        <div class="main_container">
            <div class="header">Header</div>
            <div class="content_container">{props.children}</div>
            <div class="footer">Footer</div>
        </div>
    );
}



export default CustomLayout;