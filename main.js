document.addEventListener('readystatechange', () => {
	initLinks();

	const app = document.getElementById('app');
	app.innerHTML = `
		<h1>Waiting...</h1>
	`;

	setTimeout(() => {
		navigate(window.location.pathname);
	}, 1000);
});