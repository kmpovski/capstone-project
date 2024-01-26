import logo from '../assets/Asset 20@4x.png';

const Footer = () => {
    return (
      <footer style= {{display: "flex"}}>
          <span style= {{flex: 1, textAlign: "center"}}>
              <img style= {{height: "200px"}} src={logo} alt="Small logo of Little Lemon" />
          </span>
          <span style={{flex: 1, textAlign: "center", alignSelf: "center"}}>
              <p>Website by YC / Little Lemon &copy;</p>
          </span>
      </footer>
    );
}

export default Footer;