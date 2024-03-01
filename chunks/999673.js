function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, c;
    n.r(t), n.d(t, {
        TableId: function() {
            return i
        },
        MAXIMUM_KEY_BITS: function() {
            return d
        },
        Ordering: function() {
            return r
        },
        DatabaseState: function() {
            return s
        },
        ConflictOptions: function() {
            return a
        }
    }), (o = i || (i = {})).Kv = "kv", o.KvCache = "kv_cache", o.Messages = "messages";
    let d = 5;
    (l = r || (r = {}))[l.Ascending = 0] = "Ascending", l[l.Descending = 1] = "Descending", (u = s || (s = {}))[u.Closed = 0] = "Closed", u[u.Open = 1] = "Open", u[u.Disabled = 2] = "Disabled", (c = a || (a = {}))[c.Skip = 0] = "Skip", c[c.Replace = 1] = "Replace"
}