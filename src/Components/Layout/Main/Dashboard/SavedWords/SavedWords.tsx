import "./SavedWords.css";
import { IconButton } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { WordModel } from "../../../../../Models/WordModel";
import { servicesFunctions } from "../../../../../Services/ServicesFunctions";

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
    return (
        <div className="SavedWords">
                        {userWords?.map((word: WordModel) => (
                                        <div className="save_words_lists_line" key={word.id}>
                                        <IconButton onClick={() => FavoriteToogle(word)} sx={{ p: 0, fontSize: '25px !important' }} >
                                                { word.favorite ? 
                                                  <AiFillStar style={{ color : 'var(--color-dark)'}} />
                                                  : 
                                                  <AiOutlineStar style={{ color : 'var(--color-dark)'}} />
                                                }
                                            </IconButton>
                                            
                                        <div className="translate_saved_word">
                                            <p>{word.hebrewWord}</p>
                                            <span className="arrow_right"><BsArrowRight/></span>
                                            <p>{word.englishWord}</p>
                                        </div>
                                    </div>
                        ))}
                        
        </div>
    );
}

export default SavedWords;
