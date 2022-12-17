import Boardmembers from "../../data/research/research-board-members.json";

export default function Members() {
  return (
    <div className="bors-members" id="bors">
      <h1>BORS Members</h1>
      <div className="bors-members-list">
        {Boardmembers.map((a) => (
          <Card {...a} key={a.id} />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="bors-members-card">
      <span>{props.name}</span>
      <span>{props.post}</span>
      <span>{props.grade}</span>
      <span>{props.institue}</span>
      <span>{props.category}</span>
    </div>
  );
}
