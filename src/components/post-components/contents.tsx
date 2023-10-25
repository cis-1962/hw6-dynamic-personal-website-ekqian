import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PostForm from './form';

import { modifyPost, removePost } from '../../features/post-slice';

type PostProps = {
  id: number;
  title: string;
  img: string;
  desc: string;
};

export default function PostContents({ id, title, img, desc }: PostProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      {!isEditing && (
        <div>
          <h1>
            Post {id} {title}
          </h1>
          <h1>{img}</h1>
          <h1>{desc}</h1>

          <button
            className="btn btn-success"
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}

      {isEditing && (
        <div>
          <div>
            <PostForm
              titleProp={title}
              imgProp={img}
              descProp={desc}
              onSave={(titleInput, imgInput, descInput) => {
                dispatch(modifyPost({ id, titleInput, imgInput, descInput }));
                setIsEditing(false);
              }}
              onCancel={() => setIsEditing(false)}
            />
          </div>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => dispatch(removePost(id))}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
