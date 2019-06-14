import axios from 'axios'

const http=axios.create({
   baseURL:'http://localhost:4000/admin/api/'
    
})
//console.log('helo')
export default http 