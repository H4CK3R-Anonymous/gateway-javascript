# Gateway-JavaScript 💻 
Here's a perfectly broken 💔 solution to get someone's gateway IP with JavaScript

I have recently tried making a project in JavaScript and it seems like they don't really have a way, to give the Gateway IP of a client. Neither do I think they will, since it can be a security vulnerbility. *blink* *blink*
Anyway, if you are using this for something that's really required, the code should be up there 👆
However, they may be UPs and DOWNs to using this.
- First of, these so called "gateway IPs" sometimes have the same IP as a random device on a network. So for instance if a device with that IP may exist. It may give inaccurate results, but I am pretty sure that can be fixed by a couple tweaks here and there. 🔨
- Second is that, there is a timeout and that is the backbone of the logic used in the code to an extent for performance. Increasing the timeout or disabling it completely may give wayyy beter results. So if time isn't an issue. You guys can go and change that..
- The last but not least.. I haven't really coded in JavaScript (only started because of the DNS Rebinding project), so I couldn't really get the function to return a variable, since I am too lazy to read through tons of guides, but I will make this better once I start learning JavaScript. 🐱‍💻

The UPs are that this works... 😁

WHAT's the LOGIC?
Well... its simple. If an IP responds in a required time it's the Gateway IP... if it doesn't it's not.
