# Projeto

- este projeto foi criado no curso de react js da rocketseat

## teoria

- Quando um componente redenriza outra vez?
  --- Hooks changed - mudou estado, contexto ou reducer
  --- props changed - mudou propriedades
  --- parent rerendered - component pai renderizou

- qual o fluxo de redenrização do react?
  --- react recria o HTML da interface daquele componente
  --- compara a versão do HTML reacriada com a versão anterior
  --- se mudou alguma coisa, ele reescreve o HTML na tela

## aprendizados

- tabelas
- criação de modal !!
- uso do reduce - no Sumary (usado quando preciso reduzir o meu arrays de uma forma diferente)
- criando seu próprio hooks
- **performance**
  --- contexto-selectors: Para que um component olhe comente para um item do contexto: use-context-selector
  --- useCalback: só recria a função na memoria quando a variavel de dependencia mudar
  --- memo: verifica se há alguma mudança nos hooks ou props para então permitir uma nova redenrização do html do component. (ter cuidado ao usar, somente em casos de components de caso de component com htmls muito complexo)
  --- useMemo: usar somente quando uma variavel ser repassada para varios components e esta ter um calculo custoso

## bibliotecas

- radix-ui - biblioteca que tem components mais flexiveis para estilização

- json-server - API REST Fake
  --- para rodar: npx json-server server.son -p 3333 -w

- react-hook-form, zod e @hookform/resolvers - biblioteca para lidar com formulários
  --- uso de campo controled (só usar quando o campo que temos não é um input nativo html) dentro do form : botões de entrada e saida no modal
