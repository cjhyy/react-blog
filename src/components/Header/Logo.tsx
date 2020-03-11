import * as React from 'react';
const Logo = require('../../asset/logo.jpg');
export default function Home() {
  return (
    <div>
      <img src={Logo} alt='' height='80' width='80' />
      <p>春江花月夜</p>
    </div>
  );
}
