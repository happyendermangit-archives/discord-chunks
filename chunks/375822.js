function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l;
    n.r(t), n.d(t, {
        HeaderRecord: function() {
            return u
        },
        FindResultDirections: function() {
            return i
        },
        AutocompleterResultTypes: function() {
            return s
        },
        AutocompleterQuerySymbols: function() {
            return r
        }
    });
    class u {
        constructor(e) {
            this.id = e, this.text = e
        }
    }(a = i || (i = {})).UP = "UP", a.DOWN = "DOWN", (o = s || (s = {})).GUILD = "GUILD", o.TEXT_CHANNEL = "TEXT_CHANNEL", o.GROUP_DM = "GROUP_DM", o.VOICE_CHANNEL = "VOICE_CHANNEL", o.USER = "USER", o.HEADER = "HEADER", o.APPLICATION = "APPLICATION", o.SKU = "SKU", o.LINK = "LINK", (l = r || (r = {})).USER = "@", l.TEXT_CHANNEL = "#", l.VOICE_CHANNEL = "!", l.GUILD = "*", l.APPLICATION = "$"
}