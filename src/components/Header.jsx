import styled from 'styled-components';
import logo from '../assets/LogoM.png';

export default function Header() {
  return (
    <ContainerHeader>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Max Imports</h1>
      </Logo>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  background-color: black;
  width: 80%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Logo = styled.div`
  width: 40%;
  height: 51px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 51px;
    height: 51px;
    /* border-radius: 50%; */
  }
  h1 {
    font-size: 23px;
    margin-left: 10px;
    color: white;
  }
`;

const Image = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 18px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
