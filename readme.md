<h1>Block</h1>
<hr />
<div>
  <h3>Table of contents</h3>
  <ol>
    <li>Installation</li>
    <li>Starting</li>
    <li>Multiple Sockets</li>
    <li>Viewing Chaining</li>
    <li>See proof of work in action</li>
  </ol>
</div>
<div>
<hr />
<h3>Installation</h3>
<ul>
  <li>Git Clone the package</li>
  <li>CD into the directory && run npm install or yarn install</li>
</ul>
</div>
<div>
<hr />
<h3>Starting</h3>
<ul>
  <li>CD into project directory</li>
  <li>Run the command npm run dev or yarn dev</li>
</ul>
</div>
<div>
<hr />
<h3>Multiple Sockets</h3>
<ul>
  <li>To run multiple sockets you must assign new node env variables prior to running yarn dev or npm run dev</li>
  <li>After running yarn dev or npm run dev the first time open a new terminal window cd into the project directory</li>
  <li>The command looks like this ```HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev ```</li>
  <li>For every socket you run you will need to change these i.e. ``` HTTP_PORT=3003```</li>
</ul>
</div>
<div>
<hr />
<h3>Viewing Chain</h3>
<ul>
  <li>To view the block chain in action simply mine a new block via an app like postman to http://localhost:3001/mine</li>
  <li>If you have multiple sockets running all sockets will sync with the current chain</li>
</ul>
<hr />
<h3>Proof of work demo</h3>
<ul>
  <li>To view the proof of work/difficulty in action simply run ```npm run test```</li>
  <li>To change the difficulty change the MINE_RATE value, the difficulty will change based on the previous time to mine a block.</li>
</ul>
</div>
