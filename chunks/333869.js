function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("593927"),
        o = n("589280");

    function i(e, t, n, i, a) {
        var u = !0,
            s = !1,
            l = void 0;
        try {
            for (var c, f = (0, o.ApplicationStreamSettingRequirements)[Symbol.iterator](); !(u = (c = f.next()).done); u = !0) {
                var d = c.value;
                if ((null == d.preset || e === d.preset) && t === d.resolution && n === d.fps && (0, r.default)(d, i, a)) return !0
            }
        } catch (e) {
            s = !0, l = e
        } finally {
            try {
                !u && null != f.return && f.return()
            } finally {
                if (s) throw l
            }
        }
        return !1
    }
}