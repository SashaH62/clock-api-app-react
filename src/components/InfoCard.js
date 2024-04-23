import '../assets/scss/components/InfoCard.scss';

export const InfoCard = ({ heading, value }) => {
  return (
    <div className="info-card">
      <h6>{heading}</h6>
      <h2>{value}</h2>
    </div>
  );
};
