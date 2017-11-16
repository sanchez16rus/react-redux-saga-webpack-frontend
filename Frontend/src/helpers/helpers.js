/*Functions to help*/
export const changeItemInArray = (mass, changeItem) => { 
  return mass.map( (item) => {
    if(item.id !== changeItem.id) {
      return item;
    }
  
    return changeItem;    
  });
}
  
export const removeItemFromArray = (mass, id) => { 
  return mass.filter(function( item ) {
    return item.id !== id;
  }); 
}

export const getNewDepartment = () => { 
  return {
    id: 0,
    name: ''
  };
}

export const getNewEmployee = () => { 
  return {
    id: 0,
    firstName: '',
    lastName: '',
    departmentId: 0
  };
}
  