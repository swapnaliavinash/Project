import axios from 'axios';

const USERREQUEST_API_BASE_URL = "http://localhost:8081/cust/v2/CustomerRequests"

class User_RequestService {

    getUser_Request(){
        return axios.get(USERREQUEST_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(USERREQUEST_API_BASE_URL, customer);
    }

    getCustomerById(customerId){
        return axios.get(USERREQUEST_API_BASE_URL + '/' + customerId);
    }

    updateCustomer(customer, customerId){
        return axios.put(USERREQUEST_API_BASE_URL + '/' + customerId, customer);
    }

    deleteCustomer(customerId){
        return axios.delete(USERREQUEST_API_BASE_URL + '/' + customerId);

    }
}

export default new User_RequestService()