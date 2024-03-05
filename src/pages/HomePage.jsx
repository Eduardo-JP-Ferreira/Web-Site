import styled from 'styled-components';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <h1>Home Page</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: black;
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
