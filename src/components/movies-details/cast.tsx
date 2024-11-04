import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../api";

interface CastMember {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

const Cast: React.FC = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    const loadCast = async () => {
      if (movieId) {
        const castData = await fetchMovieCredits(movieId);
        setCast(castData);
      }
    };
    loadCast();
  }, [movieId]);

  return (
    <div>
      {cast.map((member) => (
        <div key={member.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
            alt={member.name}
          />
          <p>
            {member.name} as {member.character}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
