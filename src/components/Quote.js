import { useEffect, useRef, useState } from "react";
import { Loading } from "../App";
import "../assets/scss/components/Quote.scss";

export const Quote = () => {
  const quoteContent = useRef('')
  const quoteAuthor = useRef('')
  const [isLoading, setIsLoading] = useState(false);

  async function getQuote() {
    setIsLoading(true);

    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();

      quoteAuthor.current = data.author;
      quoteContent.current = data.content;
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
          <p>“{quoteContent.current}”</p>
          <h5>{quoteAuthor.current}</h5>
        </>
      )}
    </header>
  );
};
