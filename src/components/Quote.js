import { useEffect, useState } from "react";
import { Loading } from "../App";
import "../assets/scss/components/Quote.scss";

export const Quote = () => {
  const [quoteContent, setQuoteContent] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getQuote() {
    setIsLoading(true);

    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();

      setQuoteAuthor(data.author);
      setQuoteContent(data.content);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    getQuote();
  }, []);

  return (
    <header className="quote-container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <p>{quoteContent}</p>
          <h5>{quoteAuthor}</h5>
        </>
      )}
    </header>
  );
};
