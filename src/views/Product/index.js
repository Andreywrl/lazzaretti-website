import { Box } from "@material-ui/core"
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Product = () => {

    const idProduct = useParams();

    console.log(idProduct)
    
    return (
        <Box>
            <Typography>
                ID {idProduct.id} Product page
            </Typography>
        </Box>
    )
}
export default Product;