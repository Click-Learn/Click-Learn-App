import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./BlogArticle3.css";

function BlogArticle3(): JSX.Element {
  return (
    <div className="BlogArticle3">
      <div className="blog_container">
        <div className="">
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/">
              דף הבית
            </Link>
            <Link color="inherit" to={"/blog"}>
              בלוג
            </Link>
            <Typography color="text.primary"> הכתבה הנוכחית</Typography>
          </Breadcrumbs>
        </div>
        <div>
          <h1> למידת אנגלית באינטרנט: הפתרון הנוח לדוברי עברית עסוקים</h1>
        </div>
        <div>
          <h3>
            במאמר זה נדבר על היתרונות הרבים של למידת אנגלית באמצעות האתר שלנו,
            כולל לוח זמנים גמיש, מסלולי למידה מותאמים אישית, וגישה לדוברי אנגלית
            שוטפים.
          </h3>
        </div>
        <div className="img_top_article">
          <img
            src="https://img.freepik.com/free-photo/student-online-cute-young-guy-studying-computer-glasses-green-shirt-with-cup-happy_140725-164742.jpg?w=1380&t=st=1682160589~exp=1682161189~hmac=78f0d50a436463f6bed2edfc75df284cb14ae208566e3846fab16c14dbe1351f"
            alt=""
          />
        </div>
        <div>
          <p className="article_p">
            1. לוח זמנים גמיש: אחד מהיתרונות המרכזיים של למידה באינטרנט הוא
            היכולת ללמוד בזמנים נוחים לכם. האתר שלנו מאפשר לכם לבחור מתי ואיך
            ללמוד, מבלי להתחייב לשיעורים בזמנים קבועים. זה מאפשר לכם להתאים את
            הלמידה ללוז העמוס שלכם.
          </p>
          <p className="article_p">
            2. מסלולי למידה מותאמים אישית: האתר שלנו מספק מסלולי למידה המותאמים
            לרמת הידע ולצרכים הייחודיים של כל דובר עברית. זה אומר שתוכלו להתקדם
            בקצב המתאים לכם ולהתמקד בתחומים בהם אתם מרגישים שצריך לשפר.
          </p>
          <p className="article_p">
            3. גישה לדוברי אנגלית שוטפים: האתר שלנו מציע גישה לדוברים שוטפים
            שיכולים לעזור לכם לשפר את ההבנה, ביטוי, ולהתייעץ על נושאים קשים. זה
            מבטיח שתוכלו ללמוד את השפה באופן איכותי ויעיל.
          </p>
          <p className="article_p">
            4. מגוון אופציות ללמידה: האתר שלנו מציע מגוון רחב של תוכן למידה,
            כולל מבחני מילון, מקרי שימוש, ומשחקים לימודיים. זה מפתח את התחושה של
            הרפתקה ותרגול, ומסייע ללמוד בצורה יעילה ומהנה.
          </p>
          <p className="article_p">
            5. חיסכון בזמן וכסף: למידה באינטרנט מאפשרת לכם לחסוך זמן וכסף, מבלי
            להצטרך לצאת מהבית ולפגוש מורים אישית. בנוסף, אתם יכולים למצוא את
            המורים הטובים ביותר מכל רחבי העולם, ולקבל את הלמידה הטובה ביותר
            מהמורים המומחים.
          </p>
        </div>
        <div>
          <p className="article_p">
            בסופו של דבר, למידה באינטרנט היא פתרון מעולה לדוברי עברית עסוקים
            שמחפשים דרך נוחה ויעילה ללמוד אנגלית. באמצעות האתר שלנו, תוכלו למצוא
            את המסלול המתאים לצרכים שלכם, לקבל מתן עזר מדוברי אנגלית שוטפים,
            וללמוד בזמן ובמקום המתאימים לכם.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogArticle3;
