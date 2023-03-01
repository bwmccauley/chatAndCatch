import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_SMILE } from '../../utils/mutations';
import { ADD_FROWN } from '../../utils/mutations';
import smile from "../../images/smiley.png"; 
import frown from "../../images/frown.png";

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  const [ addSmile, {error}] = useMutation(ADD_SMILE)
  const [ addFrown, ] = useMutation(ADD_FROWN)
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }
  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this thought on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p><a href="#" className="p-5" onClick={
                 async (event)=> {
                  event.preventDefault();
                  await addSmile({
                    variables: {thoughtId:thought._id}
                  })
window.location.reload()
                }
              }><img src={smile} width={25} height={25} display alt={"smile"}/>{thought.smile}</a>
              <a href="#" className="p-5" onClick={
                 async (event)=> {
                  event.preventDefault();
                  await addFrown({
                    variables: {thoughtId:thought._id}
                  })
window.location.reload()
                }
              }><img src={frown} width={25} height={25} alt={"frown"}/>{thought.frown}</a></p>
            </div>
            
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>

          
          
        ))}
    </div>
  );
};

export default ThoughtList;
