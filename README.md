## Deploy

### Ambiente de teste
``` scp -rv /Projects/microLet/REPOSITORY/COMMON_RAIL/front/dist/rail/* root@oficinabr.com:/home/COMMON_RAIL/fr_test ```

``` scp -v /Projects/microLet/REPOSITORY/COMMON_RAIL/back/rail/target/rail-0.0.1-SNAPSHOT.jar root@oficinabr.com:/home/COMMON_RAIL/bk_test ```

### Ambiente de produção
``` scp -rv /Projects/microLet/REPOSITORY/COMMON_RAIL/front/dist/rail/* root@oficinabr.com:/home/COMMON_RAIL/fr_prod ```

``` scp -v /Projects/microLet/REPOSITORY/COMMON_RAIL/back/rail/target/rail-0.0.1-SNAPSHOT.jar root@oficinabr.com:/home/COMMON_RAIL/bk_prod ```


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
- 12 (x) Quando selecino teste ex: teste 1 sequencia 3 ele mostra 1/[] ou 1/[sequencia mostrada anterior]
	saio e seleciono teste 1 sequencia 3 novamente ai mostra 1/[3] (so foi observado o evento no meu celular mod A71 samsung)

### ‐---------‐-----------18/12/23‐-----------------------------
- 13 (x) inserir filtros em mais de uma coluna ao mesmo tempo
- 14 (x) Substituir a cor laranja pela cor verde escuro 41AE1E
- 15 (x) Ao filtrar uma OS manter o filtro ate que solicite remover filtro	

### ‐---------‐-----------27/12/23‐-----------------------------
- 16 (x) Na tela principal na coluna cliente ao clicar em cliente aparece e sequencia e nao seleciona

### ‐---------‐-----------07/01/24‐-----------------------------
- 17 (x) Na tela de teste substituir o passo medidas elétricas por passe de arranque
- 18 () criar passo carga parcial 2 e 3 (considerando que a 1 ja tem)
- 19 () criar passo estaquidade (Antes do passo arranque)

### ‐---------‐-----------10/01/24‐-----------------------------
- 20 (x) O botao salvar superior da tela principa ao lado esquerdo do nome injetor nao ta salvando
- 21 (x) Os tres campos que foram criados, pulso, frequencia e rotacao, nao aceita auteracao
- 22 (x) No cadastro de planos no item carga parcial a frequencia aparece p/m os outros aparece Hz

### ‐---------‐-----------13/01/24‐-----------------------------
- 23 (x) Ao editar a senha de um usuario, o mesmo nao acessa mais o sistema
- 24 (x) Esta cadastrado um admin chamado ivan que nao aparece na lista mais acessa o sistema
- 25 (x) Esta cadastrado um usuario chamado Wando que nao aparece na lista mais acessa o sistema
- 26 (x) O administrador de uma oficina tem acesso a outras (que nao deve ter)

### ‐---------‐-----------27/01/24‐-----------------------------
- 27 (x) Oficina no teste 1 e 2 cria e edita mais nao remove -> corrigido
- 28 (x) Usuario no teste 1 cria e edita mais nao remove -> corrigido
- 29 (x) No teste 7.1 o usuario de outra oficina edita e deleta plano e injetor da oficina de referencia -> corrigido
- 30 (x) No teste 7.2 o usuario nao cria nem edita porque ja aparece com a lista de plano e injetor da oficina referencia - Nao entendi, era    pra criar um usuario OPERADOR
- 31 (x) A recodiesel edita plano e injetor de outra oficina mais nao remove (Acho que nao deve editar tambem) -> Temos que pensar melhor, pq se o cliente for enrolado e pedir pra corrigir ou fazer o plano/injetor dele, como fariamos?
- 32 (x) Admin de outra oficina quando edita plano e ou injetor da recodiesel ainda muda pra oficina dele o mesmo acontece entre Ofic A e B -> corrigido nao consegue mais nem editar


### SOLUCOES DE USABILIDADES BACKLOG
- 1 (x) Selecionar edicao do bico pela linha toda
- 2 (x) Ao salvar um teste voltar para o grupo da mesma "OS"
- 3 (x) Diminuir a largura das colunas: INJETOR, SEQUENCIA, ORD. SERVICO, EDT e REM, para nao precisar barra de rolagem em baixo.
- 4 (x) Ao salvar um teste manter a ordem dos injetores 1, 2, 3, 4

