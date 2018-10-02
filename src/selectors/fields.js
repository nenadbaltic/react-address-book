export const checkedFields = (fields) => {
    let counter = 0;
    for (let field in fields) {
        let singleField = fields[field];
        if(singleField) {
            counter++;
        }
    }
    
    return counter;
}