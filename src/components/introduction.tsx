import { useState } from 'react';
import IntroContents from './intro-components/contents';
import IntroForm from './intro-components/form';

export default function Introduction() {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1 className="px-4 py-2 mb-4 font-bold text-green-700">
        Welcome to My Website!
      </h1>

      {!isEditing && (
        <div>
          <button
            className="py-2.5 px-4 my-2 block bg-indigo-600 text-white text-xs font-medium text-center md:mb-0 md:ml-8 rounded-md"
            type="submit"
            onClick={() => setIsEditing(true)}
          >
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
