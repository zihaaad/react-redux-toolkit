import {useSelector} from "react-redux/es/hooks/useSelector";
import {selectAllUsers} from "../users/usersSlice";

const PostAuthor = ({userId}) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return <div>by {author ? author.name : "Unknown Author"}</div>;
};

export default PostAuthor;
