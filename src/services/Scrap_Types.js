import axios from 'axios';

const SCRAPTYPES_API_BASE_URL = "http://localhost:3000/scrap/v3/Scrap_Types"

class Scrap_Types {

    getScrap_Types(){
        return axios.get(SCRAPTYPES_API_BASE_URL);
    }

    createItem(item){
        return axios.post(SCRAPTYPES_API_BASE_URL, item);
    }

    getItemById(ItemId){
        return axios.get(SCRAPTYPES_API_BASE_URL + '/' + ItemId);
    }

    updateItem(item, ItemId){
        return axios.put(SCRAPTYPES_API_BASE_URL + '/' + ItemId,item);
    }

    deleteItem(ItemId){
        return axios.delete(SCRAPTYPES_API_BASE_URL + '/' + ItemId);

    }
}

export default new Scrap_Types()