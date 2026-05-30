const sharp = require('sharp');
const path  = require('path');

const peixe  = path.join(__dirname, '../public/images/lactifoz-peixe-branco.png');
const saida  = path.join(__dirname, '../public/images/lactifoz-peixe-preview.png');

// Cria fundo azul-marinho (800x800) e sobrepõe o peixe branco ao centro
sharp({
  create: { width: 400, height: 400, channels: 3, background: { r: 10, g: 31, b: 63 } },
})
  .png()
  .toBuffer()
  .then((fundo) =>
    sharp(fundo)
      .composite([{ input: peixe, gravity: 'center' }])
      .toFile(saida)
  )
  .then(() => console.log('Preview criado:', saida))
  .catch(console.error);
