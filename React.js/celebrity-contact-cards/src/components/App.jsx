import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function createCard(contactTerm) {
	return (
		<Card
			key={contactTerm.id}
			name={contactTerm.name}
			imgURL={contactTerm.imgURL}
			phone={contactTerm.phone}
			email={contactTerm.email}
		/>
	);
}

function App() {
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			{Contacts.map(createCard)}
		</div>
	);
}

export default App;
