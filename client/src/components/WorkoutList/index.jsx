import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = ({ workouts, title, showTitle = true }) => {
  if (!workouts?.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {workouts &&
        workouts.map((workout) => (
          <div key={workout._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              <Link
                className="text-light"
                to={`/workouts/${workout._id}`}
              >
                {workout.name} <br />
                <span style={{ fontSize: '1rem' }}>
                  on {workout.date}
                </span>
              </Link>
            </h4>
            <div className="card-body bg-light p-2">
              <p>Duration: {workout.duration} minutes</p>
              <div>
                <h5>Exercises:</h5>
                <ul>
                  {workout.exercises.map((exercise) => (
                    <li key={exercise._id}>
                      {exercise.name} - {exercise.sets} sets of {exercise.reps} reps {exercise.weight && `with ${exercise.weight} lbs`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/workouts/${workout._id}`}
            >
              View Workout Details
            </Link>
          </div>
        ))}
    </div>
  );
};

export default WorkoutList;