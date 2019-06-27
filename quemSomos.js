	var quemSomos = document.querySelector('.quemSomos')
	quemSomos.setAttribute( 'onmouseenter' , 'mostrar()' )
	var div = document.createElement('div')
function mostrar(){
	var body = document.querySelector('body')
	div.setAttribute( 'class' , 'information' )
	div.innerHTML = '<span style="font-size: 22px; font-weigth: bold;">F</span>ala, tudo certo!Então hoje eu só quero te contar uma novidade muito bacana. Estava conversando na semana passada com meu amigo Alex Vargas, ele é um empreendedor digital em série e tem mais de 40 projetos online. <br> Só que o melhor é que ele desenvolveu um sistema a prova de falhas e que já vem aprimorando a mais de 4 anos, pra criar esses projetos de forma extremamente rápida.Com esse sistema, que na verdade é um método em passos simples, mas que devem ser aplicados na ordem certa é possível criar vários projetos online de forma muito rápida, progressiva e altamente lucrativa. <br><br><span style="font-size:22px; font-weigth: bold;">E</span> esse sistema ele compilou tudo em um Super Treinamento que chamou de Formula Negocio Online. Eu já tive acesso ao <a href="https://go.hotmart.com/F6826913V">treinamento</a> e desde a semana passada quase não estou dormindo de tão alucinado com a quantidade de informações.Eu já estou aprendendo e já estou colocando em prática, lembrei de você, eu tenho certeza que você vai ficar fascinado, garanto!De uma olhada, <a href="https://go.hotmart.com/F6826913V">clique neste link</a>. O Treinamento é totalmente em vídeo aulas, com mais de 200 vídeos, mais de 50 horas no total de pura informação de qualidade no modelo de passo a passo, é impossível errar.<br><br><span style="font-size: 22px; font-weigth:bold; position:relative; marign:2px;">A</span>lém disso, tem muito material extra, como: Mapas Mentais, Checklists, Exercícios, Fluxogramas, Ferramentas Para os Membros, Várias Bônus Fantásticos.E ainda uma galera muito bacana que faz parte dos alunos e esta aprendo e trocando idéias, e ainda o próprio Alex Vargas, esta sempre pronto pra responder todas as duvidas. PS: Conselho de amigo, não perca isso, <a href="https://go.hotmart.com/F6826913V">clique aqui agora mesmo</a>. Até mais, Um abraço!.'

	div.style.fontStyle = 'italic'
	div.style.fontSize = '18px'
	div.style.borderRadius = '20px'
	div.style.background = 'white'
	div.style.padding = '12px'
	div.style.width = '700px'
	div.style.height = '480px'
	div.style.position = 'relative'
	div.style.margin = 'auto'
	div.style.top = '40px'
	body.appendChild(div)
	var interval = setInterval(limpar, 40000)
}

		

	
function limpar(){
	var div = document.querySelector('.information')
	div.parentNode.removeChild(div)
}