import styled from 'styled-components';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

export default function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <Page>
        <Carousel />
      </Page>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: black;
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  background-color: lightblue;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 70px;
`;
