# Blocos de construção de Node: objeto globais, eventos e sua natureza assincrona.

## Objeto global:

Ao declarar uma variavel em modulo ou aplicação, não obtemos uma variavel disponivel globalmente, mas sim restrita ao modulo ou aplicação em que foi declarada. 

## Objeto process:

Oferece informação sobre o ambiente de execução. Alem disso, os processos de entra e saida padrão (I/O) ocorre por meio de *process*. Tambem podemos encerrar e sinalizar quando o *laço de eventos*(event loop) do node está no fim.

Os fluxos-padrão são canais de comunicação preestabelicidos entre uma aplicação e seu ambiente. Eles consiste de uma entrada padrão (*stdin*), uma saida padrão (*stout*) e uma saide erro padrão (stderr). Em uma aplicação Node, esses canais oferecem comunicação direta entre a aplicação em Node e o terminal.

O Node suporta canais com tres funções de processos:
- process.stdin: um fluxo de leitura stdin
- process.stout: um fluxo de escrita stout
- process.stderr: um fluxo de escrita stderr

Não podemos fechar nem encerrar esse fluxos dentro de uma aplicação.

As funções I/O do process herdam do **EventEmitter**, podem emitir eventos que podem ser capturados pelo seu codigos e processados.

## Buffers, typed arrays e strings

No Node, a classe *buffer* é a estrutura primária de dados usada na maioria das operações I/O e não podemos substitui-la diretamente por um *typed array*, fazê-lo provocaria um erro.

### O que é um *buffer* no Node?

É um bloco de dados binarios brutos que foram alocados fora da pilha interna do V8. É gerenciado pela classe *Buffer*. Uma vez alocada, o buffer não pode ser redimensioando.

O buffer é o tipo de dado default para acesso a arquivos: a não ser que uma codificação especifica seja fornecida quando ler e escrever em um arquivo, dos dados são inseridos ou extraidos buffers.

Podemos criar um buffer diretamente usando a palavra chave:
~~~ Javascript
let buf = new Buffer(24);
buf.fill(0);
~~~

Deve sempre inicializar o buffer, ele não inicia automaticamente. Podemos tambem preenchê-lo parcialmente, especificando o inicio e fim.

## Gerenciamento de callbacks e eventos assíncronos no Node

O javascript é **single-threaded**, o que o torna inerentemente síncrono. Isso significa que o javascript é executado, linha a linha, até que a aplicação seja finalizada. Como o Node é baseado no javascript, herda deste seu comportamento síncrono de uma unica thread.

Entretanto, se for necessária alguma funcionalidade que implique esperar pela ocorrência de alguma coisa, nossa aplicação ficara bloqueada(travada) até que a operação esteja terminada. A solução para evitar o bloqueio é o **event loop**.

## Filas de eventos (loop)

