import "../assets/scss/components/Clock.scss";
import { Loading, Error } from "../App";
import  DayIcon  from '../assets/img/desktop/icon-sun.svg';
import  NightIcon  from '../assets/img/desktop/icon-moon.svg';

export const Clock = ({ time, timeZone, timeOfDay, isLoading, error, children }) => {
  return (
    <main className="clock-container">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <h4><img src={timeOfDay === 'morning' ? DayIcon : NightIcon} alt={`${timeOfDay} icon`}/>Good Evening, It's Currently</h4>
          <h1>
            {time}
            <span className="timezone">{timeZone}</span>
          </h1>
          {children}
        </>
      )}
    </main>
  );
};
