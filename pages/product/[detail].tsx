
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { useQuery } from "react-query";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { productDetails } from "@/api/functions/productapi";


const detail = () => {
  const router = useRouter();
  const { detail} = router.query;

  const { data, isLoading, error } = useQuery({
      queryKey: ["singleprod"],
      queryFn: () => productDetails(Number(detail))
  })
  console.log("detail data",data)

  if(isLoading){
    return <div>
      <h1>...LOADING</h1>
    </div>
  }

  return  ( 
  <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    sx={{ height: 140 }}
   image={data?.image}
    
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
     {data?.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     {data?.description}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>

  )

}

export default detail



