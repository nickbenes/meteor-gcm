/**
 * Created by nbenes on 10/27/13.
 */

Package.describe({
    summary: "Google Cloud Messaging interface"
});

Npm.depends({
    'node-gcm': '0.9.6'
});

Package.on_use(function (api, where) {
    api.add_files("gcm.js", "server");
    api.export("Gcm", "server");
});