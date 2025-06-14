import React from 'react';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { HeadingXLarge } from 'baseui/typography';
import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import { ArrowLeft, ArrowRight } from 'baseui/icon';
import Section from '../components/atoms/section';
import {styled } from './styled-components';

gsap.registerPlugin(ScrollTrigger);

const TestimonialCard = styled('div', {
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
  margin: '0 8px',
  width: '250px',
  minWidth: '250px',
  height: '300px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexShrink: 0,
  scrollSnapAlign: 'start',
});

const TestimonialText = styled('p', {
  color: '#4B5563',
  fontSize: '16px',
  lineHeight: 1.5,
  marginBottom: '16px',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

const CustomerInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '16px',
});

const CustomerImage = styled<{ $src: string }, 'div'>('div', (props) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundImage: `url(${props.$src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginRight: '12px',
}));

const CustomerName = styled('div', {
  fontWeight: 600,
  color: '#111827',
  marginBottom: '4px',
});

const CustomerRole = styled('div', {
  color: '#10B981',
  fontSize: '14px',
});

const NavigationButton = styled(Button, {
  backgroundColor: 'white !important',
  border: '1px solid #E5E7EB !important',
  margin: '0 8px',
  ':hover': {
    backgroundColor: '#F9FAFB !important',
  },
});

const testimonials = [
  {
    id: 1,
    text: 'The platform is amazing and the customer support is top-notch. Highly recommended for anyone looking to improve their skills.',
    name: 'Sarah Johnson',
    role: 'UX Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    text: 'I\'ve tried many learning platforms, but this one stands out. The content is high quality and the interface is intuitive.',
    name: 'Michael Chen',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    text: 'As a busy professional, I appreciate how easy it is to learn at my own pace. The courses are well-structured and engaging.',
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 4,
    text: 'As a busy professional, I appreciate how easy it is to learn at my own pace. The courses are well-structured and engaging.',
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 5,
    text: 'I\'ve tried many learning platforms, but this one stands out. The content is high quality and the interface is intuitive.',
    name: 'Michael Chen',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 6,
    text: 'The platform is amazing and the customer support is top-notch. Highly recommended for anyone looking to improve their skills.',
    name: 'Sarah Johnson',
    role: 'UX Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
];

function CustomerSection() {
  const [css, theme] = useStyletron();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    handleNext();
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    handlePrev();
  };

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const cardWidth = 266; // 250px width + 16px gap

  const scrollToCard = (direction: 'prev' | 'next') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const handlePrev = () => scrollToCard('prev');
  const handleNext = () => scrollToCard('next');


  return (
      <Section 
        id="customer"
      style={{ backgroundColor: '#fff' }}
        paddingTop={['80px']}
        paddingBottom={['80px']}
      >
        <div className={css({
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        })}>
        <div className={css({
          textAlign: 'center',
          marginBottom: '35px',
        })}>
          <HeadingXLarge marginBottom={0} $style={{
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
          }}>
            What our customer say<span className={css({ 
              color: '#10B981',
              fontWeight: 700,
            })}>.</span>
          </HeadingXLarge>
        </div>

        <div 
          ref={scrollContainerRef}
          className={css({
            position: 'relative',
            overflowX: 'auto',
            overflowY: 'hidden',
            padding: '16px 0',
            margin: '0 -24px',
            scrollBehavior: 'smooth',
            '::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          })}
        >
          <div 
            ref={sliderRef}
            className={css({
              display: 'flex',
              transition: 'transform 0.5s ease-out',
              padding: '16px 24px',
              gap: '16px',
              width: 'fit-content',
              '::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            })}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <CustomerInfo>
                  <CustomerImage $src={testimonial.image} />
                  <div>
                    <CustomerName>{testimonial.name}</CustomerName>
                    <CustomerRole>{testimonial.role}</CustomerRole>
                  </div>
                </CustomerInfo>
              </TestimonialCard>
            ))}
          </div>
        </div>
        <div className={css({
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '32px'
        })}>
          <NavigationButton 
            kind={KIND.secondary}
            shape={SHAPE.circle}
            size={SIZE.compact}
            onClick={prevTestimonial}
          >
            <ArrowLeft size={24} />
          </NavigationButton>
          <NavigationButton 
            kind={KIND.secondary}
            shape={SHAPE.circle}
            size={SIZE.compact}
            onClick={nextTestimonial}
          >
            <ArrowRight size={24} />
          </NavigationButton>
          </div>
        </div>
      </Section>
  );
}

export default CustomerSection;