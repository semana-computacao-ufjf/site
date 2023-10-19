import Lecture from '../classes/lecture';
import Speaker from '../classes/speaker';
import TypeEnum from '../enums/type-enum';

export const SpeakersData: Speaker[] = [
  new Speaker(
    0,
    'Lahis Souza de Assis',
    'Possui graduação em Engenharia Civil (2017) pela Universidade Federal de Juiz de Fora (UFJF), mestrado em Engenharia Civil pelo Programa de Pós-Graduação em Engenharia Civil (PEC-UFJF) e atualmente é doutoranda do Programa de Pós-Graduação em Modelagem Computacional (PPGMC-UFJF). Atua no desenvolvimento de modelos computacionais para a simulação do processo de dano e fissuração do concreto devido a carregamentos mecânicos, térmicos ou mistos.',
    'assets/img/speakers/lahis-souza.webp',
    '',
    'PGMC',
    1
  ),
  new Speaker(
    1,
    'Priscila Roque de Almeida',
    'Licenciada e mestre em Matemática pela Universidade Federal de Viçosa (UFV). Professora  do Núcleo de Matemática no IFSudeste MG, campus Juiz de Fora. Atualmente é doutoranda no Programa de Pós-Graduação em Modelagem Computacional da UFJF. Possui interesse em métodos numéricos, modelagem de sistemas biológicos e mecânica computacional. É desejável que os participantes já tenham cursado a disciplina de Cálculo Numérico ou tenham conhecimento da área de Métodos Numéricos.',
    'assets/img/speakers/priscila-roque.webp',
    'https://www.linkedin.com/in/priscila-roque-de-almeida-88997474?originalSubdomain=br',
    'PGMC',
    2
  ),
  new Speaker(
    2,
    'Eduardo Santos de Oliveira Marques',
    'Possui graduação em Ciências Exatas pela Universidade Federal de Juiz de Fora (UFJF - 2022), graduação em andamento em Engenharia Mecânica e mestrado em andamento em Modelagem Computacional pela mesma instituição. Foi membro do Laboratório de Automação Industrial e Inteligência Computacional (LAIIC) e do European Organization for Nuclear Research (CERN). Tem experiência na área de Ciência da Computação, com ênfase em Machine Learning, atuando principalmente nos seguintes temas: chaotic time series, evolving fuzzy systems, time series forecasting, data transformation e security debt.',
    'assets/img/speakers/eduardo-marques.webp',
    '',
    'PGMC',
    3
  ),
  new Speaker(
    3,
    'Meninas Programadoras UFJF',
    'O projeto de extensão Meninas Programadoras JF tem como objetivo ensinar Python para meninas do Ensino Médio e incentivá-las  a conhecer melhor o universo da programação. O projeto Meninas Programadoras JF é uma ramificação do projeto Meninas Programadoras criado pela Professora Maria da Graça na USP.',
    'assets/img/speakers/meninas-programadoras.webp',
    'https://www.instagram.com/meninasprogramadorasjf/',
    'UFJF',
    37
  ),
  new Speaker(
    4,
    'Meninas Digitais UFJF',
    'O Projeto Meninas Digitaus UFJF é inspirado no Programa Meninas Digitais organizado pela Sociedade Brasileira de Computação, realizando através de oficinas práticas e desplugadas, explicações sobre os conceitos da área de Computação com a motivação de despertar o interesse de meninas estudantes do ensino médio e dos anos finais do ensino fundamental, para que estas conheçam melhor a área e sintam-se motivadas em seguir uma carreira em Computação.',
    'assets/img/speakers/meninas-digitais.webp',
    'https://www.instagram.com/meninasdigitaisufjf/',
    'UFJF',
    37
  ),
  new Speaker(
    5,
    'ProgramAda',
    `O ProgramAda é um projeto de extensão da UFJF com um propósito transformador. Nosso foco é inspirar e motivar alunas a explorar o mundo da programação, reduzindo os índices de desistência e reprovação em disciplinas-chave como Algoritmos.
    Nossa abordagem é única: estamos construindo um jogo funcional e interativo com aspectos lúdicos e personalizáveis, projetado para evoluir junto às alunas ao longo do semestre acadêmico. Ao estimular a criatividade e a lógica, o jogo tem como intuito enriquecer o aprendizado desde o início do curso.`,
    'assets/img/speakers/programada.webp',
    'https://www.instagram.com/program_ada_ufjf/',
    'UFJF',
    37
  ),
  new Speaker(6, '', '', '', '', '', 6),
  new Speaker(
    7,
    'Anderson de Moura Ribeiro',
    'Anderson de Moura Ribeiro possui graduação em Engenharia Mecânica pela Universidade Federal de São João Del-Rei (UFSJ) (2021), mestrado em Modelagem Computacional (2023) pelo Programa de Pós-graduação em Modelagem Computacional (PPGMC) da Universidade Federal de Juiz de Fora (UFJF). Atualmente é doutorando no PPGMC e bolsista Shell Brasil Petróleo LTDA no Laboratório de Matemática Aplicada (LAMAP/UFJF) desenvolvendo pesquisa com ênfase em quantificação de incertezas, análise de sensibilidade e métodos numéricos (FEM/FVM) aplicados à recuperação avançada de petróleo, além de ter contribuído em um projeto de pesquisa FAPEMIG sobre otimização de turbinas eólicas de eixo horizontal e de configurações de parques eólicos. Tem experiência nas áreas de simulação numérica em dinâmica dos fluidos computacional (FVM, OpenFOAM, Turbulência), otimização multiobjetivo utilizando algoritmos evolucionários e desenho assistido por computador (CAD).',
    'assets/img/speakers/anderson-moura.webp',
    '',
    'PGMC',
    7
  ),
  new Speaker(
    8,
    'Yuri Medeiros',
    ' Yuri Medeiros é Engenheiro Computacional pela UFJF e CEO da Codi Academy Treinamentos. Iniciou sua carreira como Professor de Física trabalhando na Prefeitura de Juiz de Fora, também foi Professor na Rede Apogeu e no Curso BMW onde lecionou Informática em Cursos Preparatórios, foi Diretor Pedagógico do Centro de Ensino Múltiplo, e na UFJF foi tutor das disciplinas Banco de Dados, Introdução ao Linux e Planilhas Eletrônicas.',
    'assets/img/speakers/yuri-medeiros.webp',
    '',
    'Codi Academy',
    8
  ),
  new Speaker(9, 'Codi Academy', '', '', '', 'Codi Academy', 9),
  new Speaker(
    10,
    'Valter Camargo',
    'Valter Vieira de Camargo é Professor Associado do Departamento de Computação da Universidade Federal de São Carlos (UFSCar). Atualmente, é líder do grupo de pesquisa AdvanSE (Advanced Research on Software Engineering), e vem conduzindo pesquisas nos seguintes tópicos: Architecture-Driven Modernization (ADM), Engenharia de Software com Aprendizagem de Máquina, desenvolvimento de software orientado a modularidade e sistemas auto-adaptativos. Valter Camargo possui doutorado em Ciência da Computação pelo Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo (ICMC/USP) em 2006, e obteve o título de mestre também em Ciência da Computação pelo Departamento de Computação da UFSCar em 2001. Durante o ano de 2013, trabalhou como pesquisador convidado no Projeto de Pesquisa ENOFES do Departamento de Computação da Universidade de Twente na Holanda. Também tem atuado como avaliador de instituições de ensino junto ao Ministério da Educação. O Professor Valter Camargo é coautor de 120 artigos científicos, incluindo publicações em conferências, periódicos e capítulos de livro.',
    'assets/img/speakers/valter-camargo.webp',
    '',
    'Departamento de Computação, Universidade Federal de São Carlos (UFSCar)',
    10
  ),
  new Speaker(
    11,
    'José Luiz Ferreira',
    'Gerente técnico da TC Projetos (Tecnocad Engineering), empresa italiana de tecnologia automotiva. ​​Atualmente gerencia dois escritórios de projeto automotivo e desenvolvimento de produto. Matriz em Contagem com 60 projetistas de e filial em Guaxupé com 25 projetistas, 14 Analistas Validação Virtual CAE, recém-inaugurado Escritório de Projeto de Juiz de Fora, com previsão de 30 funcionários inicialmente, para atender mercado automobilístico nacional e internacional.',
    'assets/img/speakers/jose-luiz.webp',
    '',
    'TC Projetos',
    11
  ),
  new Speaker(
    12,
    'Leonardo Alencar',
    'Graduado em Ciência de Dados; MBA em Segurança Cibernética; MBA Gestão de Processos BPM-CBOK; MBA Gestão Competitiva e Business Intelligence; Especialista em Gestão Operacional com foco em Segurança de Transporte de Numerário; Vinte e cinco anos de experiência no setor de Segurança Cibernética e Business Intelligence.',
    'assets/img/speakers/leonardo-alencar.webp',
    'https://www.linkedin.com/in/leonardojalencar/?originalSubdomain=br',
    'Prefeitura de Juiz de Fora',
    12
  ),
  new Speaker(
    13,
    'Anastácia Malosto',
    'Anastácia Malosto é graduanda em Sistemas de Informação, membro do GetSi e desenvolve projetos com o React para web. Trabalhou com simulação de modelos biológicos com interface Web, e em um sistema de gerenciamento de pesquisas limnológicas.',
    'assets/img/speakers/anastacia-malosto.webp',
    'https://github.com/analexicon',
    'GET SI',
    13
  ),
  new Speaker(
    14,
    'Luiz Gustavo Nazareth',
    'Luiz é estudante de Engenharia Computacional e bolsista do GET Engenharia Computacional. Trabalha em projeto de iniciação científica da área de métodos numéricos e modelagem de escoamentos em meios porosos.',
    'assets/img/speakers/luiz-nazareth.webp',
    '',
    'GET EngComp',
    14
  ),
  new Speaker(15, '', '', '', '', '', 15),
  new Speaker(
    16,
    'Marcelo Ian Rezende Menezes',
    'Marcelo é estudante de Engenharia Computacional e bolsista do GET Engenharia Computacional. Trabalha em projeto de iniciação científica da área de pesquisa operacional.',
    'assets/img/speakers/marcelo-ian.webp',
    '',
    'GET EngComp',
    16
  ),
  new Speaker(
    17,
    'André Martins Pereira',
    'Membro do GETComp há seis meses, está no terceiro período de Ciência da Computação e é pesquisador na área de Deep Learning, especificamente utilizando Redes Neurais Convolucionais.',
    'assets/img/speakers/andre-martins.webp',
    '',
    'GET Comp',
    17
  ),
  new Speaker(18, '', '', '', '', 'BITKA', 18),
  new Speaker(19, '', '', '', '', 'LEVTY', 19),
  new Speaker(
    20,
    'Augusto De Filippo Cavalini',
    'Augusto é estudante de Engenharia Computacional e bolsista do GET Engenharia Computacional. Trabalha em projeto de iniciação científica da área de inteligência artificial.',
    'assets/img/speakers/augusto-filippo.webp',
    '',
    'GET EngComp',
    20
  ),
  new Speaker(
    21,
    'Kauê Oliveira Paraízo Garci',
    'Kauê é graduando em Engenharia Computacional e bolsista do GET Engenharia Computacional. Membro do setor de Simulações e Pesquisa da equipe de competição em lançamento de foguetes Supernova Rocketry. Atua em projeto de pesquisa na área de mecânica aplicada e computacional.',
    'assets/img/speakers/kaue-oliveira.webp',
    '',
    'GET EngComp',
    21
  ),
  new Speaker(
    22,
    'Marcelo Ladeira Reis',
    'Marcelo Ladeira Reis é Diretor de Otimização na BITKA Analytics e um dos fundadores da empresa. É formado em Ciência da Computação pela Universidade Federal de Viçosa e mestre em Algoritmos e Otimização Combinatória pela PUC-Rio. Tem artigos científicos publicados em diversas revistas acadêmicas no Brasil e exterior, dentre elas a Mathematical Programming, revista mais importante de Pesquisa Operacional. Possui mais de 20 anos de experiência em Advanced Analytics, tendo atuado em projetos para grandes empresas brasileiras e multinacionais.',
    'assets/img/speakers/marcelo-reis.webp',
    '',
    'BITKA',
    22
  ),
  new Speaker(
    23,
    'Lívio Drumond Guerra',
    'Lívio Drumond Guerra é formado em Ciência da Computação pela UFV. Nos últimos 12 anos de carreira participou da construção de sistemas analíticos com foco em otimização. Desde o ano passado assumiu um novo desafio na BITKA Analytics, empresa que reune grandes referências no mercado em sistemas de apoio a decisão. Além de esporadicamente atuar como Gerente de Projetos, atualmente é o responsável na empresa pela área de recrutamento e relacionamento com as universidades.',
    'assets/img/speakers/livio-drumond.webp',
    '',
    'BITKA',
    22
  ),
  new Speaker(
    24,
    'Amanda Chenu Romano',
    'Possui graduação em Engenharia Aeronáutica pela Universidade Estadual Paulista Júlio de Mesquita Filho (2021) e mestrado em Ciências e Tecnologias Espaciais pelo Instituto Tecnológico de Aeronáutica (2023). Atualmente, é Técnica de Aplicações CAE CFD na ESSS (Engineering Simulation and Scientific Software) e cursa doutorado em Engenharia Aeronáutica e Mecânica no Instituto Tecnológico de Aeronáutica. Tem experiência na área de Engenharia Aeroespacial, com ênfase em Dinâmica dos Fluidos Computacional, atuando principalmente nos seguintes temas: arrasto de base, aerotermodinâmica e combustão.',
    'assets/img/speakers/amanda-chenu.webp',
    'https://www.linkedin.com/in/amanda-chenu-romano-a81b19227?originalSubdomain=br',
    'ESSS',
    23
  ),
  new Speaker(
    25,
    'Leandro Alvim',
    'Leandro Alvim é professor adjunto do magistério superior  do Departamento de Ciência da Computação da Universidade Federal Rural do Rio de Janeiro (UFRRJ). É membro do Programa de Pós Graduação em Humanidades Digitais da UFRRJ e também colaborador com orientações no Programa de Engenharia de Sistemas de Computação na Coppe (UFRJ). Seus temas de pesquisa estão relacionados ao desenvolvimento de métodos computacionais para problemas de Inteligência Artificial, bem como Ciência de Dados. Atuou também desenvolvendo tecnologias no mercado para empresas como: Buscapé, COB e para o público em geral. É um dos criadores do Xray Covid, ferramenta de teste de Covid por fotos de celular.',
    'assets/img/speakers/leandro-alvim.webp',
    '',
    'UFRRJ',
    24
  ),
  new Speaker(
    26,
    'Pablo Mendes',
    'Pablo é especialista em inteligência artificial, processamento de linguagem natural e representação do conhecimento. Formou-se técnico em informática pelo antigo CTU/UFJF, Bacharel em Informática pela UFJF, Mestre em Informática pela UFRJ e Doutor em Ciência e Engenharia da Computação pela Wright State University, Ohio, EUA. Fez posdoc na Freie Universitaet Berlin e na IBM Research Almaden em San Jose, CA. Trabalhou em uma startup que foi comprada pela Apple em 2017. Na Apple, montou uma equipe dentro da divisão de IA, crescendo de 2 a quase 20 engenheiros e pesquisadores. Hoje ele é CEO de uma startup "seed stage" de 15 engenheiros em São Francisco, CA, EUA. Pablo é autor de 7 patentes e mais de 30 artigos científicos que receberam em total quase 8 mil citações conforme o Google Scholar. Há alguns anos atrás, foi listado pelo Microsoft Academic Search como autor de maior impacto no mundo na área de Entity Linking (área de sua tese de doutorado).',
    'assets/img/speakers/pablo-mendes.webp',
    '',
    '',
    25
  ),
  new Speaker(
    27,
    'Johnny Moreira Gomes',
    'Johnny Moreira é doutor em Modelagem Computacional, com ênfase em computação de alto desempenho e métodos numéricos. Trabalha no centro de Gestão do Conhecimento Organizacional da UFJF (CGCO), possuindo dez anos de experiência como desenvolvedor full-stack, especializado em Java/Spring Framework e Angular.',
    'assets/img/speakers/johnny-moreira.webp',
    '',
    'CGCO',
    27
  ),
  new Speaker(
    28,
    'Gabriel Medeiros Macedo',
    'Gabriel é graduando em Engenharia de Computação no CEFET-MG. Está no 8° período do curso. Participou de duas Iniciações Científicas: Análise e Evolução do Modelo de Proveniência de Dados PROV-SwProcess para apoiar o Desenvolvimento Global de Software e Análise de Dados de Processos de Desenvolvimento de Software ainda em andamento onde desenvolve programas de análise de dados em Python. Atualmente é membro do Programa de Educação Tutorial da Engenharia de Computação (PET.COMP).',
    'assets/img/speakers/gabriel-medeiros.webp',
    '',
    'PET.COMP',
    28
  ),
  new Speaker(
    29,
    'João Pedro Salim',
    'João Pedro Miranda Salim é estudante do curso de Ciência da Computação na UFJF, integrante do INOVAGames e apaixonado pelo desenvolvimento de jogos desde 2018. Tem experiência com a ferramenta Unity.',
    'assets/img/speakers/joao-salim.webp',
    '',
    'Discente do DCC',
    29
  ),
  new Speaker(
    30,
    'Leonardo Chaves',
    'Leonardo Chaves é estudante do curso de Engenharia Computacional na UFJF, integrante do INOVAGames e tem experiência com o desenvolvimento de jogos digitais.',
    'assets/img/speakers/leonardo-chaves.webp',
    '',
    'Discente do DCC',
    29
  ),
  new Speaker(
    31,
    'Arthur Mendes Rocha Alves',
    'Arthur é graduando em Engenharia de Computação no CEFET-MG Campus Leopoldina. Já atuou como monitor da disciplina de Estrutura de Dados em 2021. Participou do projeto de extensão: “Minha Tarifa Branca: Sistema de Apoio à Decisão para Adesão à Tarifa Branca” durante o ano de 2022 como um dos desenvolvedores do sistema web. Atualmente é membro do Programa de Educação Tutorial da Engenharia de Computação (PET.COMP).',
    'assets/img/speakers/arthur-mendes.webp',
    '',
    'PET.COMP',
    30
  ),
  new Speaker(
    32,
    'Carlos Augusto de Assis Lima',
    'Carlos Augusto de Assis Lima é sócio fundador da RERUM Engenharia de Sistemas, Mestre em Sistemas e Computação pelo Instituto Militar de Engenharia, com ênfase em Tratamento da Informação, Engenheiro Eletricista com ênfase em Sistemas e Computação. Possui 35 Anos de experiência na modelagem e desenvolvimento de arquiteturas e sistemas distribuídos.',
    'assets/img/speakers/carlos-lima.webp',
    '',
    'Rerum Engenharia de Sistemas',
    31
  ),
  new Speaker(
    33,
    'Camilla Paes Cruz',
    'Camilla Paes Cruz é Coordenadora de Dados na Edenred, graduada em engenharia civil pela PUC-Campinas e em Gestão do Comércio Internacional pela UNICAMP com MBA em Data Science e Analytics pela USP/Esalq. Atua na área de dados desde 2018 em projetos de BI e Ciência de Dados.',
    'assets/img/speakers/camilla-paes.webp',
    '',
    'Edenred',
    32
  ),
  new Speaker(
    34,
    'Marcelo Theóphilo',
    `Marcelo começou sua jornada na área de Tecnologia da Informação lá em 1999, quando plataforma SaaS eram apenas uma ideia distante. Desde então, ele mergulhou de cabeça em diversas tecnologias SaaS e liderou projetos que supercomplexos.
    Em 2012, o Marcelo decidiu focar seus conhecimentos exclusivamente na gestão de ativos de software e SaaS, ou como a gente gosta de chamar, SAM (Software Asset Management). Ele ficou determinado a ajudar Clientes e Parceiros a botarem ordem na bagunça do software, tanto nas máquinas locais quanto nas nuvens SaaS, IaaS, PaaS.
    Com uma baita bagagem de experiência e um monte de certificações, o Marcelo é simplesmente obcecado pelo mundo da ServiceNow. Ele gerencia projetos em grandes empresas com uma facilidade que faz parecer fácil como montar um quebra-cabeça.
    Então, se você está a fim de bater um papo sobre SaaS, ServiceNow, governança de software, ou simplesmente quer pegar umas dicas com um verdadeiro mestre na área, o Marcelo é o cara! Compareça e veja como ele pode te ajudar a dominar o mundo da TI. 💻🚀`,
    'assets/img/speakers/marcelo-theophilo.webp',
    'https://www.linkedin.com/in/marcelotheophilo/?locale=pt_BR',
    'Diretor de Serviços de Consultoria na 4Matt Tecnologia',
    33
  ),
  new Speaker(
    35,
    'Wallyce Azy',
    'Wallyce tem Pós-Graduado em Desenvolvimento WEB, com sete anos de experiência em desenvolvimento web full-stack e especializado nas tecnologias React, Node.js e Next.js, além do desenvolvimento e administração de bancos de dados. Atualmente é servidor no CGCO/UFJF e possui participação ativa no setor privado de telecomunicações.',
    'assets/img/speakers/wallyce-azy.webp',
    '',
    'CGCO',
    27
  ),
  new Speaker(
    36,
    'Gabriel Mattos',
    'Gabriel é estudante de Engenharia Computacional e bolsista do GET Engenharia Computacional. Trabalha em projeto de iniciação científica da área de métodos numéricos e modelagem de escoamentos em meios porosos.',
    'assets/img/speakers/gabriel-mattos.webp',
    '',
    'GET EngComp',
    21
  ),
  new Speaker(
    37,
    'Lucas Wilman da Silva Crispim',
    'Técnico em Desenvolvimento de Sistemas pelo Instituto Federal do Sudeste de Minas Gerais. Formado em Física pela Universidade Federal de Juiz de Fora. Possui mestrado e Doutorado em Modelagem Computacional pelo PPGMC-UFJF e realizou pós-doutorado em Engenharia pela Universidade Federal do Rio de Janeiro. Especialista em métodos numéricos e resolução de equações diferenciais. Atualmente é desenvolvedor de software na viasat inc, onde atua como Backend em Java e Front-end React, além de ser docente na XP educação. Entusiasta da educação financeira, produz conteúdo para desmistificar o universo das finanças utilizando Python.',
    'assets/img/speakers/lucas-crispim.webp',
    '',
    'Viasat Inc',
    36
  ),
  new Speaker(
    38,
    'João Victor Costa de Oliveira',
    'João Victor é mestrando em Modelagem Computacional no Programa de Pós-Graduação em Modelagem Computacional da Universidade Federal de Juiz de Fora, bacharel em Ciências Exatas e graduando em Engenharia Computacional pela mesma instituição. Atua nas áreas de Computação de Alto Desempenho, Otimização e Métodos Numéricos para Equações Diferenciais.',
    'assets/img/speakers/joao-oliveira.webp',
    '',
    'GET EngComp',
    [14, 16]
  ),
  new Speaker(
    39,
    'Café das Minas',
    'O Café das Minas é um evento mensal organizado pelos projetos Meninas Digitais UFJF, ProgramAda e Meninas Programadoras com o objetivo de reunir a comunidade de meninas dos cursos de Computação e Exatas da UFJF.',
    'assets/img/speakers/cafe-das-minas.webp',
    'https://sites.google.com/ice.ufjf.br/meninasdigitaisufjf/eventos',
    'UFJF',
    37
  ),
  new Speaker(
    40,
    'Sandra Ávila',
    'Sandra Avila é professora no Instituto de Computação, da Universidade Estadual de Campinas. É doutora em Ciência da Computação, com duplo diploma, pela UFMG e pela Sorbonne Université. Seus interesses de pesquisa estão voltados para IA, mais especificamente Visão Computacional e Processamento de Linguagem Natural, com aplicações na Saúde e Análise de conteúdo sensível. Em 2020, foi selecionada para representar o Brasil no Fórum de Jovens Cientistas do BRICS, na área de IA. Sua paixão é incentivar meninas e mulheres a apostarem em carreiras nas áreas de STEM (Ciências, Tecnologia, Engenharias e Matemática).',
    'assets/img/speakers/sandra-avila.webp',
    'https://www.linkedin.com/in/avilasandra/?originalSubdomain=br',
    'UNICAMP',
    39
  ),
  new Speaker(
    41,
    'Raphaela Mansur',
    'Raphaela é formada em Engenharia Elétrica - Habilitação em Robótica e Automação Industrial pela UFJF e pós graduada em Administração de Empresas pela FGV. Iniciou sua trajetória na LEVTY em 2021 atuando como desenvolvedora e Agile Master. É certificada pela Scrum.org e pela Kanban University',
    'assets/img/speakers/raphaela-mansur.webp',
    '',
    'LEVTY',
    40
  ),
  new Speaker(
    42,
    'Mateus Pereira Fernandes',
    'Mateus é graduando em Engenharia de Computação no CEFET-MG Campus Leopoldina. Já fiz parte da equipe de programação competitiva do CEFET-MG. Atualmente, estou vinculado como diretor de eventos pela atlética da instituição, sou membro do Núcleo Robótica de Leopoldina (NRL), com o projeto do robô seguidor de linhas. Além disso, sou membro do Programa de Educação Tutorial da Engenharia de Computação (PET.COMP), tendo ingressado neste semestre como voluntário.',
    'assets/img/speakers/mateus-pereira.webp',
    '',
    'PET.COMP',
    28
  ),
  new Speaker(
    43,
    'Victor Souza Vilela da Silva',
    'Victor é graduando em Engenharia de Computação no CEFET-MG Campus Leopoldina. Atualmente é membro do Programa de Educação Tutorial de Engenharia de Computação (PET.COMP) desde 2022. Está no 8° período do curso. Dentro do PET, teve oportunidade de realizar uma na área de reconhecimento de imagens usando OpenCV, para implantar um detector de placas para instituição usando a linguagem Python.',
    'assets/img/speakers/victor-souza.webp',
    '',
    'PET.COMP',
    28
  ),
  new Speaker(
    44,
    'Humberto Motta da Cunha',
    'Humberto é graduando em Engenharia de Computação no CEFET-MG Campus Leopoldina, e participou do Programa de Educação Tutorial de Computação (PET.COMP) em 2022. Durante sua participação no PET, teve a oportunidade de ingressar na Iniciação Científica (IC) na área de análise de dados e desenvolvimento web, com foco na análise do perfil de evasão escolar. Atualmente, é membro ativo do PET.COMP, tendo ingressado neste semestre. Além disso, ocupa o cargo de Presidente na atlética da instituição.',
    'assets/img/speakers/humberto-motta.webp',
    '',
    'PET.COMP',
    30
  ),
  new Speaker(
    45,
    'Lucas da Cruz Rezende',
    'Lucas é graduando em Engenharia de Computação no CEFET-MG Campus Leopoldina. Já fez parte do projeto de extensão Educação para um Mundo Mais Maker, onde desenvolvia minicursos para proporcionar experiências de aprendizagem a crianças e jovens. Atualmente é membro do Programa de Educação Tutorial de Engenharia de Computação (PET.COMP). Dentro do PET, está realizando uma Iniciação Científica com o intuito de criar um site para gerenciar campeonatos de jogos.',
    'assets/img/speakers/lucas-rezende.webp',
    '',
    'PET.COMP',
    30
  ),
  new Speaker(
    46,
    'Rafaela Oliveira Lorenzeto Braga',
    'Rafaela é graduanda em Engenharia de Computação no CEFET-MG Campus Leopoldina. Já fez parte da Encautech Júnior Consultoria (Empresa Júnior) onde desempenhava o cargo de Assessora Comercial. Atualmente é membro do Programa de Educação Tutorial de Engenharia de Computação (PET.COMP) desde 2022. Dentro do PET, teve oportunidade de realizar uma Iniciação Científica na área de Análise de Dados, cujo tema era Análise do perfil de evasão escolar no contexto de um curso de graduação em Engenharia de Computação em implantação',
    'assets/img/speakers/rafaela-braga.webp',
    '',
    'PET.COMP',
    30
  ),
  new Speaker(
    47,
    'Lucas Paiva',
    'Lucas Paiva é graduando em Sistemas de Informação, membro do GetSi, e desenvolve projetos com o React para web. Trabalhou com a criação de jogos on-line, como um cubo mágico multijogador, e um jogo educativo sobre anatomia.',
    'assets/img/speakers/lucas-paiva.webp',
    'https://github.com/LucasPaivaSantos',
    'GET SI',
    13
  ),
  new Speaker(48, 'Alex Borges Vieira', '', '', '', 'Pós Graduação', 43),
  new Speaker(49, 'Ruy Freitas Reis', '', '', '', 'Docente do DCC', 43),
  new Speaker(
    50,
    'Sara Salomão Salles',
    `Sara Salomão Salles atualmente, atua como Gerente de QA na Thomson Reuters, onde é responsável por produtos de software que atendem diferentes segmentos de mercado. Possui mais de 10 anos de experiência na área de Qualidade de Software. Conta com especialização em Engenharia de Qualidade de Software e também, especialização em Modelos Ágeis de desenvolvimento de software. Possui mestrado em Biotecnologia e genética e Bacharelado em Ciência da Computação pela UFJF. Durante a graduação, atuou como estagiária em desenvolvimento de softwares para diferentes instituições em Juiz de Fora/MG`,
    '',
    '',
    'Gerente de QA na Thomson Reuters',
    37
  ),
  new Speaker(
    51,
    'Priscila Capriles Goliatt',
    'Priscila Capriles é pesquisadora da UFJF, professora do Departamento de Ciência da Computação e do Programa de Pós-graduação em Modelagem Computacional, é coordenadora do Grupo de Modelagem Computacional Aplicada do CNPq, coordenadora do Time Enactus UFJF para o Empreendedorismo Social, e foi vice-diretora executiva da FADEPE. Trabalha nas áreas de Biologia Computacional, Ciência de Dados, Desenvolvimento de Sistemas, Inovação Tecnológica e Empreendedorismo',
    'assets/img/speakers/priscila-capriles.webp',
    '',
    'Docente do DCC',
    5
  ),
  new Speaker(
    52,
    'Raul Fonseca Neto',
    ' O Raul Fonseca Neto é Professor Titular do Departamento de Ciência da Computação da Universidade Federal de Juiz de Fora - UFJF,   graduado em Engenharia Civil UFJF , especialista em Pesquisa Operacional pelo Instituto Militar de Engenharia -IME , meste em Engenharia de Transportes também pelo IME, doutor em Engenharia de Sistemas e Computação pela Universidade Federal do Rio de Janeiro - UFRJ,  e com pós-doutorado em Modelagem Computacional pelo Laboratório Nacional de Computação Científica - LNCC e  pós-doutorado em Inteligência Computacional pelo Departamento de Eletrônica da Universidade Federal de Minas Gerais -UFMG. Atua como pesquisador nos Programsa de Pós-Graduação em Modelagem Computacional (UFJF) e em Ciência da Computação (UFJF) nas áreas de Ciência da Computação e Engenharia de Sistemas, com ênfase em Sistemas de Computação, atuando principalmente nos seguintes temas: inteligência artificial, otimização combinatória, otimização convexa, fluxo em redes, planejamento e scheduling, aprendizado de máquinas, reconhecimento de padrões, predição estruturada, aprendizado online, redes complexas e bioinformática.',
    'assets/img/speakers/raul-fonseca.webp',
    '',
    'Docente do DCC',
    5
  ),
  new Speaker(
    53,
    'Wagner Antônio Arbex',
    'Wagner Arbex é Professor Adjunto da Universidade Federal de Juiz de Fora (UFJF) e Analista Científico da Empresa Brasileira de Pesquisa Agopecuária (Embrapa), com doutorado em Engenharia de Sistemas e Computação. Idealizador do IDEAS FOR MILK, VACATHON e RESIDÊNCIA ZOOTÉCNICA DIGITAL, atua há mais de 35 anos em PD&I, aplicando Ciência da Computação, Ciência de Dados e TIC ao Agronegócio.',
    'assets/img/speakers/wagner-arbex.webp',
    '',
    'Docente do DCC',
    5
  ),
  new Speaker(
    54,
    'Fabio do Vale',
    'Fabio do Vale é Assessor de VPGG na Code Jr, está no sétimo período de Sistemas de informação e é desenvolver web backend focado nas tecnologias de PHP e Laravel.',
    'assets/img/speakers/fabio-vale.webp',
    '',
    'Code Empresa Júnior de Computação',
    17
  ),
  new Speaker(
    55,
    'Dayane Guimarães Gomes Godoy',
    'Membro do GETComp há onze meses, está no quarto período de Ciência da Computação e é pesquisadora na área de Análise de Dados com foco em análise de dados em grandes grafos de conhecimento.',
    'assets/img/speakers/dayane-guimaraes.webp',
    '',
    'GET Comp',
    17
  ),
  new Speaker(
    56,
    'Daniel Jorge Reis Caldeira',
    'Membro do GETComp há seis meses, está no oitavo período de Ciência da Computação e é desenvolvedor de jogos educacionais focados no ensino de programação.',
    'assets/img/speakers/daniel-jorge.webp',
    '',
    'GET Comp',
    17
  ),
  new Speaker(
    57,
    'Crystiam Kelle Pereira e Silva',
    `Crystiam Kelle possui graduação em Ciência da Computação pela Universidade Federal de Juiz de Fora (2007), mestrado em Ciência da Computação pela Universidade Federal de Juiz de Fora (2015) e doutorado pela UNIRIO (2021). Tanto no mestrado, quanto no doutorado focou em tecnologias aplicadas à educação e web semântica. Atua também como analista de tecnologia da informação da Universidade Federal de Juiz de Fora há 15 anos, tendo neste período trabalhado como desenvolvedora, gerente de equipe e product owner. Atualmente gerencia a equipe de projetos e sistemas do CGCO e atua também como product owner em projetos no CGCO.`,
    'assets/img/speakers/crystiam-kelle.webp',
    '',
    'CGCO',
    37
  ),
  new Speaker(
    58,
    'Luiza Caldeira Daniel',
    'Luiza Caldeira Daniel tem 18 anos e cursa Sistemas de Informação na Universidade Federal de Juiz de Fora. É voluntária do projeto de extensão Meninas Digitais UFJF.',
    'assets/img/speakers/luiza-caldeira.webp',
    'https://github.com/luizacaldeira',
    'Meninas Digitais UFJF',
    37
  ),
];

