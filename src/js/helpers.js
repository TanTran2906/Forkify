//File chứa chức năng dùng chung

import { async } from "regenerator-runtime";
import {API_URL, TIME_OUT_SECOND} from './config.js'

export const getJSON = async function(url){
    try{
        const res = await Promise.race([fetch(url),timeout(TIME_OUT_SECOND)])
        const data = await res.json();
        
        if(!res.ok) throw new Error(`${data.message} ${data.status}`)
        
        return data;  //Trả về Promise nên cần await
    }
    catch(err){
        throw err;
    }
}

//Chờ nhận fetch(url) --> lâu quá báo lỗi
export const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
  