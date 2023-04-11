import "./SavedWords.css";
import { IconButton } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { WordModel } from "../../../../../Models/WordModel";

function SavedWords({ userWords }: { userWords: WordModel[] }): JSX.Element {
    // const [isSaved, setIsSaved] = useState<boolean>(true);

    function FavoriteToogle(word: WordModel) {
        if(word.favorite) {

            //function to unfavorite

        } else {

            // function to favorite

        }
    }
    return (
        <div className="SavedWords">
			           {/* <div> */}
                        {userWords?.map((word: WordModel) => (
                                        <div className="save_words_lists_line">
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
