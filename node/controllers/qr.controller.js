import Qr from '../models/Qr.js';
import Scan from '../models/Scan.js';
import fetch from 'node-fetch';

const getLocation = async (ip) => {
  var fetch_res = await fetch(`https://ipapi.co/${ip}/json/`);
  var fetch_data = await fetch_res.json()

  return fetch_data;
}

export const getSlug = async (req, res) => {
  const { slug } = req.params;
  const ip = req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress

  const location = await getLocation(ip);
  
  !slug && res.status(400).send({
    statusCode: res.statusCode,
    title: 'Slug not recived',
    message: 'No slug has recived!'
  });

  const qr = await Qr.findOne({ where: { slug } });
  if (qr) {
    await Scan.create({
      qrId: qr.id,
      timestamp: new Date(),
      ip: location.ip,
      city: location.city || null,
      region: location.region || null,
      country: location.country || null,
      latitude: location.latitude || null,
      longitude: location.longitude || null
    })
    res.redirect(301, qr.url);
  }else{
    res.status(404).send({
      statusCode: res.statusCode,
      title: 'Slug not found',
      message: `Sorry, we cannot find ${slug}!`,
      location
    });
  }

}
