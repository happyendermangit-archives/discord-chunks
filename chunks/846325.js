function(e, t, n) {
    "use strict";
    var i, s;
    n.r(t), n.d(t, {
        MAX_LENGTH_SOUND_NAME: function() {
            return r
        },
        MAX_SOUND_LENGTH_SECONDS: function() {
            return a
        },
        DEFAULT_SOUND_GUILD_ID: function() {
            return o
        },
        SoundboardWheelSize: function() {
            return l
        },
        DEFAULT_KEYBIND: function() {
            return u
        },
        EMPTY_SOUND_LIST: function() {
            return d
        },
        CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
            return c
        },
        NUM_RECENTLY_HEARD_SOUNDS: function() {
            return f
        },
        NUM_FREQUENTLY_USED_SOUNDS: function() {
            return _
        }
    }), n("222007");
    let r = 32,
        a = 5,
        o = "DEFAULT";
    (s = i || (i = {}))[s.SUCCESS = 0] = "SUCCESS", s[s.INTERRUPTED = 1] = "INTERRUPTED";
    let l = {
            width: 424,
            height: 424,
            padding: 100
        },
        u = "ctrl+`",
        d = [],
        c = "0",
        f = 6,
        _ = 6
}