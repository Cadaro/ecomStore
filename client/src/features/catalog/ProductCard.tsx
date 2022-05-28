import {
  Avatar,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
} from '@mui/material';
import { Product } from '../../app/models/product';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: 'primary.light' }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: 'bold', color: 'primary.main' },
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          objectFit: 'contain',
          backgroundColor: 'grey.50',
        }}
        component='img'
        image={product.pictureUrl}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {product.brand}/{product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Add to cart</Button>
        <Button size='small'>View</Button>
      </CardActions>
    </Card>
  );
};
