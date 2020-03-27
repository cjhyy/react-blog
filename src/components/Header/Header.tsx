import * as React from 'react';
import Logo from './Logo';
import Login from './Login';
import '../../css/Header/Head.less';

export default function Home() {
  return (
    <div className='main'>
      <Logo />
      <Login />
    </div>
  );
}
