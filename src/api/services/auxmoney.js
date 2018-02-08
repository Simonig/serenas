import axios from 'axios';
import Common from 'helpers/Common';



export class AuxmoneyService {

	postForm = async (form) => {
		const url = Common.settings().get('auxmoneyUrl');

		try{
			 return await axios.post(url, form);

		} catch(e){
			console.log(e)
		}
	}
}


export default new AuxmoneyService();
