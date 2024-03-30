function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AutocompleterQuerySymbols: function() {
            return l
        },
        AutocompleterResultTypes: function() {
            return s
        },
        FindResultDirections: function() {
            return u
        },
        HeaderRecord: function() {
            return c
        }
    });

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o, i, a, u, s, l, c = function e(t) {
        ! function(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }(this, e), r(this, "id", void 0), r(this, "text", void 0), this.id = t, this.text = t
    };
    (o = u || (u = {})).UP = "UP", o.DOWN = "DOWN", (i = s || (s = {})).GUILD = "GUILD", i.TEXT_CHANNEL = "TEXT_CHANNEL", i.GROUP_DM = "GROUP_DM", i.VOICE_CHANNEL = "VOICE_CHANNEL", i.USER = "USER", i.HEADER = "HEADER", i.APPLICATION = "APPLICATION", i.SKU = "SKU", i.LINK = "LINK", (a = l || (l = {})).USER = "@", a.TEXT_CHANNEL = "#", a.VOICE_CHANNEL = "!", a.GUILD = "*", a.APPLICATION = "$"
}