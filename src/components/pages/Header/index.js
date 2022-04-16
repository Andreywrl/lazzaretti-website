import { Box, Typography } from "@material-ui/core";
import React from "react";

function Header() {
    return (
        <Box sx={{ width: '100%', bgColor: 'blue' }}>
            <Typography>
                This is the Header component
            </Typography>
        </Box>
    );

}

export default Header;