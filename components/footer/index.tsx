import React from 'react';
import { styled, useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';

const linkedinIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 17h.8M7 15h.8M7 13h.8m-1.4-2c.686.323 1.221.902 1.621 1.626-.009.754-.5 1.295-1.791 1.295t-1.291-.46a2.07 2.07 0 0 1-.62-1.27c-.393.267-.73.525-1.021.77C4.618 13.1 4.27 12.85 4 12.73c-1.396.787-2.86 1.53-4.3 2.34-1.43-.67-2.7-1.43-3.9-2.43z"
    />
  </svg>
);

const envelopeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 0 0 1.11 0L21 8M5 19h14a2 2 0 0 0 1.11-0L21 5a2 2 0 0 0-1.11 0L12 14.11L5 5a2 2 0 0 0-1.11 0z"
    />
  </svg>
);

const FooterContainer = styled('footer', {
  width: '100%',
  backgroundColor: 'white',
  padding: '32px 0',
  borderTop: '1px solid #E5E7EB',
});

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '32px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '24px',
  },
});

const NavLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  maxHeight: '120px',
  gap: '0 64px',
  '@media (max-width: 768px)': {
    maxHeight: 'none',
    gap: '8px',
  },
});

const Newsletter = styled('div', {
  flex: '1',
  minWidth: '280px',
  maxWidth: '400px',
  '@media (max-width: 768px)': {
    width: '100%',
    maxWidth: 'none',
  },
});

const BottomSection = styled('div', {
  maxWidth: '1200px',
  margin: '32px auto 0',
  padding: '24px 24px 0',
  borderTop: '1px solid #E5E7EB',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (max-width: 480px)': {
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'center',
  },
});

const Footer = () => {
  const [value, setValue] = React.useState('');
  const [css] = useStyletron();

  const linkStyles = {
    color: '#4B5563',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    padding: '8px 0',
    ':hover': {
      color: '#111827',
    },
  } as const;

  const socialLinkStyles = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6B7280',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: '#D1D5DB',
    },
  } as const;

  return (
    <FooterContainer>
      <Container>
        {/* Logo */}
        <div className={css({
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 700,
          marginRight: '64px',
        })}>
          <img
            src="/logo .png" 
            alt="Logo"
            className={css({
              height: '70px',
              width: '90px',
            })}
          />
          <span className={css({
            display: 'inline-block',
            width: '6px',
            height: '6px',
            backgroundColor: '#10B981',
            marginLeft: '4px',
            borderRadius: '50%',
          })} />
        </div>

        {/* Navigation Links */}
        <NavLinks>
          <a href="#" className={css(linkStyles)}>Our Services</a>
          <a href="#" className={css(linkStyles)}>AI in Industry</a>
          <a href="#" className={css(linkStyles)}>Case Studies</a>
          <a href="#" className={css(linkStyles)}>About Us</a>
        </NavLinks>

        {/* Newsletter */}
        <Newsletter>
          <div className={css({
            display: 'flex',
            gap: '8px',
            width: '100%',
          })}>
            <Input
              value={value}
              onChange={e => setValue(e.currentTarget.value)}
              placeholder="Enter your email"
              overrides={{
                Root: {
                  style: {
                    width: '100%',
                    backgroundColor: 'white',
                    borderColor: '#E5E7EB',
                    ':hover': {
                      borderColor: '#9CA3AF',
                    },
                  },
                },
                Input: {
                  style: {
                    backgroundColor: 'transparent',
                    fontSize: '14px',
                    '::placeholder': {
                      color: '#9CA3AF',
                    },
                  },
                },
              }}
            />
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    backgroundColor: '#10B981',
                    color: 'white',
                    ':hover': {
                      backgroundColor: '#059669',
                    },
                    whiteSpace: 'nowrap',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                  },
                },
              }}
            >
              GO
            </Button>
          </div>
        </Newsletter>
      </Container>

      {/* Bottom Section */}
      <BottomSection>
        <div className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#9CA3AF',
          fontSize: '12px',
        })}>
          <div className={css({
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#374151',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          })} />
          <span>2025 SymplifyTech Consultancy Pvt. Ltd. All rights reserved</span>
        </div>

        <div className={css({
          display: 'flex',
          gap: '12px',
        })}>
          <a
            href="https://www.linkedin.com/company/symplifytech/"
            target="_blank"
            rel="noopener noreferrer"
            className={css(socialLinkStyles)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <a
            href="mailto:techsymplify@gmail.com"
            className={css(socialLinkStyles)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </a>
        </div>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
