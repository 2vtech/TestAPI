const dotest = async (req, res)=>
{
  console.log(`Test request: ${req.method}`);

  if (req.method === 'OPTIONS')
    return res.status(200).send('ok');

  console.log(`ReqQuery: ${JSON.stringify(req.query)}`);
  console.log(`ReqBody:  ${JSON.stringify(req.body)}`);
  console.log(`Cookie:   ${JSON.stringify(req.cookies)}`);

  if (req.method === 'GET')
  {
    console.log('GET received!');
    return res.status(200).send('get');
  }
  else return res.status(200).send('error');
}

// module.exports.dotest = dotest; // Commonjs style
export default dotest;
