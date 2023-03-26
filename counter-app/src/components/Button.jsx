import React from 'react';
import Styled from '@emotion/styled';

const ButtonStyled = Styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  margin: 0px 0.5rem;
`;

const Button = (props) => {
  const { children, ...rest } = props;

  return (
    <ButtonStyled {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;