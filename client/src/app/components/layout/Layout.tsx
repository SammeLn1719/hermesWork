import React, { FC } from 'react';
import Footer from './Footer/Footer';

import TopBar from './Header/TopBar';



interface Layout{
  children: string | JSX.Element | JSX.Element[];
}

const Layout:FC<any> = ({children}) => <><TopBar/>{children}<Footer/></>

export default Layout;