const express = require('express')

const server = express();
server.use(express.json());


server.get('/', (req,res) => {
    res.send('server working')
})


const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
