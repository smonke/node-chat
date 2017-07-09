var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message')

describe ('generateMessage', () => {
    it ('should generate correct message object', () => {
        var from = 'Sonja';
        var text = 'this is a test';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});

    });
    
});

describe ('generateLocationMessage', () => {
    it ('should generate the correct location object', () => {
        var from = 'Admin';
        var lat = '1';
        var long = '1';
        var url = 'https://www.google.de/maps?q='
        var locationMessage = generateLocationMessage(from, lat, long);

        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({from, url: `${url}${lat},${long}`}); 
    });
});