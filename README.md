# Semana da Computação UFJF - Edição 2023

Este projeto é a base para o site do evento Semana da Computação. O site é construído utilizando o framework Angular e hospedado no GitHub Pages. O site pode ser acessado em: [https://semana-computacao-ufjf.github.io/site/](https://semana-computacao-ufjf.github.io/site/).

Este projeto usa Angular na versão 16.2.1.

## Servidor de desenvolvimento

Rodar `ng serve` para um servidor de dev. Navegar para `http://localhost:4200/`. Hot-reload habilitado.

## Build

Para buildar o projeto, execute o comando `ng build`. Ele será armazenado na pasta `dist/`.

A fim de fazer o deploy no GitHub Pages, execute `"ng build --configuration production --base-href="https://semana-computacao-ufjf.github.io/site/"` (caso o local de deploy seja diferente, substitua a URL). Após isso, execute o comando `npx angular-cli-ghpages --dir=dist/sem-comp-23 ` para enviar o projeto para a branch gh-pages e atualizar o deploy.

## Estrutura do projeto

Este projeto utiliza Angular 16.2.1, assim como TypeScript 5.1.3. Certas dependências foram adicionadas ao projeto para facilitar o desenvolvimento, como o Bootstrap 5.3.2.

O ponto de entrada do projeto é `src/app/app.component.ts`. Aqui, há as informações para o evento que serão passadas aos componentes filhos. O arquivo `src/app/app.module.ts` é o módulo principal do projeto.
Os componentes, atualmente, estão na pasta `src/app/*`. Os componentes são:
- `src/app/alert/*`: Componente que exibe um alerta chamativo na tela (não é um toast);
- `src/app/awards/*`: Componente que exibe os prêmios relacionados às competições do evento;
- `src/app/banner/*`: Componente que exibe o banner do evento;
- `src/app/clock-cta/*`: Componente que exibe um contador regressivo para o evento;
- `src/app/contact-section/*`: Componente que exibe as informações de contato do evento, como redes sociais e localização;
- `src/app/donations/*`: Componente que explica e exibe as informações para doações que o evento faz com o valor arrecadado;
- `src/app/event-description/*`: Componente que explica o que é o evento;
- `src/app/footer/*`: Componente que exibe o rodapé do site;
- `src/app/logo/*`: Componente que cria o logo do site em forma textual;
- `src/app/navbar/*`: Componente que exibe o cabeçalho do site;
- `src/app/organizers-profile/*`: Componente que define a estrutura de um perfil de integrante da comissão organizadora do evento, o qual é exibida no componente abaixo;
- `src/app/organizers-list/*`: Componente que exibe a lista de integrantes da comissão organizadora do evento;
- `src/app/register-cta/*`: Componente que exibe os botões de registro no evento;
- `src/app/schedule/*`: Componente que exibe a programação do evento, com as informações das palestras e minicursos;
- `src/app/speakers-list`: Componente que exibe a lista de palestrantes e professores do evento;
- `src/app/supporters-list`: Componente que exibe a lista de patrocinadores e apoiadores do evento (obs: cuidado ao usar a palavra patrocinador/sponsor nas classes do site, pois bloqueadores de anúncio podem interferir no seu funcionamento. Portanto, a palavra supporter foi usada para substituir na estrutura do site).

Os arquivos dentro da pasta `src/app/shared/data` determinam as informações exibidas no site, visto que o projeto não conta com um banco de dados. Assim, todas as informações que seriam puxadas de um servidor estão nestes arquivos. Estas informações estão organizadas em Arrays de objetos cujas classes estão em `src/app/shared/classes`.

- O arquivo `AwardsData.ts` contém as informações sobre os prêmios relacionados às competições do evento, que são exibidas pelo componente `src/app/awards/*`;
- O arquivo `LecturesData.ts` contém as informações sobre as palestras, minicursos e palestrantes do evento, assim como horários, locais e outras informações úteis, a programação é exibida pelo componente `src/app/schedule/*`, já os palestrantes são exibidos pelo componente `src/app/speakers-list/*`;
- O arquivo `OrganizersData.ts` contém as informações sobre os integrantes da comissão organizadora do evento, que são exibidas pelo componente `src/app/organizers-list/*`;
- O arquivo `SupportersData.ts` contém as informações sobre os patrocinadores e apoiadores do evento, que são exibidas pelo componente `src/app/supporters-list/*`.

## Instruções de desenvolvimento:

- Pode ser interessante fazer o [Fork/Bifurcação do Repositório](https://docs.github.com/pt/get-started/quickstart/fork-a-repo) para se criar o site de outros anos, mas é importante que isto esteja alinhado às ;
- Deve-se manter as alterações documentadas (por meio de comentários em partes difíceis);
- O site deve ter [Acessibilidade](https://guia-wcag.com) como um dos seus pilares de desenvolvimento. Isso é importante porque a Universidade é um local para todes, e a função de um desenvolvedor web é garantir o acesso à informação disponível naquele site.

## Melhorias para o futuro

- Solicitar à UFJF um subdomínio para o site do evento;
- Adicionar routing ao projeto;
- Adicionar a edição 2022 do evento ao site do projeto (está na branch `edicao-2022`), deixando-a disponível para acesso;
- Adicionar links para as edições anteriores do evento ao site do projeto, deixando-as disponíveis para acesso (estão hospedadas no site da UFJF);
- Organizar os componentes por módulos, refazendo a estrutura;
- Utilizar BEM CSS para organizar o CSS do projeto;
- Melhorar a responsividade do site;
- Melhorar a acessibilidade do site;

## Contribuintes

- [Isadora Gonçalves Ferreira](https://github.com/isa56);
- [Lucas Paiva Santos](https://github.com/LucasPaivaSantos).
