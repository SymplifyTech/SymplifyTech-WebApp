import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { HeadingXXLarge } from 'baseui/typography';
import Layout from '../components/layout';
import Section from '../components/atoms/section';
import FindPositionSection from '../content/find-position.section';
import CategoriesSection from '../content/categories.section';
import CustomerSection from '../content/customer.section';


const Home: NextPage = function () {
  return (
    <>
      <FindPositionSection />
      <CategoriesSection />
      <Section id="skills" style={{ minHeight: '100vh' }}><HeadingXXLarge>Skills</HeadingXXLarge></Section>
      <CustomerSection />
    </>
  );
};

// @ts-ignore
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default Home;
