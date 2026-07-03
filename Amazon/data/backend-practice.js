// Backend is another computer that manages our data
// Frontend send messages to the backend via HTTP

/** There are 4 types of request:
 *  GET = get something frm the backend
 *  POST = create something --> send data to the backend
 *  PUT = update something
 *  DELETE = delete something
 */

const xhr = new XMLHttpRequest(); // Creates a new HTTP message to send to the backend. Message = Request

// Quando mandamos um request para o servidor backend, demora um tempinho até a informação atravessar ambas as partes, então, deve-se esperar por um evento para que acione
// É preciso criar um eventListener antes de enviar a requisição, igual o passo de criar antes de clicar em um botao, por exemplo
xhr.addEventListener('load', () => {
    // load é o tipo de evento
    console.log(xhr.response);
})

// we are setting the req
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg'); // First param is the type of HTTP request. Second param is where to send this HTTP message
// So we need a URL (Uniform Resource Locator), its like an address, but for the internet. Locates another computer
xhr.send();
// Para verificar as requisições deve-se procurar em Network/Rede na inspeção da página e dar refresh caso não apareça de primeira

// Podemos enviar requisições diferentes pelos URL paths, o que vem depois do domain name -> ex: /hello
/* Status Code: 
    Starting with 4 (our problem) or 5 (backend's problem) (400, 404, 500) = failed
    Starting with 2 (200, 201, 204) = succeeded
*/

// A list of URL paths is called API (Application Programming Interface)
// Types of data that backend can respond: Text, JSON, HTML, Image

// Quando escrevemos a URL no navegador, fazemos uma requisição GET também, ai vai aparecer a resposta no próprio navegador (tela)
