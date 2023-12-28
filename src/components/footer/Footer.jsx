const Footer = () => {
  return (
    <div className="footer">
      {/* Top */}
      <div className="footer__top">
        <div className="item">
          <h2>Categories</h2>
          <span>Men</span>
          <span>Woman</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Coockies</span>
        </div>

        <div className="item">
          <h2>About</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure
            dolores et quidem praesentium voluptas alias doloremque natus
            corporis sequi architecto perferendis maiores eos aliquam
            consectetur, maxime sunt hic magni.
          </span>
        </div>

        <div className="item">
          <h2>Contact</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure
            dolores et quidem praesentium voluptas alias doloremque natus
            corporis sequi architecto perferendis maiores eos aliquam
            consectetur, maxime sunt hic magni.
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="left">
          <span className="logo">AnxiousKart</span>
          <span className="copyright">© 2023. All rights reserved</span>
        </div>
        <div className="right">
          <img src="./payments.png" alt="payments" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
