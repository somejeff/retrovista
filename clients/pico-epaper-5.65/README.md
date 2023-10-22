# Waveshare 5.65" 7-color ePaper with a Rasberry Pi Pico W

Display the image on a [WaveShare ePaper made for the Pico](https://www.waveshare.com/pico-epaper-5.65.htm)

## Approach

On startup and on a schedule:

1. Attempt to connect to Wifi. If it fails:
    * Startup an access point
    * Render a QR Code for a mobile device to connect
    * Allow the user to configure the device (SSID, Password, API Key)
    * Reboot
2. Auto-update code
3. Fetch some queued up images
4. Display an image
5. Sleep



## Considerations

### :warning: Security (or there lack of)

Assuming that storage on the Pico is insecure, the Wifi Password and API key would be stored in plain text.  🤷‍♂️ 

### Memory Resources

The Pico is quite limited on RAM, so using some libraries such as `urequests` leads to out of memory errors.

### User Interface

The ePaper is quite slow, so hosting an http access point 

