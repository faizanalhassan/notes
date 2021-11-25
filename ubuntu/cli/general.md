## Install chromium
```
sudo apt install --assume-yes chromium-browser
```

## Find a file
```
find /path/ -iname filenam*
# https://vitux.com/how-to-find-files-on-the-ubuntu-command-line/
```

## Install chrome
```
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```


## Virtual display
```
DISPLAY=:1 xvfb-run <command>
```

## install nodejs version 14 on ubuntu: ([ref](https://computingforgeeks.com/install-node-js-14-on-ubuntu-debian-linux/))
```
sudo apt update
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt -y install nodejs
```
