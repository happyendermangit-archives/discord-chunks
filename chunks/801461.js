function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        CONTROL_CHARACTERS_CODE: function() {
            return _
        },
        EditState: function() {
            return i
        },
        MAX_DISPLAY_NAME_LENGTH: function() {
            return u
        },
        POMELO_KEYWORD: function() {
            return d
        },
        PomeloEntrypoints: function() {
            return r
        },
        TIMEOUT_TIME: function() {
            return c
        },
        coalescePeriods: function() {
            return l
        },
        dirtyChars: function() {
            return o
        }
    });
    let o = /([^A-Za-z0-9_.]+)/g,
        l = /\.+/g;
    (s = i || (i = {})).NONE = "none", s.EDIT_DISPLAY_NAME = "display-name", s.EDIT_USERNAME = "username", s.PREVIEW = "preview", s.SUGGESTION = "suggestion", (a = r || (r = {})).APP_START = "app start", a.NOTICE = "notice", a.USER_SETTINGS = "user settings", a.USER_SETTINGS_EDIT = "user settings edit", a.YOU_TAB = "you tab";
    let u = 32,
        d = "pomelo",
        _ = [1564, 917505, 12644, 65279, 173, 6068, 10240, 4447, 847, 4448, 65440],
        c = 2e3
}