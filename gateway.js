// In the responses there can be two values either 'valid' or 'invalid'. Corresponding to the positions in the ips, if it's the gateway IP the value would be 'valid'.
var responses = [];
// Contains a list of all possible IPs...
var ips = ["192.168.1.1", "192.168.0.1",
           "10.0.0.138", "192.168.2.1",
           "192.168.254.254", "10.0.1.1",
           "192.168.3.1", "10.10.1.1",
           "10.0.0.1", "10.0.0.2",
           "10.1.1.1", "192.168.11.1",
           "192.168.0.30", "192.168.0.50",
           "192.168.0.10", "192.168.0.101",
           "192.168.15.1", "10.90.90.90",
           "192.168.8.1", "192.168.86.1",
           "192.168.100.1", "192.168.123.254",
           "192.168.16.1", "192.168.10.1",
           "192.168.20.1", "192.168.30.1",
           "192.168.62.1", "192.168.102.1",
           "192.168.0.227", "192.168.10.50",
           "10.1.10.1", "192.168.0.3",
           "192.168.168.168", "192.168.50.1",
           "192.168.55.1", "192.168.251.1",
           "192.168.0.254", "192.168.0.100",
           "192.168.10.10", "192.168.10.100",
           "192.168.223.100", "200.200.200.5",
           "192.168.4.1", "192.168.100.100",
           "192.168.2.254"];

// We're getting the length to loop
var length = ips.length

// Start of the loop
for (var i = 0; i < length; i++){
    (async function(){
        // Initializes the socket...
        var connection = new WebSocket('ws://' + ips[i] + ':80');
        await new Promise (function(res){
                var timeout = setTimeout(function() {
                                // Logs the readystate of the IP at the time it was timedout.
                                // This should be anything apart from 3 (No response/Not Gateway) or 3 (Response received/Gateway).
                                console.log("Socket connection timeout", connection.readyState);
                                // Logs the URL as well
                                console.log(connection.url);
                                if (connection.readyState == 3){
                                    // Adds valid to the list
                                    responses.push('valid')
                                } else {
                                    // Adds invalid to the list
                                    responses.push('invalid')
                                }
                                // Closes the connection
                                connection.close();
                }, 5000); // Timeout set to 5000, this is what worked for me.. you can change this according to your needs
                res();
        });
    })();

}
