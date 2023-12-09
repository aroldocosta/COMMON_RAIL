## Deploy

scp -rv /Projects/microLet/REPOSITORY/COMMON_RAIL/front/dist/rail/ root@oficinabr.com:/home/COMMON_RAIL/front

scp -v /Projects/microLet/REPOSITORY/COMMON_RAIL/back/rail/target/rail-0.0.1-SNAPSHOT.jar root@oficinabr.com:/home/COMMON_RAIL/back

## Issues

###	PROBLEMAS ENCONTRADOS
- 1 (x) As informa��es dos bicos so salva correto se tiver numero apos a virgula caso contrario o numero inteiro passa pra casa decimal
- 2 (x) No celular n�o aparece o bot�o salvar dados no teste
----------------------------09/12/23-------------------------------
- 3 () Na tela de planos altera mais nao apaga
- 4 () Na tela de injetores mudar o nome "tipo" para "plano"
- 5 () Na tela de injetores n�o altera e nem apaga
- 6 () Ao criar um novo teste, traz todos valores lidos do teste anterior


		SOLU��ES DE USABILIDADES
- 1 (x) Selecionar edi��o do bico pela linha toda
- 2 (x) Ao salvar um teste voltar para o grupo da mesma "OS"
- 3 (x) Diminuir a largura das colunas: INJETOR, SEQUENCIA, ORD. SERVI�O,     EDT e REM, para nao precisar barra de rolagem em baixo.
- 4 (x) Ao salvar um teste manter a ordem dos injetores 1, 2, 3, 4

x -> reolvidas
