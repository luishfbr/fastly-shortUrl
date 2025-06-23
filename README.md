# FASTLY-SHORTURL

Aplicativo desenvolvido utilizando Vite/ReactTs + SWC com ShadcnUI e Axios no FrontEnd, no backend com NodeJs/Elysia/Prisma e Sqlite... 
<br/>
Ele possui Endpoints de criação e de fetch dos slugs e urls originais, nada mais é do que um encurtador de URL, o banco de dados possui algumas curiosidades, como por exemplo contador de clicks na URL, ao criar uma URL encurtada, essa URL terá como tempo 1 dia, após isso será expirada.
<br/>
Ao criar uma nova url, será enviado ao FrontEnd o Slug para redirecionamento, o link enviado possui uma loading page que efetua um useEffect para buscar as informações de url originais, caso encontre, será redirecionado para o site, caso não encontre será redirecionado para a home page do encurtador, e aparecerá uma mensagem de erro...
<br/>
Todos os tratamentos de erros feitos, caso tenha alguma dúvida, entre em contato:
<br/>
Utilizei o docker para rodar a aplicação local e realizar os testes.
<br/>
<br/>
luishenriquefonte223@gmail.com
