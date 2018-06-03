import axios from 'axios';
import { settings } from '../helpers/Common';


export class AuxmoneyApi {
  postForm = async (form) => {
    const url = settings.get('auxmoneyUrl');
    const token = settings.get('auxmoneyKey');

    try {
      return await axios.post(url, form, {
        headers: {
          urlkey: token,
        },
      });
    } catch (e) {
      throw e.response.data;
    }
  }
}


export default new AuxmoneyApi();

