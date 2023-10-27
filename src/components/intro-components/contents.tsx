type IntroProps = {
  img: string;
  desc: string;
};

export default function IntroContents({ img, desc }: IntroProps) {
  return (
    <div className="px-4 py-4 mb-4">
      {img && <img className="img-fluid" src={img} alt="intro" />}
      <h1>{desc}</h1>
    </div>
  );
}
