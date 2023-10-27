import { useState } from 'react';

type PostProps = {
  titleProp: string;
  imgProp: string;
  descProp: string;
  onSave: (title: string, image: string, description: string) => void;
  onCancel: () => void;
};

export default function PostForm({
  titleProp,
  imgProp,
  descProp,
  onSave,
  onCancel,
}: PostProps) {
  const [title, setTitle] = useState(titleProp);
  const [image, setImage] = useState(imgProp);
  const [description, setDescription] = useState(descProp);

  return (
    <div className="px-4 py-4 m-4 border-2 border-gray-800">
      <div className="form-group">
        <h3>Title</h3>
        <input
          className="form-control"
          placeholder="Enter Title"
          onChange={(evt) => setTitle(evt.target.value)}
          value={title}
        />
      </div>

      <div className="form-group">
        <h3>Image</h3>
        <input
          className="form-control"
          placeholder="Enter Image URL"
          onChange={(evt) => setImage(evt.target.value)}
          value={image}
        />
      </div>

      <div className="form-group">
        <h3>Description</h3>
        <input
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Descrption"
          onChange={(evt) => setDescription(evt.target.value)}
          value={description}
        />
      </div>

      <button
        className="px-4"
        type="button"
        onClick={() => onSave(title, image, description)}
      >
        Save
      </button>

      <button className="px-4" type="button" onClick={() => onCancel()}>
        Cancel
      </button>
    </div>
  );
}
