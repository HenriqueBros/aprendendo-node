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

Para que possamos ter funcionalidade assíncrona, as aplicações podem adotar um dos dois caminhos a seguir. O primeiro seria criar uma *thread* para cada processo que consuma tempo. O resto do código poder ser distribuido dessa forma, em paralelo. O problema com essa solução é que as threads são **"caras"**, consumindo muitos recursos da máquina e gerando grande complexidade na aplicação.

O segundo caminho é adotar uma arquitetura baseada em eventos. Quando um processo que consome tempo é invocado, a aplicação não espera que ele termine. Em vez disso, o processo sinaliza quando ja tiver terminado pela emissão de um sinal de evento. Esse evento é adicionado à *fila de eventos*, ou *event loop*. Qualquer funcionalidade dependendo desse evento registra seu interesse nele, e quando o evento é finalizado retirado da fila e processado, a funcionalidade dependente é chamada, e dos dados relacionados ao evento são passadas a ela.

Tanto o javascript no navegador  quanto o no Node empregam o segundo caminho. No navegador, quando adicionamos um manipulador de cliques de mouse(*click handler*) a um elemento, o que você na verdade fez foi se "cadastrar"(ou assinar) um evento e fornecer uma função de callback, que será chamada quando o evento acontecer, liberando o resto da aplicação para que continue:

## Criando um função assincrona de callback

### Funcionalidades-chaves:

- Garanta que o último argumento seja uma função de callback.
- Crie uma objeto *Error* do Node e, se um erro ocorrer, devolva esse objeto como primeiro argumento da função callback.
- Se não ocorrerem erros, chame a função callback, atribua o valor *null* ao argumento de erro e passe ao callback quaisquer dados relevantes.
- A função de callback deve ser chamada de dentro da função *process.nextTick()* para garantir que não haja bloqueio.

## EventEmitter

Toda vez que virmos um objeto emitir um evento usando a palavra-chave **emit** e logo em seguida um evento tratado pela função **on**, estaremos presenciando o **EventEmitter** em ação.

O **EventEmitter** permite tratar eventos assíncronos no Node.