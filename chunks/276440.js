function(e, t, n) {
    e = n.nmd(e);
    var r = n("447414"),
        i = "object" == typeof t && t && !t.nodeType && t,
        o = i && "object" == typeof e && e && !e.nodeType && e,
        s = o && o.exports === i && r.process,
        a = function() {
            try {
                var e = o && o.require && o.require("util").types;
                if (e) return e;
                return s && s.binding && s.binding("util")
            } catch (e) {}
        }();
    e.exports = a
}