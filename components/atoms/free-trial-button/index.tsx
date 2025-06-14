import React from 'react';
import { Button, SHAPE, SIZE } from 'baseui/button';

function FreeTrialButton() {
  return (
    <Button
      size={SIZE.compact}
      shape={SHAPE.pill}
      type="button"
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            minWidth: '10rem',
            paddingTop: '11px',
            paddingRight: '30px',
            paddingBottom: '11px',
            paddingLeft: '30px',
            textAlign: 'center',
            fontSize: '1rem',
            lineHeight: '22px',
            transitionProperty: 'box-shadow',
            transitionDuration: $theme.animation.timing200,
            backgroundColor: 'rgb(151, 198, 128)',
            boxShadow: 'rgb(30, 30, 47) 0px 45px 0px 0px inset',
            ':hover': {
              backgroundColor: 'rgb(151, 198, 128)',
              boxShadow: 'rgb(30, 30, 47) 0px 45px 0px -50px inset',
              color: '#1e1e2f',
            },
            [$theme.mediaQuery.small]: { minWidth: 'auto', width: '100%' },
            [$theme.mediaQuery.medium]: { minWidth: '160px', width: 'auto' },
            [$theme.mediaQuery.large]: { minWidth: '160px', width: 'auto' },
          }),
        },
      }}
    >
      Free Trial
    </Button>
  );
}

export default FreeTrialButton;
