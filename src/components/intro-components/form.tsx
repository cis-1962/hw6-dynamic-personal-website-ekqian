import { useState } from 'react';

type IntroProps = {
  img: string;
  desc: string;
  onSave: (img: string, desc: string) => void;
  onCancel: () => void;
};

export default function IntroForm({ img, desc, onSave, onCancel }: IntroProps) {
  const [image, setImage] = useState(img);
  const [description, setDescription] = useState(desc);

  return (
    <div>
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={(evt) => setImage(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
      />

      <button type="submit" onClick={() => onSave(image, description)}>
        Save
      </button>

      <button type="button" onClick={() => onCancel()}>
        Cancel
      </button>
    </div>
  );
}
