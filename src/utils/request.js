import axios from 'axios';

const request = axios.create(
    {
        baseURL: "http://10.16.2.133:8080/server/index.php?g=Web&c=Mock&o=simple&projectID=1045&uri=/api",
    }
)

export default request;