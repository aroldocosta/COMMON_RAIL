## Deploy

``` scp -rv /Projects/microLet/REPOSITORY/COMMON_RAIL/front/dist/rail/ root@oficinabr.com:/home/COMMON_RAIL/front ```

``` scp -v /Projects/microLet/REPOSITORY/COMMON_RAIL/back/rail/target/rail-0.0.1-SNAPSHOT.jar root@oficinabr.com:/home/COMMON_RAIL/back ```

## Html2Pdf
-  https://www.positronx.io/angular-pdf-tutorial-export-pdf-in-angular-with-jspdf/

   **Quebra de página**
-  https://shamaahlawat.medium.com/page-split-using-jspdf-and-html2canvas-in-react-js-while-downloading-pdf-6c75da960019

   **Config**
-  Adiconar "allowSyntheticDefaultImports": true na seção "angularCompilerOptions" do arquivo "tsconfig.json"

## Postgres
 ### Backup e restauração de dados
 - https://www.postgresql.org/docs/current/app-pgdump.html

   - 1 To dump a database called mydb into an SQL-script file:

      ``` $ pg_dump mydb > db.sql ```

   - 2 To reload such a script into a (freshly created) database named newdb:

      ``` $ psql -d newdb -f db.sql ```

## Issues
	
- 1 (x) As informacoes dos bicos so salva correto se tiver numero apos a virgula caso contrario o numero inteiro passa pra casa decimal
- 2 (x) No celular nao aparece o botao salvar dados no teste

### ----------------------09/12/23---------------------
- 3 (x) Na tela de planos altera mais nao apaga, pergunta se quer apagar mais nao apaga
- 4 (x) Na tela de injetores mudar o nome "tipo" para "plano"
- 5 (x) Na tela de injetores altera mais nao apaga, pergunta se quer apagar mais nao apaga
- 6 (x) Ao criar um novo teste, traz todos valores lidos do teste anterior (Concordamos em ser assim mesmo)

### ----------------------10/12/23----------------------
- 7 (x) Na tela principal nao apaga um teste
- 8 (x) No celular nao aparece o botao salvar teste, aparece e NOVO TESTE, mais salva (Hora da certo e Hora da errado)

### ----------------------11/12/23---------------------
- 9 (x) No celular na tela de criacao de teste ao selecionar o injetor nao ta sugerindo o plano
- 10 (x) Ao criar um um teste EX: 1/[] nao ta vindo o numero de sequencia

### ----------------------12/12/23----------------------
- 11 (x) Nas telas de cadastro criar bloqueio pra nao cadastrar CODIGO, PLACA E MODELO REPETIDO

### ‐---------‐-----------13/12/23‐-----------------------------
- 12 () Quando selecino teste ex: teste 1 sequencia 3 ele mostra 1/[] ou 1/[sequencia mostrada anterior]
	saio e seleciono teste 1 sequencia 3 novamente ai mostra 1/[3] (so foi observado o evento no meu celular mod A71 samsung)

### ‐---------‐-----------18/12/23‐-----------------------------
- 13 (x) inserir filtros em mais de uma coluna ao mesmo tempo
- 14 (x) Substituir a cor laranja pela cor verde escuro 41AE1E
- 15 (x) Ao filtrar uma OS manter o filtro ate que solicite remover filtro
	(resolveu parcialmente pois se eu abrir relatorio o filtro sai)

### ‐---------‐-----------27/12/23‐-----------------------------
- 16 (x) Na tela principal na coluna cliente ao clicar em cliente aparece e sequencia e nao seleciona

### ‐---------‐-----------07/01/24‐-----------------------------
- 17 () Na tela de teste substituir o passo medidas elétricas por passe de arranque
- 18 () criar passo carga parcial 2 e 3
- 19 () criar passo estaquidade

### SOLUCOES DE USABILIDADES
- 1 (x) Selecionar edicao do bico pela linha toda
- 2 (x) Ao salvar um teste voltar para o grupo da mesma "OS"
- 3 (x) Diminuir a largura das colunas: INJETOR, SEQUENCIA, ORD. SERVICO, EDT e REM, para nao precisar barra de rolagem em baixo.
- 4 (x) Ao salvar um teste manter a ordem dos injetores 1, 2, 3, 4

### ----------------------10/12/23----------------------- 
- 5 (x) Estando na tela de edicao de teste e importante ver qual e a sequencia
- 6 (x) Estando na tela de edicao de teste e importante ter um botao "VOLTAR" ao lado MODELO INJETOR


## MVP

### Proposta de valor
   - Por que o cliente precisa do produto/serviço?
   - Qual solução oferece?
   - Como utilizar?
   - Por que o cliente vai escolher este produto
   - O que agrega valor ao produto

### Público certo 
   - Deve ter o mesmo perfil do public alvo da empresa

### Tempo de teste
   - Definir um tempo suficiente para avaliar
     se o produto tem aceitação

### Teste do produto
   - Acompanhar, treinar e avaliar a utilização do produto
     pelo cliente

### Feedbacks
   - Entender os retornos(feedbacks) do cliente e fazer
     correções e adaptações que façam sentido para o produto    