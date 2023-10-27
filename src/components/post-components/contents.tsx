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
        <div className="px-4 py-4 m-4 border-2 border-gray-800">
          <h3>
            Post {id} {title}
          </h3>
          {img && <img className="img-fluid" src={img} alt="intro" />}
          <h3>{desc}</h3>

          <button type="button" onClick={() => setIsEditing(true)}>
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
              onSave={(titleInput, image, description) => {
                dispatch(
                  modifyPost({
                    id,
                    title: titleInput,
                    img: image,
                    desc: description,
                  }),
                );
                setIsEditing(false);
              }}
              onCancel={() => setIsEditing(false)}
            />
          </div>
          <button
            className="py-2.5 px-4 my-2 block bg-red-600 text-white text-xs font-medium text-center md:mb-0 md:ml-8 rounded-md"
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
