import { Chip, IconButton, Slider } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { WordModel } from "../../../../../Models/WordModel";
import { servicesFunctions } from "../../../../../Services/ServicesFunctions";
import "./AllWords.css";
import SavedWords from "../SavedWords/SavedWords";
import DownloadWordsCSV from "./DownloadWordsCSV/DownloadWordsCSV";
import { createTheme } from "@mui/material/styles";

function AllWords(): JSX.Element {
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [userWords, setUserWords] = useState<WordModel[]>([]);
    const [userFilteredWords, setUserFilteredWords] = useState<WordModel[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    const isLogin = useSelector((state: any) => state.authSlice);
    const [favoriteFilter, setFavorieFilter] = useState<boolean>(false);
    const [unFavoriteFilter, setUnFavorieFilter] = useState<boolean>(false);
    const saveWordsListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setIsAnimating(true);
      if (isLogin) {
        servicesFunctions
          .getAllWordByUser()
          .then((words: WordModel[] | undefined) => {
            if (words) {
              setUserWords(words);
              setUserFilteredWords(words);

              setTimeout(() => {
                setIsAnimating(false);
              }, 2000);
            }
          });
      } else {
        console.log("not logged");
      }
    }, [refresh, isLogin]);
 
    function filterWords(search: string) {
        const searchWords: WordModel[] = userWords.filter((word: WordModel) => {
          return word.englishWord.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || word.hebrewWord.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });
      
        if (favoriteFilter && !unFavoriteFilter) {
          setUserFilteredWords(searchWords.filter(word => word.favorite));
        } else if (unFavoriteFilter && !favoriteFilter) {
          setUserFilteredWords(searchWords.filter(word => !word.favorite));
        } else {
          setUserFilteredWords(searchWords);
        }
      }
      

      useEffect(() => {
        filterWords("");
      }, [favoriteFilter, unFavoriteFilter]);


    const theme = createTheme({
    palette: {
        success: {
        main: "#2ccd85",
        },
    },
    });



    return (
      <div className="AllWords">
        <div className="csv_container">
          <DownloadWordsCSV userFilteredWords={userFilteredWords} />
        </div>
        <div className="filter_container">

      
        <div className="search_text_container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
            alt=""
          />
          <input
            className="text_search_words"
            placeholder="חפש בעברית או אנגלית"
            type="text"
            onChange={(e) => filterWords(e.target.value)}
          />
        </div>

      <div className="filters">

        <div>

        {favoriteFilter ? (
                        <Chip
            label="פילטור לפי מילים מועדפות"
            sx={{ width: "230px", height: "51px", fontSize: "15px", }}
            onClick={() => setFavorieFilter(!favoriteFilter)}
            color="success"
            style={{ backgroundColor: theme.palette.success.main }}
            icon={
                <AiFillStar
                style={{ borderRadius: "20px", fontSize: "20px", color: "white" }}
                />
            }
            />
        ) : (
            <Chip
            label="פילטור לפי מילים מועדפות"
            sx={{ width: "230px", height: "51px", fontSize: "15px", }}
            onClick={() => setFavorieFilter(!favoriteFilter)}
            color="success"
            style={{ color: theme.palette.success.main, backgroundColor: "transparent", border: `1px solid ${theme.palette.success.main}` }}
            icon={
                <AiFillStar
                style={{ borderRadius: "20px", fontSize: "20px", color: theme.palette.success.main }}
                />
            }
            />
        )}
        </div>

            <div>


        {unFavoriteFilter ? (
          <Chip
          label="פילטור לפי מילים לא מועדפות"
          sx={{width: "230px", height: "51px", fontSize: "15px"}}
          onClick={() => setUnFavorieFilter(!unFavoriteFilter)}
          color="secondary"
          style={{ backgroundColor: `${theme.palette.success.main} `, outline: `1px solid ${theme.palette.success.main}` }}
          icon={<AiOutlineStar style={{ borderRadius: "20px", fontSize: "20px", color: "white" }}          />}
        />
        ) : (

          <Chip
          variant="outlined"
          label="פילטור לפי מילים לא מועדפות"
          sx={{width: "230px", height: "51px", fontSize: "15px"}}
          onClick={() => setUnFavorieFilter(!unFavoriteFilter)}
          color="secondary"
          style={{ color: theme.palette.success.main, backgroundColor: "transparent", border: `1px solid ${theme.palette.success.main}` }}
          icon={<AiOutlineStar style={{ borderRadius: "20px", fontSize: "20px", color: theme.palette.success.main }}          />}
        />
        )}
            </div>

      </div>
            
        </div>

        <div
          className={`save_words_list_container${
            isAnimating ? " animating" : ""
          }`}
          ref={saveWordsListRef}
        >
          {userFilteredWords.length === 0 && userWords.length > 0 && (
            <div className="words_not_found">לא נמצאו מילים לפי החיפוש</div>
          )}

          <SavedWords
            userWords={userFilteredWords}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </div>
      </div>
    );
}

export default AllWords;
