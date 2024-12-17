const Comment = ({ data }) => {
  return (
    <div className="flex items-start gap-3 p-3 bg-gray-100 rounded-lg shadow-sm mt-2">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={data.userIcon}
        alt="user-icon"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-gray-800">{data.name}</p>
        <p className="text-sm text-gray-600 mt-1">{data.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
