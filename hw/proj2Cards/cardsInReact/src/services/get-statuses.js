import axios from "axios";

const BASE_URL = 'https://radiant-temple-07706.herokuapp.com/statuses';

class GetStatuses {
   async get() {
      const response = await fetch(BASE_URL, {
         headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user'))
         }
      }).then(data => console.log('DATA', data.json()))
   }
}

export default new GetStatuses();