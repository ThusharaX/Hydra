const axios = require('axios');
require('dotenv').config()

const bid = process.env.BID;
const key = process.env.KEY;

const unique_id = 1;
const msg = "Hello";

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'http://api.brainshop.ai/get?bid=' + bid + '&key=' + key + '&uid=' + unique_id + '&msg=' + msg
    }

    let res = await axios(config)

    console.log(res.data.cnt);
}

makeRequest();

