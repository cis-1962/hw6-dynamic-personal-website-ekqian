type IntroProps = {
  img: string;
  desc: string;
};

export default function IntroContents({ img, desc }: IntroProps) {
  return (
    <div>
      <h1>{img}</h1>
      <h1>{desc}</h1>
    </div>
  );
}
