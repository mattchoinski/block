# -*- mode: ruby -*-
# vi: set ft=ruby :

# NOTE: Any changes to the base box must be added by:
# vagrant package --base Ubuntu-Base

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu"
  config.vm.box_url = "file://Users/mattchoinski/Development/Vagrant-Scripts/Ubuntu/ubuntu.box"
  #config.vm.box_url = "file:///C:/Tools/Vagrant-Boxes/ubuntu.box"
  config.vm.network :private_network, ip: "192.168.22.13"
  config.vm.network :forwarded_port, guest: 80, host: 8011
  config.ssh.forward_agent = true

  config.vm.provider :virtualbox do |vb|

    vb.name = "block"
    vb.customize ["modifyvm", :id, "--memory", "1024"]
    vb.customize ["modifyvm", :id, "--cpus", "1"]

  end

  config.vm.provision "shell", path: "./script/setup-app.sh"

end

# scp from username@ip:/directory/filename.ext
