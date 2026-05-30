const sharp = require('sharp');
const path  = require('path');

const entrada = path.join(__dirname, '../public/images/lactifoz-logo.png');
const saida   = path.join(__dirname, '../public/images/lactifoz-peixe-branco.png');

sharp(entrada)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const { width, height, channels } = info;

    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Ignorar pixels brancos (fundo)
      if (r > 220 && g > 220 && b > 220) {
        data[i + 3] = 0;
        continue;
      }

      // Manter apenas os pixels que fazem parte do peixe (azul/teal)
      // O peixe tem tons de azul médio/ciano; o texto abaixo é preto/cinza
      const ehAzul  = b > r + 20 && b > g && b > 80;
      const ehCiano = b > 100 && g > 120 && r < 150;
      const ehNavy  = r < 80  && g < 100 && b < 160 && b > 60;

      if (ehAzul || ehCiano || ehNavy) {
        // Torna branco
        data[i]     = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
        data[i + 3] = 255;
      } else {
        // Remove o resto (texto preto, cinza, etc.)
        data[i + 3] = 0;
      }
    }

    return sharp(Buffer.from(data), {
      raw: { width, height, channels },
    })
      .png()
      .toFile(saida);
  })
  .then(() => console.log('Criado:', saida))
  .catch(console.error);
