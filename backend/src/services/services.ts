import { dataCustomers } from "./data";
import { CustomerData, CustomerEntry } from "../types"


export var customerData = dataCustomers;

export const getCustomers = () => dataCustomers

export const getCustomer = (id: number) => {
    const customer = customerData.find(c => c.id === id);
    if (!customer) {
        return null;
    }
    return customer;
}

export const addCustomer = (newCustomer: CustomerEntry) => {
    var newId: number = 1;
    if (customerData.length > 0) {
        newId = customerData[customerData.length - 1].id + 1;
    }
    const newDataCustomer: CustomerData = { id: newId, ...newCustomer };
    customerData.push(newDataCustomer);
}

export const updateCustomer = (customer: CustomerData) => {
    const index = customerData.findIndex(c => c.id === customer.id)
    if (index === -1) {
        return false;
    }
    customerData[index] = customer;
    return true;
}

export const deleteCustomer = (id: number) => {
    //Busca el índice donde el id coincida
    const index = customerData.findIndex(c => c.id === id);
    //Si no lo encuentra, retorna false
    if (index === -1) {
        return false;
    }
    //Si lo encuentra, lo elimina
    customerData.splice(index, 1);
    return true;
}

export const login = (email: string, password: string) => {
    const customer = customerData.find(c => c.email === email && c.password === password);
    if (!customer) return null;
    return customer;
}

export const convertCustomerDataToCSV = () => {
    const csvRows = [];

    const headers = Object.keys(customerData[0]);
    csvRows.push(headers.join(','))

    const data: Map<string, string> = new Map();
    customerData.forEach((row: CustomerData) => {
        headers.forEach((header: string) => {
            data.set(header, String(row[header as keyof CustomerData]))
        })
    })

    customerData.forEach((row: CustomerData) => {
        const values = headers.map((header: string) => {
            return ('' + row[header as keyof CustomerData]).replace(/"/g, '\\"')
        })
        csvRows.push(values.join(','))
    })

    return csvRows.join('\n')
}

export const groupCreditCardsByLength = () => {
    const creditCardLengths = customerData.map(c => c.credit_card.length);
    const creditCardLengthsCount = creditCardLengths.reduce((acc, length) => {
        acc[length] = (acc[length] || 0) + 1;
        return acc;
    }, {} as {[key: number]: number})
    return creditCardLengthsCount;
}
