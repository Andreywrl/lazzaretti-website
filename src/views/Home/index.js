import { Box } from "@material-ui/core"
import { Typography } from "@mui/material";
import Categories from "./Categories";
import FeedBacks from "./FeedBacks";
import Highlights from "./Highlights";
import News from "./News";
import TheGirls from "./TheGirls";
import Wedding from "./Wedding";

const Home = () => {
    return (
        <Box>
            <Typography>
                Hello World! Home page
            </Typography>
            <Highlights />
            <Categories />
            <News />
            <Wedding />
            <TheGirls />
            <FeedBacks />
        </Box>
    )
}
export default Home;