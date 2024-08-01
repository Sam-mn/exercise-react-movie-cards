import { MovieCardData } from "../interfaces";

const MoveCard = ({ title, rating, gener, description }: MovieCardData) => {
  return (
    <div className="card">
      <div>
        <h3 className="title">{title}</h3>
        <h3 className="rating">{rating}/100</h3>
      </div>
      <p className="gener">{gener}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default MoveCard;
