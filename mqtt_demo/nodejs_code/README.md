# MQTT using MOSQUITTO

Run Mosquitto broker on local machine.

<h2>Download and Install Mosquitto broker</h2>

https://mosquitto.org/files/source/mosquitto-2.0.15.tar.gz


Unzip compressed file

      $ tar xzvf ~/Downloads/mosquitto-2.0.15.tar.gz
      

Setup mosquitto broker


      $ cd ~/Downloads/mosquitto-2.0.15/
      
      $ make
                  
      
      
If any missing library found, then install that library

      $ sudo apt install lib_name
      
Run Mosquitto broker
  
      $ cd ~/Downloads/mosquitto-2.0.15/src/
      
      $ ./mosquitto
      
Export path in bashrc to run mosquitto broker from any pwd.
