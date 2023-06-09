const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector ('[data-video]');
const botaTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoEnviarFoto = document.querySelector("[data-enviar]");

let imageURL = '';

botaoIniciarCamera.addEventListener('click', async function (){
    const iniciaVideo = await navigator.mediaDevices
    .getUserMedia({video:true, audio:false})

    botaoIniciarCamera.style.display = 'none';
    campoCamera.style.display = 'block';

    video.srcObject = iniciaVideo;
})

botaTirarFoto.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.heigth);

    imageURL = canvas.toDataURL('image/jpeg');
    
    campoCamera.style.display = "none";
    mensagem.style.display = 'block';
})

botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = '../pages/abrir-conta-form-3.html';
})