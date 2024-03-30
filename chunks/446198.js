function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CONTROL_CHARACTERS_CODE: function() {
            return f
        },
        EditState: function() {
            return i
        },
        MAX_DISPLAY_NAME_LENGTH: function() {
            return l
        },
        POMELO_KEYWORD: function() {
            return c
        },
        PomeloEntrypoints: function() {
            return a
        },
        TIMEOUT_TIME: function() {
            return d
        },
        coalescePeriods: function() {
            return s
        },
        dirtyChars: function() {
            return u
        }
    });
    var r, o, i, a, u = /([^A-Za-z0-9_.]+)/g,
        s = /\.+/g;
    (r = i || (i = {})).NONE = "none", r.EDIT_DISPLAY_NAME = "display-name", r.EDIT_USERNAME = "username", r.PREVIEW = "preview", r.SUGGESTION = "suggestion", (o = a || (a = {})).APP_START = "app start", o.NOTICE = "notice", o.USER_SETTINGS = "user settings", o.USER_SETTINGS_EDIT = "user settings edit", o.YOU_TAB = "you tab";
    var l = 32,
        c = "pomelo",
        f = [1564, 917505, 12644, 65279, 173, 6068, 10240, 4447, 847, 4448, 65440],
        d = 2e3
}