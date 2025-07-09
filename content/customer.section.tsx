import React from 'react';
import { styled } from 'baseui';

const Section = styled('section', {
  padding: '4rem 2rem',
  backgroundColor: '#f7f8f9',
});

const Heading = styled('h2', {
  fontSize: '2rem',
  marginBottom: '1.5rem',
});

const Testimonial = styled('div', {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '1.5rem',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const Text = styled('p', {
  margin: 0,
  fontSize: '1rem',
  lineHeight: '1.6',
});

const CustomerDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const CustomerName = styled('span', {
  fontWeight: 'bold',
});

const CustomerRole = styled('span', {
  color: '#666',
  fontSize: '0.875rem',
});

// ✅ Fixed styled image component with $src prop
const CustomerImage = styled<'div', { $src: string }>('div', (props) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundImage: `url(${props.$src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  flexShrink: 0,
}));

const CustomerSection = () => {
  return (
    <Section>
      <Heading>What our customers are saying</Heading>
      <Testimonial>
        <CustomerImage $src="/images/user1.jpg" />
        <CustomerDetails>
          <CustomerName>Jane Doe</CustomerName>
          <CustomerRole>Marketing Lead at TechCorp</CustomerRole>
        </CustomerDetails>
      </Testimonial>
    </Section>
  );
};

export default CustomerSection;
