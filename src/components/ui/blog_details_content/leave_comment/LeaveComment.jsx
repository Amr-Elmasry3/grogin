// Import Components
import LeaveCommentUi from "./LeaveCommentUi";

// Import Custom Hooks
import { useCheckLogin } from "../../../../hooks/useCheckLogin";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Blogs Slice Reducers
import { addComment, setInStorage } from "../../../../features/blogsSlice";

// Import Toastify Slice Reducers
import {
  setMessage,
  setType,
  notify,
} from "../../../../features/toastifySlice";

function LeaveComment() {
  const { isLogin, checkLogin } = useCheckLogin();

  const commentId = useSelector((store) => {
    return store.blogs.idNow;
  });

  const dispatch = useDispatch();

  const handleAddComment = (name, comment) => {
    dispatch(addComment({ name, comment, commentId }));
    dispatch(setInStorage());

    dispatch(setMessage("Comment added successfully"));
    dispatch(setType("success"));
    dispatch(notify());
  };

  return (
    <LeaveCommentUi
      isLogin={isLogin}
      checkLogin={checkLogin}
      handleAddComment={handleAddComment}
    />
  );
}

export default LeaveComment;
