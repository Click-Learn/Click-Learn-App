import { log } from "console";
import { config } from "../helpers/config";
import { WordModel } from "../Models/WordModel";
import { toastsFunctions } from "./ToastFunctions";

class ServicesFunctions {


    async getAllWordByUser(): Promise<WordModel[]>{
            try {
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
           
        } catch(e: any) {
            console.log(e);
            return [];
    }
  }

  async Favorite(wordId: number) {
    try {
      const response = await fetch(`${config.BASE_URL}/favorite/${wordId}`, {
        mode: "cors",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("ClickLearnLogged"),
        },
      }).then((res) => res.json());
      console.log(response);

      return response;
    } catch (e: any) {
      console.log(e);
    }
  }

  async UnFavorite(wordId: number) {
    try {
      const response = await fetch(`${config.BASE_URL}/unfavorite/${wordId}`, {
        mode: "cors",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("ClickLearnLogged"),
        },
      }).then((res) => res.json());
      console.log(response);

      return response;
    } catch (e: any) {
      console.log(e);
    }
  }

  async DeleteWord(wordId: number) {
    try {
      const response = await fetch(`${config.BASE_URL}/deleteWord/${wordId}`, {
        mode: "cors",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("ClickLearnLogged"),
        },
      }).then((res) => res.json());
      console.log(response);

      return response;
    } catch (e: any) {
      console.log(e);
    }
  }

  async getAllWordsromBank() {
    try {
      const response = await fetch(`${config.BASE_URL}/wordsbank`, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("ClickLearnLogged"),
        },
      }).then((res) => res.json());
      console.log(response);

      return response;
    } catch (e: any) {
      console.log(e);
    }
  }

  async addWordromBank(word: WordModel) {
    
    try {
      const response = await fetch(`${config.BASE_URL}/wordfrombank`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("ClickLearnLogged"),
        },
        body : JSON.stringify({word})
      }).then((res) => res.json());
      console.log(response);
      if(response.error == "duplicate"){
        toastsFunctions.toastInfo(` כבר שמורה ${response.word} המילה `)
        return false;
    }
    return true;
  } catch (e: any) {
    console.log(e);
    return false;
  }
}
}

export const servicesFunctions = new ServicesFunctions()