export const LecturesData: Lecture[][] = [
  // Segunda
  [
    new Lecture(
      0,
      new Date(2023, 9, 23, 10, 0),
      '',
      120,
      'Auditório do ICE',
      'Abertura da Semana do ICE',
      TypeEnum.Palestra
    ),
    new Lecture(
      1,
      new Date(2023, 9, 23, 14, 0),
      'O software Abaqus é um programa comercial baseado no Método dos Elementos Finitos (MEF) e amplamente utilizado para a modelagem computacional de problemas das mais diversas áreas da engenharia. Neste curso introdutório serão apresentadas as funcionalidades básicas da ferramenta, tanto através da interface gráfica quanto a partir do desenvolvimento de scripts na linguagem Python, para que os participantes tenham uma ideia geral do pré-processamento, do processamento e do pós-processamento do Abaqus, e sejam capazes de utilizar a ferramenta para a simulação de seus problemas de interesse.',
      150,
      'Lab 2 Engenharia Computacional',
      'Introdução a simulações da mecânica dos sólidos com Abaqus/CAE',
      TypeEnum.Minicurso,
      SpeakersData[0]
    ),
    new Lecture(
      2,
      new Date(2023, 9, 23, 14, 0),
      'O FEniCS é uma plataforma de código aberto utilizada para resolver problemas governados por equações diferenciais parciais (EDPs) por meio do Método dos Elementos Finitos (MEF). O objetivo deste minicurso é apresentar aos participantes uma introdução acessível e prática a essa plataforma. Inicialmente, será realizada uma breve introdução ao MEF, técnica numérica utilizada para encontrar soluções aproximadas para EDPs, com o intuito de fornecer uma base sólida para compreender a abordagem do FEniCS. Em seguida, os participantes terão a oportunidade de explorar o FEniCs por meio de exemplos práticos de aplicações. Serão abordadas as etapas de pré-processamento, como a criação de malha, implementação de condições iniciais e de contorno, implementação do problema. Por fim, o  pós-processamento será abordado, envolvendo a visualização dos resultados por meio do software Paraview.',
      150,
      'Lab 1 Engenharia Computacional',
      'Introdução ao método dos elementos finitos usando o FeNiCs',
      TypeEnum.Minicurso,
      SpeakersData[1]
    ),
    new Lecture(
      3,
      new Date(2023, 9, 23, 14, 0),
      `Você é um entusiasta de Machine Learning? Gostaria de testar suas habilidades e competir com outros especialistas em um desafio emocionante? Junte-se à nossa competição de Previsão de Preços de Imóveis e mostre seu talento em análise de dados e aprendizado de máquina!`,
      150,
      'L205',
      'Competição de IA: Desafio de Previsão de Preços de Imóveis',
      TypeEnum.Competicao,
      SpeakersData[2]
    ),
    new Lecture(
      11,
      new Date(2023, 9, 24, 17, 0),
      'A ideia principal da palestra é mostrar como hoje são desenvolvidos os projetos automotivos dos carros modernos. Design – Transformação do Sketch manual do Designer em uma superfície modelada nos softwares (Alias, Icem Surf). Desenvolvimento do Produto – da Superfície de Estilo para o modelamento de 100% das peças que compõem o automóvel. Validação Virtual – CAE – Cálculo Estrutural, Aerodinâmico do Automóvel e aprovação de acordo com critérios de confiabilidade e segurança. O carro do futuro – a conectividade do automóvel com os ocupantes (infotainment, EV, carro autônomo, carros voadores).',
      60,
      'S404',
      'Projeto Automotivo do Design ao Protótipo com Auxílio da Ciência da Computação',
      TypeEnum.Palestra,
      SpeakersData[11]
    ),
    new Lecture(
      4,
      new Date(2023, 9, 23, 19, 0),
      'Abertura da Semana da Computação e Credenciamento - entrega de crachás',
      60,
      'S404',
      'Abertura da Semana da Computação e Credenciamento',
      TypeEnum.Palestra
    ),
    new Lecture(
      5,
      new Date(2023, 9, 23, 19, 30),
      'Palestra de Abertura',
      90,
      'S404',
      'Mesa Redonda: Inteligência Artificial: aplicações atuais e tendências',
      TypeEnum.Palestra,
      [SpeakersData[51], SpeakersData[52], SpeakersData[53]]
    ),
  ],
  // Terça
  [
    new Lecture(
      6,
      new Date(2023, 9, 24, 8, 0),
      'Mais informações abaixo',
      240,
      'L107',
      'Hackathon Rerum',
      TypeEnum.Competicao,
      SpeakersData[32]
    ),
    new Lecture(
      7,
      new Date(2023, 9, 24, 8, 0),
      'O software OpenFOAM é uma aplicação de código aberto amplamente utilizado na simulação numérica de equações diferenciais parciais, com ênfase em dinâmica dos fluidos computacional (CFD). Este curso introdutório fornece uma visão geral dos conceitos iniciais de volumes finitos, empregado pelo OpenFOAM, utilizando exemplos práticos de escoamentos laminar e turbulento para demonstrar o fluxo de trabalho no software. Os participantes terão uma visão geral das etapas essenciais do processo de simulação, abrangendo o pré-processamento, que inclui a criação da malha e definição de condições de contorno/iniciais, a simulação propriamente dita, envolvendo solvers e modelos implementados no OpenFOAM para a resolução de dois estudos de caso, e o pós-processamento, realizado com ferramentas como Paraview e Python. Os conceitos apresentados têm aplicação em diversas áreas, como aerodinâmica, transferência de calor, combustão, entre outras, permitindo que os participantes apliquem esse conhecimento em demais problemas de interesse próprio. É desejável que os participantes já tenham cursado a disciplina de Cálculo Numérico ou tenham conhecimento da área de Métodos Numéricos.',
      240,
      'Lab 2 Engenharia Computacional',
      'Introdução à simulação de dinâmica dos fluidos usando OpenFOAM',
      TypeEnum.Minicurso,
      SpeakersData[7]
    ),
    new Lecture(
      8,
      new Date(2023, 9, 24, 8, 0),
      'No curso intensivo de UI/UX, você aprenderá a projetar experiências de design incríveis e profissionais, levando dinamismo e organização aos seus projetos, vamos explorar os seguintes tópicos: Tópico 1: User Stories; Tópico 2: Leis da UX; Tópico 3: Gestalt; Tópico 4: Prática: Criando um App com o que aprendemos; Começamos falando sobre qual público queremos atingir em nosso projeto prático, e como adaptar o design para atendê-lo, na sequência veremos as principais leis de experiência de usuário com exemplos reais, e no fim, uma prática onde vamos criar um aplicativo para organizar filmes assistidos.',
      90,
      'L205',
      'Aprenda UI/UX na prática',
      TypeEnum.Minicurso,
      SpeakersData[8]
    ),
    new Lecture(
      9,
      new Date(2023, 9, 24, 9, 30),
      'No curso intensivo de Inteligência Artificial com Python, vamos utilizar o poder da linguagem Python junto a API da OpenAi para criar 3 IAs do zero. Na primeira, vamos criar uma inteligência artificial no estilo CHAT GPT que terá personalidade, ela será capaz de responder de formas diferentes as mesmas perguntas, usando termos mas tècnicos ou simples, com respostas mais curtas ou maiores, mais aleatórias e previsíveis, também será possível alterar a sua personalidade, inclusive seu humor. Na segunda, vamos criar um bot da wikipedia, que será capaz de criar trabalhos escolares do zero, apenas com um tema inserido no prompt. E na terceira, vamos criar uma IA que gera imagens do zero, a partir de um prompt digitado pelo usuário.',
      150,
      'L205',
      'Criando Inteligência Artificial com Python, construa 3 IAs do zero.',
      TypeEnum.Minicurso,
      SpeakersData[8]
    ),
    new Lecture(
      44,
      new Date(2023, 9, 24, 13, 0),
      `O processo seletivo da LEVTY atualmente acontece em três etapas principais: teste de raciocínio lógico, bate-papo com o RH e bate-papo técnico. A ideia é que essa primeira etapa seja feita na UFJF em parceria coma Semana da Computação e as demais acontecerão de forma remota pelo Google Meet.
      O teste de lógica é composto por 20 questões de múltipla escolha de lógica geral, nada específico da área de programação. Ele será realizado no dia 24/10/2023 às 13:00 e para participar basta se inscrever pelo site da LEVTY: https://levty.com/trainee e, caso o seu currículo seja selecionado, a LEVTY entrará em contato com mais informações sobre o teste de lógica.`,
      90,
      'S309',
      'Processo Seletivo Levty',
      TypeEnum.ProcessoSeletivo
    ),
    new Lecture(
      10,
      new Date(2023, 9, 24, 14, 30),
      'Inteligência Artificial e Aprendizado de Máquina tem ganhado grande espaço nos últimos anos em várias áreas do conhecimento. Dentro da Engenharia de Software, esses temas também tem sido investigados e empregados com frequência, sempre com a intenção de melhorar atividades e resultados. Nesta palestra, será fornecido um panorama de como IA e Aprendizado de Máquina tem sido empregadas na engenharia de software. Mais especificamente, serão mostrados exemplos do uso de Aprendizado de Máquina na identificação de smells de código fonte e de  recomendação de refatorações.',
      60,
      'S309',
      'Engenharia de Software e Inteligência Artificial: Panorama Geral e Aplicações em Aprendizado de Máquina',
      TypeEnum.Palestra,
      SpeakersData[10]
    ),

    new Lecture(
      22,
      new Date(2023, 9, 25, 15, 30),
      `Nessa conversa, iremos compartilhar a história da BITKA, empresa criada por grandes referências no mercado brasileiro na área de sistemas de apoio a decisão. Apesar de pouco tempo de existência, a BITKA se destaca pelo extraordinário crescimento desde então. Atualmente o time conta com aproximadamente 140 pessoas sendo 60% desses cientistas de dados.
      Aliando técnicas de análise prescritiva (otimização) e preditiva, a BITKA tem como objetivo criar soluções de planejamento aderentes à realidade dos clientes e que irão auxiliá-los a extrair o máximo potencial do seu negócio.
      A filosofia da empresa é construir um ambiente saudável e colaborativo entre as pessoas, ajudando cada indivíduo a atingir a excelência profissional e proporcionando o ambiente correto para a construção de soluções incríveis. Nesse ambiente a prioridade é valorizar as diferenças entre cada um dos indivíduos entendendo que elas são essenciais para construirmos sistemas aderentes e impactantes. Um acompanhamento de carreira, com feedbacks justos e transparentes, foi construído para sustentar esses pilares.
      Os Palestrantes, além de dar dicas sobre carreira, irão falar um pouco a respeito dos projetos inovadores e oportunidades abertas na BITKA
      `,
      60,
      'S309',
      'BITKA Analytics - Decisões Inteligentes, Resultados Extraordinários: História, Inovação e Oportunidades',
      TypeEnum.Palestra,
      [SpeakersData[22], SpeakersData[23]]
    ),
    new Lecture(
      12,
      new Date(2023, 9, 24, 17, 0),
      'A Transformação Digital no governo é um processo complexo que envolve mudanças culturais, tecnológicas e regulatórias. Enfrentar esses desafios é essencial para melhorar a prestação de serviços públicos, aumentar a eficiência e atender às crescentes expectativas dos cidadãos em uma era cada vez mais digital.',
      60,
      'S309',
      'Transformação Digital para Governo e seus desafios',
      TypeEnum.Palestra,
      SpeakersData[12]
    ),
    new Lecture(
      13,
      new Date(2023, 9, 24, 19, 0),
      'Este minicurso explora os conceitos básicos de componentes, estilos, eventos, estado e uso de hooks da biblioteca React para desenvolvimento web. Um jogo no estilo idle clicker (Cookie Clicker, Universal Paperclips, Adventure Capitalist, etc.) é desenvolvido desde o início, passo a passo.',
      180,
      'L205',
      'Começando no React com um jogo idle clicker',
      TypeEnum.Minicurso,
      [SpeakersData[13], SpeakersData[47]]
    ),
    new Lecture(
      14,
      new Date(2023, 9, 24, 19, 0),
      'Esse minicurso possui como objetivo apresentar a sintaxe e a semântica da linguagem Python para os alunos, além de mostrar suas aplicações e importância. Ademais, serão introduzidas algumas das principais bibliotecas: Numpy, Matplotlib e Pandas, apresentando suas possíveis utilidades.',
      180,
      'L107',
      'Introdução à linguagem de programação Python',
      TypeEnum.Minicurso,
      [SpeakersData[14], SpeakersData[38]]
    ),
    new Lecture(
      15,
      new Date(2023, 9, 24, 19, 0),
      'Mais informações abaixo',
      180,
      'Lab 2 Engenharia Computacional',
      'Hackathon 4Matt',
      TypeEnum.Competicao,
      SpeakersData[15]
    ),
  ],
  // Quarta
  [
    new Lecture(
      16,
      new Date(2023, 9, 25, 8, 0),
      'Aprenda o básico de Linux e scripts para automatização de compilação e execução de softwares. Trabalharemos com Makefile, Bash e CMake. Além disso, passaremos pelas partes mais importantes de um sistema operacional Linux, aprendendo o básico no caminho para dominar o assunto.',
      240,
      'L205',
      'Carpintaria de Software',
      TypeEnum.Minicurso,
      [SpeakersData[16], SpeakersData[38]]
    ),
    new Lecture(
      17,
      new Date(2023, 9, 25, 8, 0),
      'No minicurso, serão abordados tópicos básicos de GIT/GITHUB, a fim de auxiliar os alunos no versionamento de códigos durante os projetos desenvolvidos na Universidade. No geral, ensinaremos sobre clonagem de repositório, como criar e atualizar um repositório. além do básico da utilização de branches e merge.',
      240,
      'L107',
      'Do zero ao básico de GIT/GITHUB',
      TypeEnum.Minicurso,
      [SpeakersData[17], SpeakersData[54], SpeakersData[55], SpeakersData[56]]
    ),
    new Lecture(
      18,
      new Date(2023, 9, 25, 8, 0),
      `A BITKA, empresa que cria soluções inovadoras na área de sistemas de apoio a decisão, está à procura de talentos para preencher futuras vagas nas áreas de TI, Otimização e Análise Preditiva.
      Faremos na Semana da Computação a primeira etapa do processo seletivo, que será aberta para candidatos que estão cursando do 4º período para frente (quem estiver em períodos anteriores a esses podem enviar o currículo para cadastramos na nossa base de talentos para futuras oportunidades).
      Iremos considerar currículos para vagas efetivas ou part-time dependendo da proximidade de formatura de cada candidato.
      Temos como prioridade construir um ambiente saudável, colaborativo e justo entre as pessoas para que possamos construir soluções incríveis. Venha trabalhar em uma empresa que está em pleno crescimento e que investe na carreira das suas pessoas.
      Os interessados, devem preencher o formulário seguinte: https://forms.office.com/r/tPMeEBHFy9
      Logo após, o agendamento do horário da conversa deve ser feito pelo link: https://calendly.com/livio-guerra/xxvsecomp-conversa-bitka`,
      240,
      'Sala de Reuniões DCC',
      'Processo Seletivo BITKA',
      TypeEnum.ProcessoSeletivo,
      SpeakersData[18]
    ),
    new Lecture(
      20,
      new Date(2023, 9, 25, 14, 0),
      'Este minicurso tem como objetivo o ensino da linguagem de marcação para criação de documentos, chamada LaTeX, apresentando suas utilidades, vantagens e desvantagens.',
      150,
      'L107',
      'LaTeX: Criação de documentos e artigos técnicos e científicos',
      TypeEnum.Minicurso,
      SpeakersData[20]
    ),
    new Lecture(
      21,
      new Date(2023, 9, 25, 14, 0),
      'Este curso apresentará uma breve introdução ao Ansys, um software de simulação amplamente utilizado na indústria para a solução de  diversos problemas de engenharia. Ao decorrer do curso, o aluno será introduzido a esta ferramenta, apresentando, sua interface, seus recursos e possibilidades de uso. Também será desenvolvida uma simulação por completo, desde a criação da geometria do problema, passando pela criação da malha, análise da física aplicada, validação e análise dos resultados. Ao final, espera-se que o aluno adquira conhecimento essencial sobre simulações e que esteja apto para começar a utilizar o Ansys.',
      150,
      'Lab 2 Engenharia Computacional',
      'Introdução a simulações computacionais com Ansys',
      TypeEnum.Minicurso,
      [SpeakersData[21], SpeakersData[36]]
    ),
    new Lecture(
      43,
      new Date(2023, 9, 23, 17, 0),
      '',
      60,
      'S309',
      'Apresentação dos cursos de pós-graduação - PGCC + PGMC',
      TypeEnum.Palestra,
      [SpeakersData[48], SpeakersData[49]]
    ),
    new Lecture(
      23,
      new Date(2023, 9, 25, 19, 0),
      'Com o aumento do poder computacional, técnicas numéricas para a solução de problemas de engenharia se tornaram recorrentes na indústria. Os métodos numéricos utilizados na análise de problemas que envolvem mecânica dos fluidos e transferência de calor em escoamentos, são comumente referenciados como Dinâmica dos Fluidos Computacional, ou pela sigla CFD (Computational Fluid Dynamics). Esses métodos permitem obter aproximações numéricas para as equações de conservação que regem os fenômenos físicos de campos de escoamento. A dinâmica da modernidade indica que a aplicação de ferramentas de CFD será cada vez mais comum em indústrias e instituições de pesquisa. Esse panorama aponta a necessidade de divulgação científica e capacitação de profissionais capazes de operar com as mais novas ferramentas do mercado.',
      60,
      'https://www.youtube.com/watch?v=KI9s6PQxXto',
      'O que é CFD?',
      TypeEnum.Palestra,
      SpeakersData[24]
    ),
    new Lecture(
      24,
      new Date(2023, 9, 25, 20, 0),
      'Você já parou para pensar como os Modelos de Linguagem estão transformando nossa forma de interagir, aprender e comunicar? Essas tecnologias estão no centro das revoluções digitais recentes, influenciando diversas áreas da sociedade. Nesta palestra, você irá entender um pouco sobre como funcionam as LLMs, suas limitações, riscos, aplicações bem como questões éticas e sociais.',
      60,
      'https://www.youtube.com/watch?v=wDaG-Kh5shc',
      'Modelos de Linguagem e seus impactos na sociedade',
      TypeEnum.Palestra,
      SpeakersData[25]
    ),
    new Lecture(
      25,
      new Date(2023, 9, 25, 21, 0),
      'Nascido e estudado em Juiz de Fora, escrevi meu primeiro programa de IA nos meados dos anos noventa. Explorei abordagens simbólicas e conexionistas, trabalhei em universidades, empresas grandes e pequenas, cada uma com suas próprias inclinações metodológicas. Nessa conversa, vou falar de algumas lições aprendidas nesse caminho e abrir um bate papo para alunos que estejam interessados em seguir carreira no exterior, ou em startups, e compartilharei minhas opiniões sobre os melhores caminhos nesse sentido.',
      60,
      'https://www.youtube.com/watch?v=_gAnWXWYwZc',
      'Minha Jornada em Inteligência Artificial -- Era Uma Vez, Quando Redes Neurais Eram Curiosidade Histórica...',
      TypeEnum.Palestra,
      SpeakersData[26]
    ),
  ],
  // Quinta
  [
    new Lecture(
      26,
      new Date(2023, 9, 26, 7, 30),
      'Visita ao Campo Experimental da Embrapa Gado de Leite em Coronel Pacheco. Inscrições encerradas.',
      670,
      'Saída às 7:30 da manhã em frente à APES',
      'Visita Técnica à EMBRAPA',
      TypeEnum.VisitaTecnica
    ),
    new Lecture(
      27,
      new Date(2023, 9, 26, 8, 0),
      'Neste curso introdutório, desenvolveremos uma aplicação simples usando o Next.js, um dos frameworks web mais modernos do mercado. Abordaremos conceitos como roteamento, componentes de servidor, componentes de cliente, invalidação de cache e estilização com Tailwind CSS. Embora seja destinado a iniciantes, é necessário ter noções de HTML/CSS/Javascript e é desejável alguma familiaridade com os fundamentos do React.',
      240,
      'L107',
      'Desenvolvendo uma aplicação com Next.js e Tailwind CSS',
      TypeEnum.Minicurso,
      [SpeakersData[27], SpeakersData[35]]
    ),
    new Lecture(
      28,
      new Date(2023, 9, 26, 10, 0),
      'Neste curso, os participantes serão apresentados ao Visual Studio Code (VS Code), um editor de código-fonte desenvolvido pela Microsoft. O VS Code é um software gratuito e de código aberto que oferece suporte a diversas linguagens de programação e plataformas. O curso aborda uma série de tópicos, come ̧cando com uma introdução VS Code, destacando suas vantagens em relação a  outros editores de código e demonstrando como sua utilização pode aumentar a produtividade dos desenvolvedores. Em seguida, exploramos o conceito de Extensão, com foco especial na extensão Git. Outro aspecto importante do curso são os atalhos de teclado disponíveis no VS Code, essenciais para agilizar o fluxo de trabalho dos desenvolvedores.Exemplos práticos de atalhos são fornecidos para demonstrar como utilizá-los eficazmente. Além disso, abordamos a customização manual do VS Code, permitindo que os participantes ajustem o ambiente de desenvolvimento de acordo com suas preferências individuais. Por fim, discutimos como a Inteligência Artificial (IA)  é incorporada ao VS Code para melhorar a usabilidade e a produtividade dos desenvolvedores. Esta seção fornece insights sobre as tecnologias inovadoras que tornam o VS Code uma ferramenta de desenvolvimento poderosa.',
      120,
      'L205',
      'Dominando o VS Code',
      TypeEnum.Minicurso,
      [SpeakersData[28], SpeakersData[42], SpeakersData[43]]
    ),
    new Lecture(
      29,
      new Date(2023, 9, 26, 14, 0),
      'Este minicurso busca explorar e recriar as mecânicas de movimentação da Madeline, protagonista do jogo Celeste. Nele, você aprenderá a montar habilidades da personagem, como dashes, wall jumps e o "coyote time", que são fundamentais em jogos de plataforma.',
      240,
      'L205',
      'Recriando as mecânicas de Celeste na Unity',
      TypeEnum.Minicurso,
      [SpeakersData[29], SpeakersData[30]]
    ),
    new Lecture(
      30,
      new Date(2023, 9, 26, 14, 0),
      'O minicurso tem como objetivo desenvolver habilidades introdutórias nas linguagens de marcação da web HTML e CSS. Além disso, com a realização do curso, o aluno estará apto a criar layouts a partir do zero e será apresentado a tecnologias que simplificam e potencializam esse processo, tais como Bootstrap e React.',
      240,
      'L107',
      'Fundamentos de desenvolvimento Web',
      TypeEnum.Minicurso,
      [SpeakersData[31], SpeakersData[44], SpeakersData[45], SpeakersData[46]]
    ),
    new Lecture(
      31,
      new Date(2023, 9, 26, 19, 0),
      'Nesta palestra são exploradas técnicas de modelagem e padrões de projeto que permitem uma boa concepção de arquiteturas de sistema de informação com uso de microsserviços.',
      60,
      'S401',
      'Desafios no desenvolvimento de sistemas eficientes com microsserviços',
      TypeEnum.Palestra,
      SpeakersData[32]
    ),
    new Lecture(
      32,
      new Date(2023, 9, 26, 20, 0),
      'O mercado de dados está em alta e em constante evolução, vamos explorar as necessidades que as empresas têm para alcançar a cultura data driven hoje e quais papéis e responsabilidades cada profissional de dados deve possuir para prosperar na área.',
      60,
      'S401',
      'Carreira em Dados - O que as empresas realmente precisam?',
      TypeEnum.Palestra,
      SpeakersData[33]
    ),
    new Lecture(
      33,
      new Date(2023, 9, 26, 21, 0),
      'Prepare-se para uma jornada de descoberta, aprendizado, crescimento profissional e Internacional. Não perca esta oportunidade de dar o primeiro passo rumo a uma carreira promissora na ServiceNow. Junte-se a nós neste evento e comece a trilhar o caminho para o sucesso na maior plataforma SaaS do mundo. Então, se você está a fim de bater um papo sobre SaaS, ServiceNow,  governança de software, ou simplesmente quer pegar umas dicas com um verdadeiro mestre na área, o Bruno é o cara! Compareça e veja como ele pode te ajudar a dominar o mundo da TI',
      60,
      'S401',
      'Como Iniciar sua Carreira Internacional em uma das maiores plataformas SaaS do Mundo: ServiceNow',
      TypeEnum.Palestra,
      SpeakersData[34]
    ),
  ],
  // Sexta
  [
    new Lecture(
      34,
      new Date(2023, 9, 27, 8, 0),
      'Maratona de Programação JR',
      240,
      'Lab 2 Engenharia Computacional',
      'Maratona de Programação JR',
      TypeEnum.Competicao
    ),
    new Lecture(
      35,
      new Date(2023, 9, 27, 8, 0),
      'Maratona de Programação',
      240,
      'L205',
      'Maratona de Programação',
      TypeEnum.Competicao
    ),
    new Lecture(
      36,
      new Date(2023, 9, 27, 8, 0),
      'O minicurso oferece uma introdução abrangente e prática às aplicações da linguagem de programação Python no contexto do mercado financeiro. Durante o curso, os participantes aprendem a utilizar bibliotecas específicas, como Pandas e NumPy, para coletar, analisar e visualizar dados financeiros, bem como a implementar estratégias de análise quantitativa e backtesting de algoritmos de negociação. Além disso, são abordados tópicos como a obtenção de dados de mercado em tempo real, a construção de modelos de risco e a automação de tarefas rotineiras relacionadas a finanças, preparando os alunos para explorar oportunidades profissionais no setor financeiro com o auxílio da programação em Python.',
      240,
      'L107',
      'Python Aplicado ao Mercado Financeiro',
      TypeEnum.Minicurso,
      SpeakersData[37]
    ),
    new Lecture(
      37,
      new Date(2023, 9, 27, 14, 0),
      'Para ampliar a inserção e a permanência de mulheres na área de Ciência da Computação e afins, percebe-se a necessidade de investir em iniciativas com tal propósito. Em sua terceira edição, o Café das Minas  - Edição Especial da Semana da Computação 2023 discutirá assuntos relacionados a questões de gênero e a Ciência da Computação – histórias de sucesso, políticas de incentivo e formas de engajamento e atração de mulheres, para as carreiras associadas à área. Organizado na forma de Mesa Redonda, nesta Edição Especial, o Café das Minas é centrado em debater problemas relacionados à mulher, tanto do ponto de vista de mercado de trabalho quanto de inclusão e alfabetização digital.',
      90,
      'S402',
      'Mesa Redonda: Mulheres e a TI: Oportunidades e carreira',
      TypeEnum.Palestra,
      [
        SpeakersData[39],
        SpeakersData[3],
        SpeakersData[4],
        SpeakersData[5],
        SpeakersData[40],
        SpeakersData[50],
        SpeakersData[57],
      ]
    ),
    new Lecture(
      38,
      new Date(2023, 9, 27, 14, 0),
      `Resultado da Competição em IA`,
      90,
      'L205',
      'Competição de IA - Resultado',
      TypeEnum.Competicao,
      SpeakersData[2]
    ),
    new Lecture(
      39,
      new Date(2023, 9, 27, 15, 30),
      'Nesta conversa, vamos falar como funcionam os grandes modelos de linguagem, em especial a ferramenta ChatGPT, bem como os seus riscos, limitações e desafios. Na conversa também será abordada a experiência da pesquisadora no desenvolvimento de modelos de linguagem voltados para a língua portuguesa.',
      90,
      'S402',
      'ChatGP Quê?',
      TypeEnum.Palestra,
      SpeakersData[40]
    ),
    new Lecture(
      40,
      new Date(2023, 9, 27, 17, 0),
      'O que grandes referências como a Apple, IBM e até o FBI têm em comum? A aplicação de metodologias ágeis no dia a dia de projetos de alta complexidade e incerteza. Porém, a agilidade vai além da aplicação do Kanban ou frameworks como o Scrum. Nesta palestra introduziremos os valores do mindset ágil e as principais práticas utilizadas para que você já comece a aplicá-las em seus projetos e colha os benefícios.',
      60,
      'S402',
      'Agilidade em Projetos',
      TypeEnum.Palestra,
      SpeakersData[41]
    ),
    new Lecture(
      41,
      new Date(2023, 9, 27, 19, 0),
      'Encerramento do evento e premiação dos Hackathons',
      60,
      'Anfiteatro do ICE',
      'Encerramento com premiação',
      TypeEnum.ShowTalentos
    ),
    new Lecture(
      42,
      new Date(2023, 9, 27, 20, 0),
      'Show de Talentos',
      120,
      'Anfiteatro do ICE',
      'Show de Talentos',
      TypeEnum.ShowTalentos
    ),
  ],
];
