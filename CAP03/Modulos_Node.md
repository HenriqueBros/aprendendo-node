# Introdução aos módulos do Node e ao Node Package Manager(npm)

## Async, um módulo para gerenciamento eficiente de callbacks

### Padrões de codigos suportados:

- Waterfall:
  * Padrão em cascata. As funções são chamadas em sequência e o resultado de cada uma é passado como um item de um array para o último callback(esse padrão é chamado por outros padrões, como, por exemplo, o padrão seriado, **series**, e o padrão sequencial, **sequence**).
- Series:
  * Padrão seriado. As funções são chamadas em sequência e, opcionalmente, os resultados são passados como itens de um array à útlima fundão da callback.
- Parallel:
  * Padrão paralelo ou simultâneo. As funções são executadas em paralelo e, quando completadas, os resultados são passadas como itens de um array para o último callback(embora o array, resultante não seja parte do padrão de código em algumas interpretações do padrão paralelo).
- Whilst:
  * Padrão "faça enquanto". Chama uma função repedidamente, invocando o último callback apenas se um teste preliminar devolver o valor *false* ou se ocorrer algum erro.
- Queue:
  * Padrão fila. Chama as funções em paralelo até que um determinado **limite de simultaniedade** seja atingido, após o qual quaisquer novas funções aguardarão em fila até que uma das funções em execução seja encerrada.
- Untill:
  * Padrão "até que". Chama repetidamente uma função, invocando o último callback somente se um teste de pós-processamento retornar *false* ou ocorrer um erro.
- Auto:
  * Padrão automático. As funções são chamadas com base em requisitos predefinidos, cada função recebe os resultados dos callback imediatamente.
- Iterator:
  * Padrão Iterador. Cada função chama a próxima e é capaz de acessar individualmente a próximo iterador.
- Apply:
  * Padrão "aplicar". Uma função de continuação, com argumentos previamente aplicados, combinada com outras funções de controle de fluxo.
- NextTick:
  * Chama o callback na proxima varredura de um laço de eventos - baseados no *process.nextTick* do Node.

