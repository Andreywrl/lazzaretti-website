import { Box, Typography } from "@material-ui/core"
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <Box>
            <Typography>
                AboutUs page
            </Typography>
            <Link to="/">Volta pra home</Link>
        </Box>
    )
}

export default AboutUs;