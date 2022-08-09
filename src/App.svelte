<script>

const apiCheck = async ()=>
  {
    let options = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      redirect: 'follow',
      headers: { 'Content-Type': 'application/json' }
    };

		console.log('Fetching...');
    const resp = await fetch('http://localhost:3000/api/test', options);
    console.log('Response: ', resp);
  }
  apiCheck();

</script>

<h1>API Test</h1>

<style>
  h1 {
    color:green;
  }
</style>