### ----------------------10/12/23----------------------- 
- 5 (x) Estando na tela de edicao de teste e importante ver qual e a sequencia
- 6 (x) Estando na tela de edicao de teste e importante ter um botao "VOLTAR" ao lado MODELO INJETOR

### ----------------------10/01/24-----------------------
- 7 (x) Trocar a sequencia de marcha lenta com carga parcial (carga parcial marcha lenta para marca lenta carga parcial)

## MVP

### Proposta de valor
   - Por que o cliente precisa do produto/servico?
   - Qual solucao oferece?
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


## LISTA DE TESTE DE SOFTWARE (Nao confundir com teste de injetor)
### PLANOS
#### Teste 1
1. Criar um plano e salvar. **Esperado -> plano criado**
2. Editar plano e salvar.   **Esperado -> plano modificado**
3. Listar plano.            **Esperado -> lista de planos**
4. Remover plano            **Esperado -> plano removido**

#### Teste 2
1. Criar um plano
2. Criar um Injetor e associar ao plano criado
3. Remover o plano.
4. Verificar alerta (se mostra que vai remover o injetor associado)
5. Confirmar
6. Conferir se o plano e o injetor foram removidos.
**Esperado -> Plano e injetor removidos.**

#### Teste 3
1. Criar um plano e salvar.
2. Editar plano e preencher todos os campos/atributos do plano
3. Salvar plano
4. Conferir se todos os campos/atributos foram salvos corretamente.   
**Esperado -> campos/atributos salvos.**   
            
### VEICULOS
#### Teste 1
1. Criar um veiculo e salvar. **Esperado -> veiculo criado**
2. Editar veículo e salvar.   **Esperado -> veículo modificado**
3. Listar veículo.            **Esperado -> lista de veículos**
4. Remover veículo            **Esperado -> veículo removido**

### INJETORES
#### Teste 1
1. Criar um injetor e salvar. **Esperado -> injetor criado**
2. Editar injetor e salvar.   **Esperado -> injetor modificado**
3. Listar injetor.            **Esperado -> lista de injetors**
4. Remover injetor            **Esperado -> injetor removido**

### OFICINAS
#### Teste 1
1. Criar uma oficina e salvar. **Esperado -> oficina criada**
2. Editar oficina e salvar.    **Esperado -> oficina modificada**
3. Listar oficina.             **Esperado -> lista de oficinas**
4. Remover oficina             **Esperado -> oficina removida**

#### Teste 2
1. Criar um oficina
2. Criar um Usuário e associar a oficina criada
3. Remover a oficina.
4. Verificar alerta (se mostra que vai remover o usuário associado)
5. Confirmar
6. Conferir se o oficina e o usuário foram removidos.
**Esperado -> oficina e usuario removidos.**

### USUARIOS
#### Teste 1
1. Criar um usuário e salvar. **Esperado -> usuário criado**
2. Editar usuário e salvar.   **Esperado -> usuário modificado**
3. Listar usuário.            **Esperado -> lista de usuários**
4. Remover usuário            **Esperado -> usuário removido**

### TESTES(DE INJETOR)
#### Teste 1  
1. Criar um teste e salvar. **Esperado -> teste criado**
2. Editar teste e salvar.   **Esperado -> teste modificado**
3. Listar teste.            **Esperado -> lista de testes**
4. Remover teste            **Esperado -> teste removido**
**Obs: Repita o teste e utilize o botão NOVO inferior**

#### Teste 2
1. Criar um teste e salvar.
2. Editar teste e preencher todos os campos/atributos do teste
3. Salvar teste
4. Conferir se todos os campos/atributos foram salvos corretamente.   
**Esperado -> campos/atributos salvos.** 

#### Teste 3
1. Verificar filtro de numero de injetor (individualmente)
2. Verificar filtro de cliente (individualmente)
3. Verificar filtro de ordem de serviço(os) (individualmente)
4. Verificar filtro de data (individualmente)
5. Verificar filtro de modelo de injetor(injet) (individualmente)
6. Verificar filtro de veículo (individualmente)
**Esperado -> filtragem correta para cada campo.** 

#### Teste 4
1. Criar diversos cenarios de filtros combinados
   - Ex. NUM + CLIENTE,  CLIENTE + OS + INJETOR etc

**Esperado -> filtragem combinada correta para cada cenário.** 

