import axios from 'axios'

// This is the configuration for sending HTTP Requests with Axios
// Very simple, but it also doesn't give us much abstraction
const eCommerceClient = axios.create({
  withCredentials: true,
  baseURL: 'http://ec2-54-83-92-30.compute-1.amazonaws.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  },
})

// const eCommerceClient = axios.create({
//   withCredentials: true,
//   baseURL: 'http://a771792005a2b4fc3be50a71e9f3c835-1575173433.us-east-1.elb.amazonaws.com:5000/',
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin':
//       'http://aac53e81081b042258fc80efa94a009c-104931072.us-east-1.elb.amazonaws.com:3000/',
//     'Access-Control-Allow-Headers': 'Content-Type, application/json',
//     'Access-Control-Allow-Methods': '*',
//   },
// })

export interface eCommerceApiResponse {
  status: number
  payload: any
}

export default eCommerceClient
