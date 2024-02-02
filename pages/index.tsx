import { ProductList } from "@/Product/product";
import Wrapper from "@/layout/wraper/wraper";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Container} from "@mui/material";
import {Grid} from "@mui/material";
import { useQuery } from "react-query";
import { fetchProduct } from "@/api/functions/productapi";
import { log } from "console";
import Link from "next/link";







export default function Index() {


    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProduct
    })
    console.log("responce data:", data);

    interface Rating {
        rate: number
        count: number
      }

    interface Products {
        id: number
        title: string
        price: number
        description: string
        category: string
        image: string,
        rating:Rating
    }


    return (



        <Wrapper>

            {/* < Grid container spacing={2}> */}
            {/* {
                ProductList.map(prod => (

                    <Card sx={{ maxWidth: 350, }}>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={prod.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {prod.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                    {prod.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                ))

            } */}

            {/* </Grid> */}



           
            <Container style={{paddingTop : "35px"}}>

            <Grid container  spacing={2}>
                {
                    data?.data.map((item: Products) => (

                        <Card sx={{ maxWidth: 350, }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300!"
                                    image={item.image}                                  
                                    alt="green iguana"
                                    
                            
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        {item.description}

                                    </Typography>
                                    <Link href={`/product/${item?.id}`}>DEtails</Link>
                                </CardContent>
                            </CardActionArea>
                        </Card>


                    ))
                }
            </Grid>
            </Container>
        </Wrapper >
    )




}