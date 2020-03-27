import * as React from 'react';
const Logo = require('../../asset/logo.jpg');
export default function logo() {
  return (
    <div>
      <img src={Logo} alt='' height='44' width='44' />
      <span>春江花月夜的个人博客</span>
    </div>
  );
}
