import { Button, Grid, Slide, Typography } from '@mui/material';
import OurServices from './OurServices';
import ChooseUs from './ChooseUs';
import HomePage from '../components/HomePage'

const Home = () => {

  return (
    <>
      <HomePage/>
      <OurServices />
      <ChooseUs />
    </>
  );
};

export default Home;
