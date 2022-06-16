import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "#2490fe" : "transparent")};
  cursor: pointer;
  font-size: 20px;
  color: ${(props) =>
    props.primary ? "white" : props.link ? "#2490fe" : "black"};
  border-radius: 3px;
  padding: 10px 20px 10px 20px;
  margin: 10px;
  font-weight: bold;
  border: ${(props) =>
    props.dashed
      ? "1px dashed lightgrey"
      : props.text || props.link
      ? "none"
      : "1px solid lightgrey"};
  font-family: Arial, Helvetica, sans-serif;
`;

export default Button;
