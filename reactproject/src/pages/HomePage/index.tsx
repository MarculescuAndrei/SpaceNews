import React, { useContext, useState, useEffect } from "react";
import LoginedNav from "../../layout/loginedNav";
import Nav from "../../layout/Nav";
import {
  UserContext,
  LoginedUserContext,
  isAuthContext,
} from "../../logic/UserContext";
import axios from "axios";
import NoteInput from "../../redux/noteInput";
import { useDispatch, useSelector } from "react-redux";
import { NoteState } from "../../redux/noteReducer";
import { addNote } from "../../redux/actions";

export const HomePage = () => {
  const [articleNr, setArticleNr] = useState(4);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState({
    imageUrl: "",
    site: "",
    date: "",
    title: "",
    url: "",
  });
  const { isAuth, setIsAuth } = useContext(isAuthContext);
  console.log(isAuth);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles/1")
      .then((result) => {
        setNews({
          imageUrl: result.data.imageUrl,
          site: result.data.newsSite,
          date: result.data.publishedAt,
          title: result.data.title,
          url: result.data.url,
        });
        setLoading(false);
      });
  }, []);

  function getNews() {
    setLoading(true);
    setArticleNr(articleNr + 1);
    axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles/${articleNr}`)
      .then((result) => {
        setNews({
          imageUrl: result.data.imageUrl,
          site: result.data.newsSite,
          date: result.data.publishedAt,
          title: result.data.title,
          url: result.data.url,
        });
        setLoading(false);
      });
  }

  const notes = useSelector<NoteState, NoteState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
    console.log(notes);
  };

  if (isAuth) {
    return (
      <>
        <LoginedNav />
        <div className="center">
          <p>The Best Space News!</p>
          {loading ? (
            <h4>... Loading</h4>
          ) : (
            <div>
              <h2>{news.title}</h2>
              <h3>Published at {news.site}</h3>
              <img className="img" src={news.imageUrl}></img>
              <h4>
                Find more <a href={news.url}>here</a>
              </h4>
            </div>
          )}
          <button className="button-6" onClick={getNews} disabled={loading}>
            {" "}
            More News!
          </button>
          <hr className="hr"></hr>

          <NoteInput addNote={onAddNote} />
          {notes.map((note) => {
            return <h4 key={note}>{note}</h4>;
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="center">
        <p>Hello, this cannot be accessed!</p>
      </div>
    </>
  );
};

export default HomePage;
