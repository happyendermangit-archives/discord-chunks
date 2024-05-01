function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l;

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        AutocompleterQuerySymbols: function() {
            return s
        },
        AutocompleterResultTypes: function() {
            return r
        },
        FindResultDirections: function() {
            return i
        },
        HeaderRecord: function() {
            return d
        }
    });
    class d {
        constructor(e) {
            u(this, "id", void 0), u(this, "text", void 0), this.id = e, this.text = e
        }
    }(a = i || (i = {})).UP = "UP", a.DOWN = "DOWN", (o = r || (r = {})).GUILD = "GUILD", o.TEXT_CHANNEL = "TEXT_CHANNEL", o.GROUP_DM = "GROUP_DM", o.VOICE_CHANNEL = "VOICE_CHANNEL", o.USER = "USER", o.HEADER = "HEADER", o.APPLICATION = "APPLICATION", o.SKU = "SKU", o.LINK = "LINK", (l = s || (s = {})).USER = "@", l.TEXT_CHANNEL = "#", l.VOICE_CHANNEL = "!", l.GUILD = "*", l.APPLICATION = "$"
}