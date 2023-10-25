import { useState } from 'react';
import IntroContents from './intro-components/contents';
import IntroForm from './intro-components/form';

export default function Introduction() {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1>Welcome to My Website!</h1>

      {!isEditing && (
        <div>
          <button type="submit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <IntroContents img={image} desc={description} />
        </div>
      )}

      {isEditing && (
        <IntroForm
          img={image}
          desc={description}
          onSave={(img, desc) => {
            setImage(img);
            setDescription(desc);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}
