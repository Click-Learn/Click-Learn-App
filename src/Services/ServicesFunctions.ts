import { config } from "../helpers/config";
import { WordModel } from "../Models/WordModel";

class ServicesFunctions {

    async getAllWordByUser(): Promise<WordModel[] | undefined>{

        const response =  await fetch(`${config.BASE_URL}/words`, {
             mode: "cors",
             method: "GET",
             headers : {
                "Content-Type": "application/json",                                                                                                
                "Access-Control-Origin": "*",
                "authorization": "" + window.localStorage.getItem("ClickLearnLogged")
             },
             
          }).then(res => res.json());
            console.log(response);
            
           return response;
           
        } catch(e: Error) {
            console.log(e);
        }
    }




export const servicesFunctions = new ServicesFunctions()