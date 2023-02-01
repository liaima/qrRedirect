import Qr from '../models/Qr.js';
import Scan from '../models/Scan.js';

export const getSlug = async (req, res) => {
  const { slug } = req.params;
  
  !slug && res.status(400).send({
    statusCode: res.statusCode,
    title: 'Slug not recived',
    message: 'No slug has recived!'
  });

  const qr = await Qr.findOne({ where: { slug } });
  if (qr) {
    const newScan = await Scan.create({
      qrId: qr.id,
      timestamp: new Date()
    })
    console.log(newScan);
    res.redirect(301, qr.url);
  }else{
    res.status(404).send({
      statusCode: res.statusCode,
      title: 'Slug not found',
      message: `Sorry, we cannot find ${slug}!`
    });
  }

}
