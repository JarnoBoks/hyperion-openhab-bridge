# Use any openHAB lights with Hyperion

## Setup:


1. Clone this respository;
2. Edit `config.js` to your liking. There are two light types: `rgb` and
   `dim`. The names of the lights must represent light item id that are present in openHAB;
3. Generate an openHAB API Token using the Admin view (scroll to the bottom of the view);
4. Setup a new LED instance in Hyperion using the `udpraw` controller. Set the
   number of lights to the amount of lights you've specified in the `config.js`
   file;
5. Run `OH_TOKEN=your_token12341234123432 node .`

   \

To setup the systemd unit to make this run in the background:


1. Copy the `hyperion-oh-bridge.service` file in this repo to `/etc/systemd/system/oh-bridge.service`
2. Adjust the path in `ExecStart` part and the environment variables in the `Environment` part of the `/etc/systemd/system/oh-bridge.service` file;
3. Run `systemctl daemon-reload && systemctl enable --now oh-bridge`


