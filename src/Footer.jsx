import React from "react";

function Footer() {
  var CurrYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright By Gaurav @ {CurrYear}</p>
    </footer>
  );
}

export default Footer;