#### Teste 5
1. Gerar relatorio por ordem de serviço
2. Verificar se todas as informações estão corretas
3. Baixar arquivo pdf
4. Verificar se o arquivo pdf está correto
**Esperado -> relatorio e arquivo pdf corretos.** 

#### Teste 6
1. Gerar relatorio por injetor
2. Verificar se todas as informações estão corretas
2. Verificar se gráficos de evolução estão corretas
4. Baixar arquivo pdf
5. Verificar se o arquivo pdf está correto
**Esperado -> relatorio e arquivo pdf corretos.** 

#### Teste 7 
 1. Verificar se usuário OPERADOR de outra oficina deleta/edita plano/injeto da oficina de referência
    - 1 Criar uma oficina
    - 2 Criar um usuário OPERADOR e adicionar a oficina recem criada
    - 3 Editar plano da oficina de referencia ->     **Esperado: O sistema deve impedir**
    - 4 Deletar plano da oficina de referência ->    **Esperado: O sistema deve impedir**
    - 3 Editar injetor da oficina de referencia ->   **Esperado: O sistema deve impedir**
    - 4 Deletar injetor da oficina de referênmcia -> **Esperado: O sistema deve impedir**

 2. Verificar se usuário OPERADOR cria/edita/deleta plano da propria oficina 
    - 1 Criar uma oficina
    - 2 Criar um usuário OPERADOR e adicionar a oficina recem criada
    - 3 Editar plano da oficina   recém criada ->  **Esperado:  Operação deve ser executada normalmente**
    - 4 Deletar plano da oficina   recém criada -> **Esperado:  Operação deve ser executada normalmente**
    - 3 Editar injetor da oficina  recém criada -> **Esperado:  Operação deve ser executada normalmente**
    - 4 Deletar injetor da oficina recém criada -> **Esperado:  Operação deve ser executada normalmente**

 3. Verificar se usuário ADMIN de outra oficina ve/edita/deleta plano/injetor da recodiesel 
    - 1 Criar duas oficinas (A e B)
    - 2 Criar um usuário ADMIN e adicionar a oficina A recem criada
    - 3 Criar 1 plano e 1 modelos de injetor na oficina B recém criada
    - 4 Locar na oficina A como usuario ADMIN recém criado
    - 4 Abrir lista de planos e injetores na oficina A -> **Esperado: Planos e injetores da oficina B nao devem ser exibidos**
    - 3 Editar plano da oficina B ->    **Esperado: Não deve ser possível**
    - 4 Deletar plano da oficina B ->   **Esperado: Não deve ser possível**
    - 3 Editar injetor da oficina B ->  **Esperado: Não deve ser possível**
    - 4 Deletar injetor da oficina B -> **Esperado: Não deve ser possível**

 4. Admin de outra oficina cria/edita/deleta plano/injetor da propria oficina
    - 1 Criar uma oficina
    - 2 Criar um usuário ADMIN e adicionar a oficina recem criada
    - 3 Editar plano da oficina    recém criada -> **Esperado:  Operação deve ser executada normalmente**
    - 4 Deletar plano da oficina   recém criada -> **Esperado:  Operação deve ser executada normalmente**
    - 3 Editar injetor da oficina  recém criada -> **Esperado:  Operação deve ser executada normalmente**
    - 4 Deletar injetor da oficina recém criada -> **Esperado:  Operação deve ser executada normalmente**

 #### Teste 8   
 1. Verificar endereço do ambiente de teste
    - 1 Colocar o endereço: https://rail.test.oficinabr.com na barra de endereços do navegador
    - 2 Clicar Enter -> **Esperado: Deve entrar na tela de login**
    - 3 Recarregar a página (Clicar em F5 ou no icone de recarregar a pagina) -> **Esperado: Deve continuar na pagina de Login**
    - 4 Colocar o endereço: https://rail.test.oficinabr.com/#/login na barra de endreço do navergador
    - 5 Clicar Enter -> **Esperado: Deve entrar na tela de login**

 2. Verificar endereço do ambiente de produção
    - 1 Colocar o endereço: https://rail.oficinabr.com na barra de endereços do navegaor
    - 2 Clicar Enter -> **Esperado: Deve entrar na tela de login**
    - 2 Recarregar a página (Clicar em F5 ou no icone de recarregar a pagina) -> **Esperado: Deve continuar na pagina de Login**
    - 3 Colocar o endereço: https://rail.oficinabr.com/#/login na barra de endreço do navergador
    - 4 Clicar Enter -> **Esperado: Deve entrar na tela de login**   