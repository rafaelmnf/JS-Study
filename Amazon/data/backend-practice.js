const xhr = new XMLHttpRequest(); // Creates a new HTTP message to sendo to the backend. Message = Request
// we are setting the req
xhr.open('GET', 'https://supersimplebackend.dev'); // First param is the type of HTTP request. Second param is where to sendo this HTTP message
// So we need a URL (Uniform Resource Locator), its like an address, but for the internet. Locates another computer
xhr.send();

// Para verificar as requisições deve-se proocurar em Network/Rede na inspeção da página e dar refresh cas não apareça de primeira