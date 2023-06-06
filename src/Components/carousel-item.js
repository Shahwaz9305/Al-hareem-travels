import { Paper} from '@mui/material'

function Item({item})
{
    return (
        <Paper>
            <img src={item.image} alt ={item.title} style={{width
            :"100%",height:"65vh"}}/>
            <div className="description" style={{display:"flex",justifyContent:"center"}}>
                <h2>{item.title}</h2>
            </div>

        </Paper>
    )
}

export default Item