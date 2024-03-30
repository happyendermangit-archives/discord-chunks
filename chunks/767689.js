function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConflictOptions: function() {
            return c
        },
        DatabaseState: function() {
            return l
        },
        MAXIMUM_KEY_BITS: function() {
            return f
        },
        Ordering: function() {
            return s
        },
        TableId: function() {
            return u
        }
    }), (a = u || (u = {})).Kv = "kv", a.KvCache = "kv_cache", a.Messages = "messages";
    var r, o, i, a, u, s, l, c, f = 5;
    (r = s || (s = {}))[r.Ascending = 0] = "Ascending", r[r.Descending = 1] = "Descending", (o = l || (l = {}))[o.Closed = 0] = "Closed", o[o.Open = 1] = "Open", o[o.Disabled = 2] = "Disabled", (i = c || (c = {}))[i.Skip = 0] = "Skip", i[i.Replace = 1] = "Replace"
}