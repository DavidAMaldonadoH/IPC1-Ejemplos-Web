import express from 'express';
import { getCustomer, addCustomer, getCustomers, updateCustomer, deleteCustomer, login } from '../services/services';
import { CustomerData, CustomerEntry } from '../types';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola IPC1!!!');
});

router.get('/Api', (req, res) => {
    res.send('Hola API!!!');
});

router.get('/getCustomers', (req, res) => {
    res.send(getCustomers());
});

router.get('/getCustomer/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const customer = getCustomer(id);
    if (!customer) {
        res.status(404).send('Customer not found');
    } else {
        res.send(customer);
    }
});

router.post('/addCustomer', (req, res) => {
    const newCustomer: CustomerEntry = req.body;
    addCustomer(newCustomer);
    res.send({message: 'Se agrego el cliente correctamente'});
});

router.post('/addCustomers', (req, res) => {
    const newCustomers: CustomerEntry[] = req.body
    newCustomers.forEach(customer => {
        addCustomer(customer)
    })
    res.send({ message: 'Se agregaron los clientes correctamente' })
})

router.put('/updateCustomer', (req, res) => {
    const customer: CustomerData = req.body;
    const result = updateCustomer(customer);
    if (result) {
        res.send({ message: 'Se actualizó el cliente correctamente' });
    } else {
        res.status(404).send('Customer not found');
    }
});

router.delete('/deleteCustomer/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = deleteCustomer(id);
    if (result) {
        res.send({ message: 'Se eliminó el cliente correctamente' });
    } else {
        res.status(404).send({ message: 'Customer not found' });
    }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const customer = login(email, password);
    if (!customer) {
        res.status(404).send({message: 'Credenciales Incorrectas!'})
    }
    res.send(customer)
})


export default router;