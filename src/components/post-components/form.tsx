import { useState } from 'react';

type PostProps = {
  titleProp: string;
  imgProp: string;
  descProp: string;
  onSave: (title: string, img: string, desc: string) => void;
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
    <>
      <div className="form-group">
        <h1>Title</h1>
        <input
          className="form-control"
          placeholder="Enter the title of the post"
          onChange={(evt) => setTitle(evt.target.value)}
          value={title}
        />
      </div>

      <div className="form-group">
        <h1>Image</h1>
        <input
          className="form-control"
          placeholder="Enter image url"
          onChange={(evt) => setImage(evt.target.value)}
          value={image}
        />
      </div>

      <div className="form-group">
        <h1>Description</h1>
        <input
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Descrption"
          onChange={(evt) => setDescription(evt.target.value)}
          value={description}
        />
      </div>

      <button
        className="btn btn-success"
        type="button"
        onClick={() => onSave(title, image, description)}
      >
        Save
      </button>

      <button className="btn btn-info" type="button" onClick={() => onCancel()}>
        Cancel
      </button>
    </>
  );
}
