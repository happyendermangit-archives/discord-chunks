function(e, t, n) {
    "use strict";
    n("222007");
    var r, i = "function" == typeof Map && Map.prototype ? Map : null,
        o = "function" == typeof Set && Set.prototype ? Set : null;
    !i && (r = function(e) {
        return !1
    });
    var s = i ? Map.prototype.has : null,
        a = o ? Set.prototype.has : null;
    !r && !s && (r = function(e) {
        return !1
    }), e.exports = r || function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
            if (s.call(e), a) try {
                a.call(e)
            } catch (e) {
                return !0
            }
            return e instanceof i
        } catch (e) {}
        return !1
    }
}