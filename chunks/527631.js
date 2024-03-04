function(e, t, n) {
    "use strict";
    n("222007");
    var r, i = "function" == typeof Map && Map.prototype ? Map : null,
        o = "function" == typeof Set && Set.prototype ? Set : null;
    !o && (r = function(e) {
        return !1
    });
    var s = i ? Map.prototype.has : null,
        a = o ? Set.prototype.has : null;
    !r && !a && (r = function(e) {
        return !1
    }), e.exports = r || function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
            if (a.call(e), s) try {
                s.call(e)
            } catch (e) {
                return !0
            }
            return e instanceof o
        } catch (e) {}
        return !1
    }
}