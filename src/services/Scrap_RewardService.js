import axios from 'axios';

const   SCRAPREWARD_API_BASE_URL = "http://localhost:8081/reward/v4/SCRAP_REWARD"

class Scrap_RewardService {

    getScrapReward(){
        return axios.get(SCRAPREWARD_API_BASE_URL);
    }


    
        getItemId(CustomerId){
            return axios.get(SCRAPREWARD_API_BASE_URL + '/' + CustomerId);
        }
    
        updateReward(Reward, CustomerId){
            return axios.put(SCRAPREWARD_API_BASE_URL + '/' + CustomerId,Reward);
        }
    
        
    }
    


export default new Scrap_RewardService()