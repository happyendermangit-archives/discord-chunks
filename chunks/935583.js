function(e, t, n) {
    "use strict";
    var i, s, l, a;
    n.r(t), n.d(t, {
        dirtyChars: function() {
            return r
        },
        coalescePeriods: function() {
            return o
        },
        EditState: function() {
            return i
        },
        PomeloEntrypoints: function() {
            return s
        },
        MAX_DISPLAY_NAME_LENGTH: function() {
            return u
        },
        POMELO_KEYWORD: function() {
            return d
        },
        CONTROL_CHARACTERS_CODE: function() {
            return c
        },
        TIMEOUT_TIME: function() {
            return f
        }
    });
    let r = /([^A-Za-z0-9_.]+)/g,
        o = /\.+/g;
    (l = i || (i = {})).NONE = "none", l.EDIT_DISPLAY_NAME = "display-name", l.EDIT_USERNAME = "username", l.PREVIEW = "preview", l.SUGGESTION = "suggestion", (a = s || (s = {})).APP_START = "app start", a.NOTICE = "notice", a.USER_SETTINGS = "user settings", a.USER_SETTINGS_EDIT = "user settings edit", a.YOU_TAB = "you tab";
    let u = 32,
        d = "pomelo",
        c = [1564, 917505, 12644, 65279, 173, 6068, 10240, 4447, 847, 4448, 65440],
        f = 2e3
}