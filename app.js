let amigos = [];

function adicionarAmigo() {
	const amigo = document.getElementById("amigo").value;
	amigos.push(amigo);
	atualizarLista();
}

function atualizarLista() {
	let listaAmigos = document.getElementById("listaAmigos");
	listaAmigos.innerHTML = "";
	amigos.map((amigo) => {
		listaAmigos.innerHTML += `<li>${amigo}</li>`;
	});
}

function sortearAmigo() {
	let resultado = document.getElementById("resultado");
	const indexSorteado = Math.floor(Math.random() * amigos.length);
	const sorteado = amigos[indexSorteado];
	resultado.innerHTML = `<li>${sorteado}</li>`;
}
