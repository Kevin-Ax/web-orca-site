import { ItemModel } from '../models/ItemModel'
import Items from '../constants/Items.json'

export const ItemConstants: ItemModel[] = Items.items.map((item) =>
  ItemModel.create(item.name, item.value, item.description)
)

/*
Contador de visitas 	
R$45,00 	Exibe a quantidade de visualizações do site.
Contador regressivo de dias 	
R$45,00 	Sistema que conta os dias, horas, minutos e segundos que estão faltando para determinado evento.
Contrate-nos 	
R$75,00 	Formulário que permite a contratação dos serviços da empresa.
Depoimentos 	
R$60,00 	Seção para exibição de depoimentos de clientes, com animação na transição
Downloads e Uploads 	
R$75,00 	Sistema que permite o download de arquivos do site.
E-commerce 	
R$3.000,00 	Sistema que permite o gerenciamento da venda on-line de produtos.
Enquete 	
R$45,00 	Permite que o administrador do site faça uma pergunta para que os usuários respondam.
Estatísticas do site (Analytics) 	
R$60,00 	Uso da ferramenta "Google Analytics", que permite a visualização de relatórios do número de acessos ao site, origem dos acessos, e erros em páginas.
Eventos 	
R$100,00 	Sistema que permite a postagem de eventos na forma de notícias, podendo dividi-los em áreas
Fale Conosco 	
R$75,00 	Formulário de contato que permite o envio de solicitações ou sugestões do site para uma ou mais contas de e-mail.
FAQ 	
R$45,00 	Permite aos usuários do site verificar algumas perguntas frequentes e suas respectivas respostas. É útil para tirar dúvida dos participantes.
Funções Extras 	
R$200,00 	Use esse campo para uma função que não se encontra no banco de dados NB.
Galeria de imagens 	
R$75,00 	Página do site que permite a postagem de fotos. As fotos podem ser organizadas por seções (álbuns).
Galeria de vídeos 	
R$75,00 	Página do site que permite a postagem de vídeos. Eles podem ser organizados por seções.
Google Maps 	
R$60,00 	Página que irá conter o endereço e o mapa gerado pelo Google Apps.
Indique nossos produtos/serviços 	
R$150,00 	Os usuários podem informar e-mails de seus amigos e o sistema enviará um convite para ver a página do serviço/produto.
Mapa do site 	
R$60,00 	Exibe a representação hierárquica da estrutura do site.
MEJ (Informações sobre o MEJ) 	
R$45,00 	Página que contém informações sobre o Movimento Empresa Júnior.
Membros da empresa 	
R$75,00 	Página que exibe os membros da empresa, podendo separá-los por área de atuação e/ou cargo.
Mídias sociais 	
R$75,00 	Faz a conexão entre o Twitter, o Facebook e o site.
Migração de Hospedagem 	
R$120,00 	Migração dos arquivos do site do nosso servidor para a hospedagem do cliente.
Módulo SEO 	
R$75,00 	Práticas e ferramentas para posicionar melhor o conteúdo do site nos motores de busca como, por exemplo, o Google.
Newsletter 	
R$65,00 	Sistema que permite o envio de notícias às pessoas que se cadastrarem na newsletter.
Notícias 	
R$115,00 	Sistema que permite a publicação de notícias sobre a empresa.
Origem dos acessos 	
R$55,00 	Permite saber qual a página da web que levou os usuários até o seu site.
Pagamento online 	
R$250,00 	Redireciona o usuário para um sistema de pagamento de terceiro, geralmente o Pag Seguro.
Página estática 	
R$45,00 	Página contendo apenas conteúdo estático (imagens, texto)
Parceiros 	
R$65,00 	Sistema que exibe imagens e links dos parceiros, com animação na transição das imagens.
Patrocinadores 	
R$65,00 	Sistema que exibe imagens e links dos patrocinadores, com animação na transição das imagens.
Portfólio 	
R$75,00 	Página que exibe os serviços já realizados pela empresa.
Processo seletivo 	
R$75,00 	Página com informações sobre o processo seletivo da empresa.
Sistema de busca 	
R$60,00 	Sistema que permite que o usuário faça buscas por palavras chave no conteúdo do site.
Sistema de login (multiusuários) 	
R$115,00 	Sistema que permite ao integrante da comissão ter acesso á uma área restrita do site mediante apresentação de login e senha.
Sistema de Reservas 	
R$1.200,00 	Sistema que permite que o usuário reserve quartos de hotel, de acordo com a disponibilidade. É possível exibir os quartos e valores das diárias no site
Sobre nós 	
R$60,00 	Página contendo informações sobre a empresa (Quem somos)
Suporte online 	
R$115,00 	Permite que a empresa atenda seus clientes por meio de um bate-papo no site.
Tradutor para 1 idioma 	
R$40,00 	Traduz todo o conteúdo do site para um outro idioma.
Tradutor para 2 idiomas 	
R$45,00 	Traduz todo o conteúdo do site para dois idiomas. A inclusão deste item exclui o item acima.
Tradutor para 4 idiomas 	
R$60,00 	Traduz todo o conteúdo do site para quatro idiomas. A inclusão deste item exclui o item acima.
Usuários online 	
R$40,00 	Exibe a quantidade de usuários que estão vendo o sistema em tempo real.
Wrapper (frame) 	
R$60,00 	Permite inserir no site conteúdo de sites externos, arquivos em outras linguagens de programação, formulários etc. 

*/
