# Use any openHAB lights with Hyperion

This application a fork from https://git.kuba-orlik.name/kuba/hyperion-home-assistant-bridge.

## Pre-conditions:

The application uses NodeJS and NVM. Ensure these are installed on your system. For example using:

```
sudo apt install -y curl wget build-essential
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

nvm install --lts
nvm use --lts

nvm alias default node
```

## Setup:


1. Clone this repository with `git clone https://{github-username}:{github-token}@github.com/JarnoBoks/hyperion-openhab-bridge.git .hyperion-openhab-bridge`
2. Edit `config.js` to your liking. There are two light types: `rgb` and
   `dim`. The names of the lights must represent light item id that are present in openHAB;
3. Generate an openHAB API Token using the Admin view (scroll to the bottom of the view);
4. Setup a new LED instance in Hyperion using the `udpraw` controller. Set the
   number of lights to the amount of lights you've specified in the `config.js`
   file;
5. Run `OH_TOKEN=your_token12341234123432 node .`


---

To setup the systemd unit to make this run in the background:


1. Copy the `hyperion-oh-bridge.service` file in this repo to `/etc/systemd/system/oh-bridge.service`, and update this file to your needs
2. Adjust the username in the `Service` part if necessary. Adjust he
3. Adjust the `API_TOKEN` and `OPENHAB_URL` in the `Environment` part of the `/etc/systemd/system/oh-bridge.service` file.
4. Output you node version with `sudo -u [username-in-step-2] node -v` and update the version number in the `Environment` part of the `/etc/systemd/system/oh-bridge.service` file.
5. If you use a local Certificate Authority for the SSL certificate on openHAB, add the root ca certificate to the `Environment` part, otherwise delete the line starting with `NODE_EXTRA_CA_CERTS=` in the `/etc/systemd/system/oh-bridge.service` file.
6. Run `systemctl daemon-reload && systemctl enable --now oh-bridge`


