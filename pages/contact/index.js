import ContactList from "../../data/contact/con.json"

export default function Contact() {
    return (
        <div className="bors-members" id="contact">
            <h1>Contact</h1>
            <div className="bors-members-list">
                {ContactList.map((a) => (
                    <Card {...a} key={a.title} />
                ))}
            </div>
        </div>
    );
}

function Card(props) {
    return (
        <div className="bors-members-card">
            <span>{props.title}</span>
            <span>{props.name}</span>
            <span>{props.phone}</span>
            <span>{props.email}</span>
        </div>
    );
}
