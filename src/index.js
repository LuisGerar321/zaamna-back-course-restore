const axios = require("axios");
const { logger } = require("./utils/logger");
const { sleep } = require("./utils/sleep");


(async function main() {
  let initialPage = 1;
  let perPage = 100;
  try {
    const data = await axios.get(`http://localhost:3004/api/v1/admin/users/mandatory/plan/users?page=1&per_page=${perPage}`).then(res => res.data.data);
    const { totalPages } = data;
    console.log(totalPages);
  
    for(let i = initialPage; i <= totalPages; i++){
      await axios.get(`http://localhost:3004/api/v1/admin/users/restore/ypt/course?page=${i}&per_page=${perPage}`)
      logger.info(`Page number ${i} was updated`);
      await sleep(500);
    };    
  } catch (error) {
    logger.error(error);
  }
})();





