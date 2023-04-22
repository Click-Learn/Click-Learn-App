import "./SavedWords.css";
import { IconButton } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { WordModel } from "../../../../../Models/WordModel";
import { servicesFunctions } from "../../../../../Services/ServicesFunctions";
import { toastsFunctions } from "../../../../../Services/ToastFunctions";
import BankWords from "./BankWords/BankWords";

function SavedWords({ userWords, refresh, setRefresh }: { userWords: WordModel[], refresh: boolean, setRefresh: (e: boolean) => void  }): JSX.Element {

    function FavoriteToogle(word: WordModel) {
        if(word.favorite) {
            //function to unfavorite
            servicesFunctions.UnFavorite(word.id).then((res) => setRefresh(!refresh))
        } else {
            // function to favorite
            servicesFunctions.Favorite(word.id).then((res) => setRefresh(!refresh))
        }
    }

    async function deleteWord(word : WordModel) {
        servicesFunctions.DeleteWord(word.id).then((res) =>{
            setRefresh(!refresh)
            toastsFunctions.toastSuccess("נמחק")
        }) 
    }
    return (
        <div className="SavedWords">
                        {userWords?.map((word: WordModel) => (
                                        <div className="save_words_lists_line" key={word.id}>
                                            <div className="icons">

                                        <IconButton onClick={() => FavoriteToogle(word)} sx={{ p: 0, fontSize: '25px !important' }} >
                                                { word.favorite ? 
                                                  <AiFillStar style={{ color : 'var(--color-dark)'}} />
                                                  : 
                                                  <AiOutlineStar style={{ color : 'var(--color-dark)'}} />
                                                }
                                            </IconButton>
                                        <IconButton sx={{ p: 0, fontSize: '25px !important' }} >
                                                <div className="delete_icons" onClick={() => deleteWord(word)}>
                                                  <MdDelete className="delete_icon_full" style={{ color : 'var(--color-dark)'}} />
                                                  <MdDeleteOutline className="delete_icon_stroke" style={{ color : 'var(--color-dark)'}} />
                                                </div>
                                                    
                                            </IconButton>
                                                </div>


                                            
                                        <div className="translate_saved_word">
                                            <p>{word.hebrewWord}</p>
                                            <span className="arrow_right"><BsArrowRight/></span>
                                            <p>{word.englishWord}</p>
                                        </div>
                                    </div>
                        ))}

                    <div className="not_enough_words">
                        {userWords.length < 6 ? 
                        <div className="saved_words_container">
                           <p className="not_enough_words_p">אין מספיק מילים שמורות</p> 
                           <p className="not_enough_words_p2">השתמש בתוסף או הוסף מילים</p> 
                           <button className="btn_extension" >למעבר לתוסף</button>
                        </div>
                        : 
                           <p className="enough_words_p2">השתמש בתוסף או הוסף מילים</p> 

                        
                        }
                           <div>
                            <BankWords  refresh={refresh} setRefresh={setRefresh} />
                           </div>
                        
                    </div>
                        
        </div>
    );
}

export default SavedWords;
