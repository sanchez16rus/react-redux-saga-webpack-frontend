/*Functions to help*/
const changeItemInArray = (mass, changeItem) => { 
  return mass.map( (item) => {
    if(item.id !== changeItem.id) {
      return item;
    }
  
    return changeItem;    
  });
}
  
const removeItemFromArray = (mass, id) => { 
  return mass.filter(function( item ) {
    return item.id !== id;
  }); 
}

const getNewDepartment = () => { 
  return {
    id: 0,
    name: ''
  };
}

const getNewEmployee = () => { 
  return {
    id: 0,
    firstName: '',
    lastName: '',
    departmentId: 0
  };
}

export default {
  changeItemInArray,
  removeItemFromArray,
  getNewDepartment,
  getNewEmployee
}