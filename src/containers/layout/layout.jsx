import React, {useState} from "react";
import {LayoutWrapper} from "./style";
import { Col, Dropdown, Row , Space} from "antd";
import { DownOutlined } from '@ant-design/icons';

import FeatherIcon from 'feather-icons-react';

import MenuSidebar from '../menu/menu';
import { Outlet } from "react-router-dom";


const items = [
    {
        label: '3rd menu item',
        key: '1',
      },
      {
        label: '3rd menu item',
        key: '2',
      },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

const Layout =() =>{
    const [menuicon,setMenuicon]= useState({alignmentIcon:"align-right",
    contentClass:'mainsectionwithoutmenu'})
      const handleMenu = () => {
        if(menuicon.alignmentIcon==="align-right"){
    
            setMenuicon({alignmentIcon:"align-left",
            contentClass:'mainsectionwithmenu'})
           } else {
            setMenuicon({alignmentIcon:"align-right",
            contentClass:'mainsectionwithoutmenu'})
           }
      }

    return (<LayoutWrapper>
        <Row className="headeradjust">
            <Col>
        <FeatherIcon size={30} icon={menuicon.alignmentIcon} className='menuicon' onClick={handleMenu} />
        <span>GLOBAL TAX</span>
        </Col>
        <Col>
        
    
        </Col>
        </Row>
        <Row >
            <Col>
             <MenuSidebar alignmentIcon={menuicon.alignmentIcon}>
        </MenuSidebar>
        </Col>
            <Col>
            <Outlet />
            </Col>
        </Row>
    </LayoutWrapper>)
}

export default Layout;