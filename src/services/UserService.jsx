import axios from 'axios'

const ENQUIRE_DETAILS= 'http://localhost:8080/api/post'

export const enquireDetails=(enquire)=>axios.post(ENQUIRE_DETAILS, enquire)