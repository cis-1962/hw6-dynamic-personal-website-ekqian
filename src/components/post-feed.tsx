import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostContents from './post-components/contents';
import PostForm from './post-components/form';
import { addPost, selectPosts } from '../features/post-slice';

// type Post = {
//   id: number;
//   title: string;
//   img: string;
//   desc: string;
// };

export default function Posts() {
  const [isEditing, setIsEditing] = useState(false);
  const posts = useSelector(selectPosts);
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Blog Posts
        <button
          className="btn btn-primary float-right"
          type="submit"
          onClick={() => setIsEditing(true)}
        >
          Add
        </button>
      </h1>

      {isEditing && (
        <PostForm
          titleProp=""
          imgProp=""
          descProp=""
          onSave={(title, img, desc) => {
            dispatch(addPost({ id, title, img, desc }));
            setIsEditing(false);
            setId(id + 1);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}

      <div className="row">
        {posts.map((post) => (
          <PostContents key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
