import React from 'react';
import Link from 'next/link';
import { Input } from 'baseui/input';
import {
  StyledGoLink, StyledInput, StyledInputContainer, StyledRoot,
} from './styled-components';

function EmailInput() {
  return (
    <Input
      id="find"
      type="text"
      placeholder="Find your passion"
      maxLength={6}
      name="Find"
      required
      endEnhancer={() => (
        <Link href="/" passHref>
          <StyledGoLink>Go</StyledGoLink>
        </Link>
      )}
      overrides={{
        Root: StyledRoot,
        Input: StyledInput,
        InputContainer: StyledInputContainer,
      }}
    />
  );
}

export default EmailInput;
