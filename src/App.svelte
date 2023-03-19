<script>

  const horigin = window.location.origin;
  console.log(`Served from host: ${horigin}`);

  let apiAddr;
  if (window.location.hostname === 'localhost')
  {
    // apiAddr = 'http://localhost:3000';
    apiAddr = 'http://localhost:8080';

    // console.log(`Functions hosted: ${apiAddr}`);
  }
  else apiAddr = horigin;

  apiAddr += '/api/test';

  CheckAPI();
  async function CheckAPI()
  {
    let options = {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'same-origin',
      redirect: 'follow',
      headers: { 'Content-Type': 'application/json' }
    };
		console.log('Calling API test...');

    const msecsStart = new Date().getTime();
    const resp = await fetch(apiAddr, options);

    const msecsEnd = new Date().getTime();
    console.log(`Response: ${msecsEnd - msecsStart} msecs`, resp);
  }

</script>

<h1>API Test</h1>

<style>
  h1 {
    color:green;
  }
</style>