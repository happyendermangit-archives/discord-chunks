function(t, e, n) {
    t = n.nmd(t);
    var r = n("940151"),
        i = "object" == typeof e && e && !e.nodeType && e,
        a = i && t && !t.nodeType && t,
        o = a && a.exports === i && r.process,
        s = function() {
            try {
                var t = a && a.require && a.require("util").types;
                if (t) return t;
                return o && o.binding && o.binding("util")
            } catch (t) {}
        }();
    t.exports = s
}