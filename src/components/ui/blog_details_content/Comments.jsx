// Import React Icons
import { FaUserAlt } from "react-icons/fa";

function Comments({ data }) {
  return (
    <div className="comments-section">
      <h4 className="title">Comments ({data.count})</h4>

      <div className="comments-content">
        {data.data.map((item) => {
          return (
            <div className="box" key={item.id}>
              <div className="img-box">
                <FaUserAlt className="icon" />
              </div>

              <div className="comment-details">
                <p className="name">
                  {item.name} <span className="date"> {item.date}</span>
                </p>

                <p className="comment">{item.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
