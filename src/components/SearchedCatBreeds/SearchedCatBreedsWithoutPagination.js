import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Button, CardActions } from '@mui/material';
import { Grid } from '@mui/material';

const SearchedCatBreedsWithoutPagination = ({catBreedSearchedList}) => {
  return (
    <Container>
    <Grid
        container
        spacing={4}
        sx={{margin:"4rem 0"}}
    >
        {
            catBreedSearchedList.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        {
                            item.image
                                &&  <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                    >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                                component="img"
                                                height="140"
                                                image={item.image.url}
                                                alt={item.name}
                                            />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="div">
                                                {`Origin: ${item.origin}`}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                    </Grid>
                        }
                    </React.Fragment>
                )
            })
        }
    </Grid>
    </Container>
  )
}

export default SearchedCatBreedsWithoutPagination