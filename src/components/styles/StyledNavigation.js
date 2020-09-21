import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #1c1c1c ;
  

  .navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

  .homeTitle{
    &:hover{
      text-decoration:underline;
    }

  };

    p {
      font-family: 'Abel', sans-serif;
      font-size: 32px;
      float: left;
      color: #fff;
      padding-right: 10px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;
