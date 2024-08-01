import { useState, ChangeEvent, FormEvent } from "react";
import MoveCard from "./MoveCard";
import { MovieCardData } from "../interfaces";

const AddMovie = () => {
  const [formData, setFormData] = useState<MovieCardData>({
    title: "",
    rating: 0,
    gener: "",
    description: "",
  });

  const [moviesList, setMoviesList] = useState<MovieCardData[]>([]);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMoviesList((prev) => {
      return [...prev, formData];
    });
    setFormData({
      title: "",
      rating: 0,
      gener: "",
      description: "",
    });
  };

  const handleClearData = () => {
    setFormData({
      title: "",
      rating: 0,
      gener: "",
      description: "",
    });
  };

  return (
    <div className="mainDiv">
      <form className="addForm" onSubmit={handleOnSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            required
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="range"
            name="rating"
            value={formData.rating}
            required
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Gener</label>
          <select name="gener" value={formData.gener} onChange={handleOnChange}>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div>
          <label>Description</label>
          <textarea
            rows={5}
            name="description"
            value={formData.description}
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="buttonDiv">
          <button type="button" onClick={handleClearData}>
            Clear
          </button>
          <button type="submit">Add</button>
        </div>
      </form>
      <section className="cardSection">
        {moviesList.map((movie, i) => (
          <MoveCard
            key={i}
            title={movie.title}
            gener={movie.gener}
            description={movie.description}
            rating={movie.rating}
          />
        ))}
      </section>
    </div>
  );
};

export default AddMovie;
