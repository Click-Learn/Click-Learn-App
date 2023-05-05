import { WordModel } from "../../../../../../Models/WordModel";
import "./DownloadWordsCSV.css";
import { FaFileExport } from "react-icons/fa";

function DownloadWordsCSV( { userFilteredWords }: { userFilteredWords : WordModel[]}): JSX.Element {
    function downloadWords() {
        const csvContent =
          "data:text/csv;charset=utf-8," +
          "מילה,תרגום,מילה מועדפת\n" +
          userFilteredWords
            .map(
              (word) =>
                `${word.hebrewWord},${word.englishWord},${
                  word.favorite ? "כן" : "לא"
                }`
            )
            .join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "my_words.csv");
        document.body.appendChild(link);
        link.click();
      }
      

    return (
      <div className="DownloadWordsCSV">
        <button className="export-button" onClick={downloadWords}>
          <span className="icon"><FaFileExport/></span>
        <p> ייצוא לאקסל </p>
        </button>
      </div>
    );
}

export default DownloadWordsCSV;
