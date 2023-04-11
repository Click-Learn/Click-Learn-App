import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WordModel } from "../../../../../../Models/WordModel";
import { servicesFunctions } from "../../../../../../Services/ServicesFunctions";
import "./BankWords.css";

function BankWords({ refresh, setRefresh }: {  refresh: boolean, setRefresh: (e: boolean) => void  }): JSX.Element {
  const [bankWords, setBankWords] = useState<WordModel[] | undefined>();
  const isLogin = useSelector((state : any) => state.authSlice);


  useEffect(() => {
    if(isLogin) {
      servicesFunctions.getAllWordsromBank().then((words: WordModel[] | undefined) => {
        if (words) {
          setBankWords(words);
        }
      });
    } else {
      console.log("not logged");
    }
  }, []);

  async function addWordromBank(word: WordModel){
    const success = await servicesFunctions.addWordromBank(word)
    if(success){
        const filteredWords = bankWords?.filter(w => w.id !== word.id)
        setBankWords(filteredWords);
    }
    setRefresh(!refresh)

  }

  return (
    <div className="BankWords">
      {bankWords?.map((word: WordModel) => (
        <button onClick={() => addWordromBank(word)} key={word.id}>{word.englishWord}</button>
      ))}
    </div>
  );
}

export default BankWords;
