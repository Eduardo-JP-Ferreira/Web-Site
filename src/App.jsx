import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';
import HomePage from './pages/HomePage';

function App() {
  return (
    <PageContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;
export default App;
