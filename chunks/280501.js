function(e, t, n) {
    "use strict";
    var i, r, a, s;

    function o(e) {
        return e
    }
    n.r(t), n.d(t, {
        ActionComponentState: function() {
            return i
        },
        SelectOptionType: function() {
            return r
        },
        asComponentId: function() {
            return o
        }
    }), (a = i || (i = {}))[a.NORMAL = 0] = "NORMAL", a[a.LOADING = 1] = "LOADING", a[a.DISABLED = 2] = "DISABLED", (s = r || (r = {}))[s.STRING = 1] = "STRING", s[s.USER = 2] = "USER", s[s.ROLE = 3] = "ROLE", s[s.CHANNEL = 4] = "CHANNEL", s[s.GUILD = 5] = "GUILD"
}