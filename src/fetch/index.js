import axios from 'axios'

const url_link = 'http://localhost:8000'

const fetchData = async(method, url, data) =>{

    const response = await axios({
        method: method,
        url: `${url_link}${url}`,
        data
      });
      console.log('Response:', response.data)
    return null


}
export default fetchData