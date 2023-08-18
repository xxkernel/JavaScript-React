import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    
    const elems = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={()=> onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default EmployeesList;