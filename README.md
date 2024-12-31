# Say Goodbye to the Sigmas - an extension to block harmful manosphere content.
Myself and my wonderful partner Amélie Nolan have entered BTYS (in Ireland) as a group, and are working on a cool project which looks into the harmful effects of manosphere content on (mainly) adolescent boys.

A major part of that is our extension. If you're interested in the project as a whole, feel free to visit [our website](https://guidetothemanosphere.com) to learn more!
___
**Please note that this extension is under development, so it might block something you don't need it to block.**

My email is on my profile, so feel free to send an email if you have any words of wisdom regarding the extension itself - maybe there's something I haven't considered or implemented, due to lack of knowledge.
___
If you want to install the latest (production) version of the extension, check the links below for your preferred browser :D
- (awaiting approval to publish on Chrome)
- (yet to be published on Firefox)
- (yet to be published on Edge)
- (yet to be published on Safari)
- (yet to be tested and considered to be published on other browsers)

If you want to test the extension locally, make some changes to test, or just play around with it, you can feel free to! You'll see the tutorial to load the extension locally for each browser below :)
___
## Installation and setup
To install the extension files, you can download them as a ```.zip``` file (shown in the below picture):

![download_files](https://github.com/user-attachments/assets/a94e669b-12e1-453d-b27b-a7a826b6e15c)

(Optional) After downloading and unzipping the folder, you can remove the "-main" portion of the name, so our folders are named the same way.

Alternatively, you can use the following command in your terminal:
```
git clone https://github.com/BeatriceSmart1e/manosphere_blocker.git
```

Once installed, you can enter the project directory:
```
cd manosphere_blocker
```
Congrats! Now you can move on to the next bit!
___
**THIS PART IS _VERY IMPORTANT_, PLEASE DON'T SKIP OVER IT!**

Before we get to loading the extension locally, there is just a small thing regarding the main manifest file. Since Firefox and Edge have some issues when using Chrome's ```service_worker```, we have three different ```manifest.json``` files. To switch the main manifest file to suit Chrome, Firefox, or Edge, just run the below command(s):
```
cd extension_main
chmod +x switch-manifest.sh
./switch-manifest.sh BROWSER_NAME
```
Replace ```BROWSER_NAME``` with either ```chrome```, ```firefox```, or ```edge```. Just note that the Edge manifest file is primarily for older versions, since it should work with the Chrome manifest file. Although this hasn't been tested just yet (as of 31/12/2024).

The Chrome version of the manifest file should work with other Chromium-based browsers, but this hasn't been tested yet (as of 31/12/2024).
___
### Loading the extension on Chrome
Visit the following URL on a new Chrome window:
```
chrome://extensions/
```

Then, on the top left corner, you should see a button saying "Load unpacked", which you should click.

![load_chrome_tut](https://github.com/user-attachments/assets/06b4395c-0aaf-4334-b92e-67b8a2c75e84)

You will then get a popup telling you to pick a folder which contains all the necessary files for the extension. For me, it looks a bit like this:

![Screenshot 2024-12-31 at 15 38 31](https://github.com/user-attachments/assets/fcc2a530-8caf-4733-89a7-7b9a38fdd818)

Once you found where you keep your ```manosphere_blocker``` folder, you click into it, and you'll see three folders (indicated above). Click the ```extension_main``` folder (as ```extension_chrome``` is now unused and outdated), and on the bottom of the popup window you click "Select" (or whatever it might say on a different system).

Congratulations! The extension is now locally running on your machine, and you can test it as you please!

If you do get errors when loading the extension, please ensure you are using the right manifest.json file - otherwise Chrome will complain, and the extension might not work at all.
___
### Loading the extension on Firefox
Visit the following URL on a new Firefox window:
```
about:debugging#/runtime/this-firefox
```

At the top of the page, you should see a button saying "Load Temporary Add-on", which you should click.

![firefox_load](https://github.com/user-attachments/assets/4f90def7-360f-481b-ba1d-ac233420a4b7)

You will then get a popup telling you to pick a ```manifest.json``` file. For me, it looks like this:

![select_manifest](https://github.com/user-attachments/assets/9c3b0a4e-aaba-425c-b8aa-c00595f639dc)

Once you found where you keep your ```manosphere_blocker``` folder, you click into it, and you'll see three folders inside. You click into the ```extension_main``` folder, and you have to select the ```manifest.json``` file, and then click "Open" (or any similar button that your system suggests).

Congratulations! The extension is now up and running on your machine, and you can play with it as you please!

If you get any errors, please ensure you are using the correct manifest.json file - otherwise Firefox will not load the extension at all, and you'll have to start messing with the manifest file itself (which is not fun, speaking from experience).
___
### Loading the extension on Safari
Safari and Xcode are built different, so unfortunately loading the extension on Safari isn't as easy, and I would personally rather just install Chrome to test it - but you do you!

First of all, ensure you have installed Xcode on your machine. If that's already done, then navigate to the ```extension_safari``` folder on your machine, and inside it is a single folder: ```Say Goodbye to the Sigmas```. Go into the folder, and double click on the file named ```Say Goodbye to the Sigmas.xcodeproj```. There are better ways of opening the project I'm sure, but this is the way I've always done it, so I wouldn't worry about that too much for the time being.

Below is a screen recording of how I do it, in case you get confused:

https://github.com/user-attachments/assets/80bfce27-07f5-46b1-b3a8-bd100e6a4f57

Wooo! You've successfully opened the project! Now we have to build it.

To do that, you have to go to the navigation bar, and click Product>Build (or ```⌘B``` to make life simple)

![Screenshot 2024-12-31 at 16 19 51](https://github.com/user-attachments/assets/ccd25bfd-ef30-411c-83d3-b4b18e9d9a06)

Then, you open a new Safari window, and click Safari>Settings in the navigation bar. Go to the "Advanced" tab of the settings window, and ensure that the "Show features for web developers" box is ticked.

![web_Dev](https://github.com/user-attachments/assets/1dc3d996-165d-4235-b99c-39d90d63a1cb)

Then, there will be a new tab in the window called "Developer". Click into it, and tick the box which says "Allow unsigned extensions".

![allow_unsigned](https://github.com/user-attachments/assets/ad409f54-901b-4834-84f4-d01a59c027be)

You may have to enter your password for the box to be ticked.

And that's all! Now just go to the extensions tab, and enable it like so:

![Screenshot 2024-12-31 at 16 28 19](https://github.com/user-attachments/assets/8cb1b075-7291-4962-b6a0-57d2dba49266)

Well done! Now the extension is ready to test on Safari!
___
You might have noticed that I don't quite have tutorials for how to load it on other browsers, like Edge. Well, these haven't been tested yet - I'm currently trying out only three browsers which are fairly common, and will plan to develop further for more support! But if you're curious, you can always test the manifest files out on other browsers if you want - this extension is open-source for a reason :D
___
Thanks for reading, and thanks for using our extension!


