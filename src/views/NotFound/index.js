import { Box } from "@material-ui/core"
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Box>
            <Typography>
                NotFound page
            </Typography>
            <Link to="/">Volta pra home</Link>
        </Box>
    )
}
export default NotFound;