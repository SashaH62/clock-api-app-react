import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loading, Error } from "../App";
import { Button } from "../components/Button";
import "../assets/scss/components/Quote.scss";
import RefreshIcon from "../assets/img/desktop/icon-refresh.svg";

export const Quote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const quoteContent = useRef("");
  const quoteAuthor = useRef("");

  async function getQuote() {
    setIsLoading(true);

    try {
      const res = await fetch("https://api.quotable.io/random");

      if (!res.ok)
        throw new Error("Something went wrong with fetching the quote.");

      const data = await res.json();

      quoteAuthor.current = data.author;
      quoteContent.current = data.content;
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset() {
    getQuote();
  }

  useEffect(function () {
    getQuote();
  }, []);

  return (
    <header className="quote-container">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="motion-container--quote"
            >
              <p>“{quoteContent.current}”</p>
              <h5>{quoteAuthor.current}</h5>
            </motion.div>
          </AnimatePresence>
          <Button clickHandler={handleReset}>
            <img src={RefreshIcon} alt="refresh" />
          </Button>
        </>
      )}
    </header>
  );
};
