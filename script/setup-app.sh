#!/bin/bash

echo "Installing Nodejs and Dependencies..."
 {
	# Note: The following may not work if the image is out of date
	#sudo apt-get update
	#sudo apt-get upgrade -y
	sudo apt install atop  # Use for debugging...
  sudo apt install sqlite3
} &> /dev/null
echo "...done."
