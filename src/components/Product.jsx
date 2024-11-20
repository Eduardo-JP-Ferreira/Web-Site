import styled from 'styled-components';

export default function Product({ productsList }) {
  return (
    <ContainerProduct>
      <img src={productsList[7]?.image}></img>
      <h1>{productsList[2]?.name}</h1>
      <h2>{productsList[2]?.price}</h2>
    </ContainerProduct>
  );
}

const ContainerProduct = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 280px;
  height: 100%;
  height: 370px;
  img {
    width: 100%;
    object-fit: contain;
  }
  h1 {
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
  }
  h2 {
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #ff9f3b;
    margin: 0px 0px 0px 0px;
  }
`;
