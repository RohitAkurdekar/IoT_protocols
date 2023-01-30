module.exports = {
    mqtt: {
      /**
       * @link https://github.com/mcollina/mosca/wiki/Authentication-&-Authorization
       */
      authenticate: function(client, username, password, callback) {
        let authenticate = false;
        if(username == 'diot' && password.toString()=='diot')
        {
            if(client.user == username)
            {
                authenticate = true;
            }
        }
        callback(null,authenticate);
      },
      authorizePublish: function(client, topic, payload, callback) {
        // ...
      },
      authorizeSubscribe: function(client, topic, callback) {
        // ...
      }
    }
  }