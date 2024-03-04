function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l, u, d;
    n.r(t), n.d(t, {
        TableId: function() {
            return i
        },
        MAXIMUM_KEY_BITS: function() {
            return c
        },
        Ordering: function() {
            return s
        },
        DatabaseState: function() {
            return r
        },
        ConflictOptions: function() {
            return a
        }
    }), (o = i || (i = {})).Kv = "kv", o.KvCache = "kv_cache", o.Messages = "messages";
    let c = 5;
    (l = s || (s = {}))[l.Ascending = 0] = "Ascending", l[l.Descending = 1] = "Descending", (u = r || (r = {}))[u.Closed = 0] = "Closed", u[u.Open = 1] = "Open", u[u.Disabled = 2] = "Disabled", (d = a || (a = {}))[d.Skip = 0] = "Skip", d[d.Replace = 1] = "Replace"
}