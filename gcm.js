/**
 * Created by nbenes on 10/27/13.
 */

Gcm = function() {
    var self = this;
    self.version = '0.1.0';

    var nodeGcm = Npm.require('node-gcm');
    _.extend(self,nodeGcm);
};