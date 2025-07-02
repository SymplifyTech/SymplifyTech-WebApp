import React from 'react';
import { useStyletron } from 'baseui';
import { HeadingXLarge } from 'baseui/typography';
import Section from '../components/atoms/section';

const BlogsSection = () => {
  const [css] = useStyletron();
  
  return (
    <Section id="blogs" style={{ backgroundColor: '#f9fafb', padding: '80px 0' }}>
      <div className={css({
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
      })}>
        <HeadingXLarge 
          marginBottom="scale800"
          $style={{
            textAlign: 'center',
            fontWeight: 700,
            marginBottom: '48px',
            color: '#1a1a1a'
          }}
        >
          Our Latest Insights
        </HeadingXLarge>
        
        <div className={css({
          textAlign: 'center',
          color: '#666',
          fontSize: '18px',
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px 0',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        })}>
          <div>
            <div className={css({
              fontSize: '48px',
              marginBottom: '16px',
              color: '#97c680'
            })}>
              Coming Soon
            </div>
            <p>Our blog is currently under development.</p>
            <p>Check back later for insightful articles and updates!</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BlogsSection;
