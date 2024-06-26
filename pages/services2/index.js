import { List, ListSubheader } from "@mui/material";
import ListServicesProto2 from "../../components/cards/listServicesProto2.js";

export default function products() {
    return (
        <>
            <List
                fullWidth
                sx={{
                    width: '100%',
                    bgcolor: 'grey.200',
                    borderRadius: '8px',
                    padding: '16px',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        sx={{
                            bgcolor: '#063d79',
                            color: 'white',
                            borderRadius: '8px 8px 0 0',
                            padding: '16px',
                        }}
                        component="div"
                        id="nested-list-subheader"
                    >
                        Los servicios que tenemos y brindamos de nuestra empresa, se muestran a continuacion:
                    </ListSubheader>
                }
            />
            <ListServicesProto2 />
        </>
    )
}
