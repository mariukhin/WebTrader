import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
`;