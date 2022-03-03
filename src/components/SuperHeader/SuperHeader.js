import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SuperWrapper>
        <SearchInput />
        <HelpLink href='/help'>Help</HelpLink>
        <UnstyledButton>
          <Icon id='shopping-bag' strokeWidth={1} />
        </UnstyledButton>
      </SuperWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

const SuperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  padding-right: 1rem;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  padding-left: 1rem;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
