import axios from 'axios';

/**
 * 获取api
 * @param {*} callback 
 */
const getApi = (callback) => {
    let url = "/webapi/api/v1/ocean/ships";
    axios.get(url, {
        params: {
            //name :"86313"
        }
    })
    .then(result => { callback ? callback(result.data):""; })
    .catch(e => callback?callback(e):"");
}


export {
    getApi
  } 