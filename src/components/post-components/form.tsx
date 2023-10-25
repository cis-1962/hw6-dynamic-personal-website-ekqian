import { useState } from 'react';

type PostProps = {
  id: number;
  titleInput: string;
  img: string;
  desc: string;
  onSave: (id: number, title: string, img: string, desc: string) => void;
  onCancel: () => void;
};

export default function PostForm({
  id,
  titleInput,
  img,
  desc,
  onSave,
  onCancel,
}: PostProps) {
  const [title, setTitle] = useState(titleInput);
  const [image, setImg] = useState(img);
  const [description, setDescription] = useState(desc);

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
          onChange={(evt) => setImg(evt.target.value)}
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
        onClick={() => onSave(id, title, image, description)}
      >
        Save
      </button>

      <button className="btn btn-info" type="button" onClick={() => onCancel()}>
        Cancel
      </button>
    </>
  );
}
