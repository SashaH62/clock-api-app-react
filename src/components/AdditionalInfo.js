import { Container } from "./Container";
import { InfoCard } from "./InfoCard";

export const AdditionalInfo = ({ timezone, dayOfYear, dayOfWeek, weekNumber, backgroundClass }) => {
    return (
    <Container
      containerClass={`additional-info-window container--secondary ${backgroundClass}`}
    >
      <div className="col">
        <InfoCard heading={"Current Timezone"} value={timezone} />
        <InfoCard heading={"Day of the year"} value={dayOfYear} />
      </div>
      <div className="col">
        <InfoCard heading={"Day of the week"} value={dayOfWeek} />
        <InfoCard heading={"Week number"} value={weekNumber} />
      </div>
    </Container>
  );
};
