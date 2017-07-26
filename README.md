# Tessel2 Code Snippets 

Various adventures hacking with the [Tessel 2](https://tessel.io) IoT Development Platform. This repo has a variety of code snippets packaged as independent projects.  See below for a brief description and instructions on how to run.

### /accelerometer

Reports the x, y, z data using the [accelerometer module](https://github.com/tessel/accel-mma84).  To run this snippet, attach the Accelerometer sensor to Port A of your Tessel.  Then simply do:

````
cd accelerometer
npm install
t2 run index.js
````

![icon](imgs/accelerometer.jpg)

### /ambient

Reports the light and sound levels using the [ambient module](https://github.com/tessel/ambient-attx4).  To run this snippet, attach the Ambient sensor to Port A of your Tessel.  Then simply do:

````
cd ambient
npm install
t2 run index.js
````

![icon](imgs/ambient.jpg)

### /climate
Description: Reports the temperature and humidity using the climate module.

![icon](imgs/climate.jpg)

### /drone

![icon](imgs/dronecargo.jpg)
Figure T: Loading a Tessel onto a mini-drone as sensor cargo (using tape and legos).

## Command Linkd Interface (CLI) Snippets 

Below are various __t2-cli__ snippets when working with the Tessel micro-controller.

#### What do I need to do to get my Development Environment set up?

1) Install [Nodejs](https://nodejs.org/en/) 4.2.x or greater.

2) In Terminal, install the Tessel 2 Command Line Interface (CLI) by doing: 

````
npm install -g t2-cli

````

#### How do I connect to my Tessel micro-controller via USB?

1) Plug in the Tessel 2 board to your computer via the provided micro-USB cable.

2) In Terminal, test your connection by doing:

````
t2 list
````

In Terminal, confirm that you see a 'USB' connection reporting your Tessel board's identifier. 

#### How do I connect to my Tessel micro-controller via Wifi (2.4 GHz networks)?

For first time setup, in Terminal do: 

````
t2 wifi -n <EnterNetworkName> -p <EnterPassword>
````

Confirm with: 

````
ts list
````
Confirm that you see a 'LAN' connection.

### How do I set up my Tessel so I can push code to it?

For first time setup, in Termsinal do:

````
t2 provision
````

That's it, you're good.

### How do I create a new Tessel Project?

In Terminal, do: 

````
mkdir MyProjectFolder
cd mkdir
t2 init
````

Proceed to hack.

### How do I run my Tessel Project?

In Terminal, do:

````
cd MyProjectFolder
t2 run index.js
````

This repo includes a variety of sample projects - most require various Tessel modules/sensors.  So first attach then run!

### How do I stop running my Tessel Project?

On your keyboard do: [Control] + [C]
