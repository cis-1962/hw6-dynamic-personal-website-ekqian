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
      <h1 className="px-4 py-2 mb-4 font-bold text-green-700">Blog Posts</h1>
      <button
        className="py-2.5 px-4 my-2 block bg-indigo-600 text-white text-xs font-medium text-center md:mb-0 md:ml-8 rounded-md"
        type="submit"
        onClick={() => setIsEditing(true)}
      >
        Add
      </button>

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

      <div className="flex align-center">
        {posts.map((post) => (
          <PostContents key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
