import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import SectionLayout from '../components/layouts/SectionLayout';
import StatsLayout from '../components/layouts/StatsLayout';
import { Carousel } from 'react-responsive-carousel';
import Form from '../components/Form/Form';
import Chart from '../components/common/Chart';

function Home() {
  return (
    <>
      <MainLayout />
      <SectionLayout />
      <Carousel>
        <StatsLayout />
        <Chart />
        <Form />
      </Carousel>
    </>
  );
}

export default Home;
