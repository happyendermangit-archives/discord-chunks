function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BUILD_OVERRIDE_TARGET_NAMES: function() {
            return i
        },
        BUILD_OVERRIDE_EXPIRATION_OPTIONS: function() {
            return r
        },
        BUILD_OVERRIDE_RELEASE_CHANNEL_OPTIONS: function() {
            return s
        },
        BUILD_OVERRIDE_COOKIE_NAME: function() {
            return a
        }
    });
    let i = {
            discord_marketing: "Discord Marketing",
            discord_web: "Discord Web",
            discord_ios: "Discord iOS",
            discord_android: "Discord Android"
        },
        r = [{
            value: 3600,
            label: "1 Hour"
        }, {
            value: 86400,
            label: "1 Day"
        }, {
            value: 259200,
            label: "3 Days"
        }, {
            value: 604800,
            label: "1 Week"
        }, {
            value: 1209600,
            label: "2 Weeks"
        }, {
            value: 1814400,
            label: "3 Weeks"
        }, {
            value: 2628e3,
            label: "1 Month"
        }],
        s = [{
            value: "all",
            label: "All"
        }, {
            value: "canary",
            label: "Canary"
        }, {
            value: "ptb",
            label: "PTB"
        }, {
            value: "stable",
            label: "Stable"
        }, {
            value: "staging",
            label: "Staging"
        }],
        a = "buildOverride"
}