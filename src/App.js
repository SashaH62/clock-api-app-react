import { useEffect, useRef, useState } from "react";
import { useTimeZone } from "./effects/useTimeZone";
import { useLocation } from "./effects/useLocation";
import { Quote } from "./components/Quote";
import { Clock } from "./components/Clock";
import { Container } from "./components/Container";
import { Location } from "./components/Location";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Button } from "./components/Button";
import Arrow from "./assets/img/desktop/icon-arrow-up.svg";
import "./assets/scss/index.scss";

function App() {
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [localTime, setLocalTime] = useState("23:14");
  const [isExpanded, setIsExpanded] = useState(false);

  const timeObj = useRef({});

  const { isLoading, error, setIsLoading, getTime } = useTimeZone();
  const { timezone, fetchLocationData } = useLocation();

  function handleExpand() {
    setIsExpanded((prev) => !prev);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchLocationData();
    const intervalId = setInterval(function () {
      getTime(timezone, setTimeOfDay, setLocalTime, timeObj);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <div className={`App ${timeOfDay}`}>
      <Container containerClass={"container--primary"}>
        {!isExpanded && <Quote />}
        <Clock
          time={localTime}
          timeZone={timeObj.current.timeZoneAbbr}
          isLoading={isLoading}
          error={error}
          timeOfDay={timeOfDay}
        >
          <Location />
        </Clock>
        <Button clickHandler={handleExpand} btnClass={`primary ${isExpanded ? 'btn--expanded' : ''}`}>
          {isExpanded ? "Less" : "More"}
          <img src={Arrow} alt="Arrow Icon" />
        </Button>
      </Container>
      {isExpanded && (
        <AdditionalInfo
          timezone={timezone}
          dayOfYear={timeObj.current.dayOfYear}
          dayOfWeek={timeObj.current.dayOfWeek}
          weekNumber={timeObj.current.weekOfYear}
          backgroundClass={timeOfDay}
        />
      )}
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
