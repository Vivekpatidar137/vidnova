import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    comments &&
    comments.map((comment) => (
      <div>
        <Comment data={comment} />
        <div className="ml-6 pl-4 border-l-2 border-gray-300 mt-2">
          <CommentsList comments={comment.reply} />
        </div>
      </div>
    ))
  );
};

export default CommentsList;
