import { Card, CardContent, Divider, Grid, Slide, Typography } from '@mui/material';
import { servicesData } from '../constent';

const OurServices = () => {
  return  (
    <div style={{ marginTop: '20px'}}>
  <Slide direction="right" in={true} timeout={800} mountOnEnter unmountOnExit>
        <div>
          <Divider style={{ borderBottomWidth: '3px', marginBottom:"10px" , backgroundColor: '#8B5CF6' }} />
          <Typography variant="h3" align="center" gutterBottom style={{ color: '#8B5CF6' }} className="animated-heading">
            Services we provide
          </Typography>
          <Divider style={{ borderBottomWidth: '3px', backgroundColor: '#8B5CF6' }} />
        </div>
      </Slide>

    <Grid container spacing={3}>
      {servicesData.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            style={{
              height: '90%',
              margin: '40px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
              border: '1px solid #8B5CF6', // Use the color of from-purple-500
              backgroundImage: 'linear-gradient(to right, #8B5CF6, #FF57B9, #FF6D00)', // Use the specified gradient colors
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'center' }}>
                <img src={service.imageSrc} alt={service.title} style={{ width: '100%', maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
              </div>
              <Typography variant="h6" align="center" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default OurServices;
