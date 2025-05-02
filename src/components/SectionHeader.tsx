import "./SectionHeader.css";

interface Prop {
  title: string;
  id: string;
}

function SectionHeader({ title, id }: Prop) {
  return (
    <div id={id}>
      <br />
      <br />
      <h2>{title}</h2>
      <hr className="title-divider" />
    </div>
  );
}

export default SectionHeader;
