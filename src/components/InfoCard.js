
export const InfoCard = ({ heading, value }) => {
  return (
    <div className="info-card">
      <h5>{heading}</h5>
      <h2>{value}</h2>
    </div>
  );
};
