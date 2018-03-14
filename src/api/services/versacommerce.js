import axios from 'axios';
import { settings } from 'helpers/Common';



export class VersaApi {
	ApiKey = settings().get('versaApiKey');
	BaseUrl = settings().get('versaUrl');

	getProducts = async () => {

		try{
			 return await axios.get(`${this.BaseUrl}products.json`);

		} catch(e){
			console.log(e)
		}
	}
}


export default new AuxmoneyService();
