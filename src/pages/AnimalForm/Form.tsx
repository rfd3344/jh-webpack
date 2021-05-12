import React from 'react';
import YourDetails from './YourDetails';
import YourAnimal from './YourAnimal';

export default function Home() {
	return (
		<section>
			<form>
				<YourDetails />
				<YourAnimal />
				<input type="submit" value="Create Account" />
			</form>
		</section>
	);
}