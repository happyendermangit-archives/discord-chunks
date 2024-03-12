function(e, t, n) {
    "use strict";
    var s, i, r, a;
    n.r(t), n.d(t, {
        dirtyChars: function() {
            return u
        },
        coalescePeriods: function() {
            return l
        },
        EditState: function() {
            return s
        },
        PomeloEntrypoints: function() {
            return i
        },
        MAX_DISPLAY_NAME_LENGTH: function() {
            return o
        },
        POMELO_KEYWORD: function() {
            return d
        },
        CONTROL_CHARACTERS_CODE: function() {
            return c
        },
        TIMEOUT_TIME: function() {
            return E
        }
    });
    let u = /([^A-Za-z0-9_.]+)/g,
        l = /\.+/g;
    (r = s || (s = {})).NONE = "none", r.EDIT_DISPLAY_NAME = "display-name", r.EDIT_USERNAME = "username", r.PREVIEW = "preview", r.SUGGESTION = "suggestion", (a = i || (i = {})).APP_START = "app start", a.NOTICE = "notice", a.USER_SETTINGS = "user settings", a.USER_SETTINGS_EDIT = "user settings edit", a.YOU_TAB = "you tab";
    let o = 32,
        d = "pomelo",
        c = [1564, 917505, 12644, 65279, 173, 6068, 10240, 4447, 847, 4448, 65440],
        E = 2e3
}