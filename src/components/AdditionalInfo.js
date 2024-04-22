import { Container } from "./Container";
import { InfoCard } from "./InfoCard";

export const AdditionalInfo = ({ backgroundClass }) => {
  return (
    <Container
      containerClass={`additional-info-window container--secondary ${backgroundClass}`}
    >
      <div className="col">
        <InfoCard heading={"Current Timezone"} value={"Europe/London"} />
        <InfoCard heading={"Day of the year"} value={"295"} />
      </div>
      <div className="col">
        <InfoCard heading={"Day of the week"} value={"5"} />
        <InfoCard heading={"Week number"} value={"42"} />
      </div>
    </Container>
  );
};
