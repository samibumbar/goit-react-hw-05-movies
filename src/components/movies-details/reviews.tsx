import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../api";

interface Review {
  id: string;
  author: string;
  content: string;
}

const Reviews: React.FC = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const loadReviews = async () => {
      if (movieId) {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData);
      }
    };
    loadReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
