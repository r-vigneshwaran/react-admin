import { List, Datagrid, TextField,EmailField} from 'react-admin';

const ListGuesser = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="country" />
            <TextField source="phoneNo" />
        </Datagrid>
    </List>
);

export default ListGuesser;