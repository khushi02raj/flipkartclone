import { imageURL } from "../../constants/data";
import { Grid,styled} from '@mui/material';

const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`;

const MidSection=()=> {
  return (
    <Wrapper container lg={12} sm={12} md={12} xs={12} >
        {/* responsive, 12 is one screen size*/}
        {
            imageURL.map(image=>(
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    {/* 4 since we want 3 image on screen */}
                <img src={image} alt="img" style={{width:'100%'}}/>
                </Grid>
            ))
        }
    </Wrapper>
  )
}

export default MidSection
