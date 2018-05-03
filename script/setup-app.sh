#!/bin/bash

echo " "
echo "*** Installing Nodejs and other dependencies..."
 {
	# Note: The following may not work if the image is out of date
	#sudo apt-get update
	#sudo apt-get upgrade -y
	sudo apt install atop  # Use for debugging...
  sudo apt-get install -y build-essential
	curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
	sudo apt-get install -y nodejs
	sudo apt install sqlite3

} &> /dev/null
echo "...done."

echo " "
echo "*** Setting up app..."
{
	sudo mkdir -p /block/{app,blockchain,wallet}
	sudo chown -R vagrant /block
	sudo chgrp -R vagrant /block
	cp -a /vagrant/app/. /block/app
	cp -a /vagrant/blockchain/. /block/blockchain
	cp -a /vagrant/wallet/. /block/wallet
	cp /vagrant/*.js /block/
	cp /vagrant/package.json /block/package.json
	cd /block
	sudo npm install nodemon --save
	sudo npm install express 
	sudo npm install crypto-js
	sudo npm install body-parser
	sudo npm install ws
} &> /dev/null
echo "...done."
