import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function Tender_card({title,description}) {
  return (
    <Box margin={1} marginBlockEnd={3}>
    <Card sx={{ maxWidth: 245 }}  >
      <CardMedia
        sx={{ height: 100 }}
        image="https://th.bing.com/th?id=OSK.HEROtnPRmD6jb6pSt7EYc2u_tuXsPOUN-Z16ra3qKk78PxA&w=296&h=176&c=1&rs=2&o=6&dpr=1.5&pid=SANGAM"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  variant="contained" color="secondary">View</Button>
        <Button size="small"  variant="contained" color="success">Bid</Button>
      </CardActions>
    </Card>
    </Box>
  );
}
