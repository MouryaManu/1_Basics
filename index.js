function getmood() {
    const moods= ['happy','sad','hungry', 'depressed','excited','sleepy'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
                <h1> My current mood is: {getmood() }</h1>
				{/* <h1>Hello there!</h1>
				<h1>Hello there!</h1> */}
			</div>
            // React.createElement("h1", null, "Hellooo")
		);
	}
}

// function Hello() {
//     return (
//         <div>
//            <h1>Hello There!!</h1>
//            <h1>Hello There!!</h1>
//            <h1>Hello There!!</h1>
//         </div>
//     );
// }

ReactDOM.render(<Hello />, document.getElementById('root'));
