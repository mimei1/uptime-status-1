import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于UptimeRobot，检测频率 5 分钟</p>
        <p>&copy; 2022 <Link to="https://t.me/mimei8" text="XIGUA" /></p>
      </div>
    </div>
  );
}

export default Footer;
