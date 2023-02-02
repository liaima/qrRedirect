import Qr from '../models/Qr.js';
import Scan from '../models/Scan.js';
import fetch from 'node-fetch';

const getLocation = async (ip) => {
  var fetch_res = await fetch(`https://ipapi.co/${ip}/json/`);
  var fetch_data = await fetch_res.json()

  res.send(`You are from ${fetch_data.region}`)
}

export const getSlug = async (req, res) => {
  const { slug } = req.params;
  const ip = req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress

  console.log(ip);
  
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
      message: `Sorry, we cannot find ${slug}!`,
      ip
    });
  }

}
