import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  p {
    color: #fafafa80;
    font-size: 15px;
  }

  .container {
    align-items: center;
    display: flex;
    gap: 10px;
    text-decoration: underline;

    img {
      border-radius: 50%;
      width: 32px;
      height: 32px;
    }

    h3 {
      color: #fafafa;
      font-size: 32px;
    }
  }

  div {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    margin-top: 10px;

    a {
      color: #fafafa;
      text-decoration: none;
    }

    a.remover {
      color: red;
    }
  }

  hr {
    color: #fafafa60;
    margin: 15px 0;
  }
`;
