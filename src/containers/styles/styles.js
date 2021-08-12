import styled from "styled-components";

export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  border: 5px solid rgba(0, 0, 0, 0.1);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-left-color: #09f;
  margin: auto;
  animation: spin 1s ease infinite;
  margin-top: 150px;
`;
