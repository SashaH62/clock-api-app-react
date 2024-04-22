import { useEffect, useState } from "react";
import { useTimeZone} from './effects/useTimeZone'
import "./assets/scss/index.scss";
import { Quote } from "./components/Quote";
import { Clock } from "./components/Clock";
import { Container } from "./components/Container";
import { Location } from "./components/Location";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Button } from "./components/Button";
import Arrow from './assets/img/desktop/icon-arrow-down.svg';

function App() {
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [localTime, setLocalTime] = useState("23:14");
  const [localTimeZone, setLocalTimeZone] = useState("BST");
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpand() {
    setIsExpanded((prev) => !prev);
  }

  const {isLoading, error, setIsLoading, getTime} = useTimeZone();

  useEffect(() => {
    setIsLoading(true);
    const intervalId = setInterval(function () {
      getTime(setTimeOfDay, setLocalTime, setLocalTimeZone);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`App ${timeOfDay}`}>
      <Container containerClass={"container--primary"}>
        {!isExpanded && <Quote />}
        <Clock
          time={localTime}
          timeZone={localTimeZone}
          isLoading={isLoading}
          error={error}
          timeOfDay={timeOfDay}
        >
          <Location />
        </Clock>
        <Button clickHandler={handleExpand} btnClass={'primary'}>
          {isExpanded ? "Less" : "More"}
          <img src={Arrow} alt='Arrow Icon' />
        </Button>
      </Container>
      {isExpanded && <AdditionalInfo backgroundClass={timeOfDay} />}
    </div>
  );
}

export default App;

export const Error = ({ error }) => {
  return <p>{error}</p>;
};

export const Loading = () => {
  return <h3>Loading...</h3>;
};


