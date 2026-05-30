const sharp = require('sharp');
const path = require('path');

const entrada = path.join(__dirname, '../public/images/lactifoz-logo.png');
const saida   = path.join(__dirname, '../public/images/lactifoz-logo-transparente.png');

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

      // Remove pixels próximos de branco (threshold 230)
      if (r > 230 && g > 230 && b > 230) {
        data[i + 3] = 0;
      }
    }

    return sharp(Buffer.from(data), {
      raw: { width, height, channels },
    })
      .png()
      .toFile(saida);
  })
  .then(() => console.log('Logo transparente criado:', saida))
  .catch((err) => console.error('Erro:', err));
