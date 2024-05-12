import { Card, CardContent, Divider, Grid, Slide, Typography } from "@mui/material";
import cardData from "../constent";

const ChooseUs = () => {
  return (
    <div style={{ marginTop: "30px" }}>
  <Slide direction="right" in={true} timeout={800} mountOnEnter unmountOnExit>
        <div>
          <Divider style={{ borderBottomWidth: '3px', marginBottom:"10px" , backgroundColor: '#8B5CF6' }} />
          <Typography variant="h3" align="center" gutterBottom style={{ color: '#8B5CF6' }} className="animated-heading">
          Why choose Decency?
          </Typography>
          <Divider style={{ borderBottomWidth: '3px', backgroundColor: '#8B5CF6' }} />
        </div>
      </Slide>

      <Grid container spacing={3}>
        {cardData?.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              style={{
                height: '100%',
                margin: '20px',
                cursor: "pointer",
                backgroundColor:"white",
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
                border: '1px solid #8B5CF6', // Use the color of from-purple-500
                backgroundImage: 'linear-gradient(to right, #8B5CF6, #FF57B9, #FF6D00)', // Use the specified gradient colors
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '20px' }}>
                  {card.icon}
                </div>
                <Typography variant="h6" align="center" gutterBottom>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChooseUs;
