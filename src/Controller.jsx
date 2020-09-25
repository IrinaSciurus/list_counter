import React from 'react';

function Controller(props) {
	const { count, addCounter, resetAll, deleteAll, inputHandler, value } = props;
	// <InputBox value={step} updateSteps={(e) => this.updateSteps(e)} />

	return (
		<div>
			<input type="text" onChange={inputHandler} value={value} />
			<br />
			<button type="button" className="btn" onClick={addCounter} disabled={count.length > 9}>Add Counter</button>
			<button type="button" className="btn" onClick={resetAll}>Reset all</button>
			<button type="button" className="btn" onClick={deleteAll}>Delete all</button>
		</div>
	)
}
export default Controller;