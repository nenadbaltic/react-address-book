export const getVisibleContacts = (contacts, { text, sortBy, order }, fields ) => {
    let filteredContacts = contacts.filter((contact) => {
        const textName = contact.firstName.toLowerCase().includes(text.toLowerCase()) || 
        contact.lastName.toLowerCase().includes(text.toLowerCase());

        if(fields.email) {
            var textEmail = contact.email.toLowerCase().includes(text.toLowerCase());
        }
        if(fields.address) {
            var textAddress = contact.address.toLowerCase().includes(text.toLowerCase());
        }
        if(fields.cellPhone) {
            var textCellPhone = contact.cellPhone.toLowerCase().includes(text.toLowerCase());
        }

        return textName || textEmail || textAddress || textCellPhone;
    });

    let orderToggle = !order;

    filteredContacts.sort((a, b) => {
        if(!orderToggle) {
            if(sortBy === 'First Name') {
                return a.firstName > b.firstName ? 1 : - 1;
            }
            else if(sortBy === 'Last Name') {
                return a.lastName > b.lastName ? 1 : - 1;
            }
            else if(sortBy === 'Email') {
                return a.email > b.email ? 1 : - 1;
            }
            else if(sortBy === 'Address') {
                return a.address > b.address ? 1 : - 1;
            }
            else {
                return a.cellPhone > b.cellPhone ? 1 : - 1;
            }
        }
        
        else {
            if(sortBy === 'First Name') {
                return a.firstName < b.firstName ? 1 : - 1;
            }
            else if(sortBy === 'Last Name') {
                return a.lastName < b.lastName ? 1 : - 1;
            }
            else if(sortBy === 'Email') {
                return a.email < b.email ? 1 : - 1;
            }
            else if(sortBy === 'Address') {
                return a.address < b.address ? 1 : - 1;
            }
            else {
                return a.cellPhone < b.cellPhone ? 1 : - 1;
            }
        }
    })

    return filteredContacts;
}