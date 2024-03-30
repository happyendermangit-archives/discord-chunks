function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatKbSize: function() {
            return a
        },
        formatSize: function() {
            return i
        }
    });
    var r = n("941504"),
        o = {
            useKibibytes: !1,
            showDecimalForGB: !0,
            useSpace: !0
        };

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
            n = t.useKibibytes ? 1024 : 1e3,
            i = t.useKibibytes ? 1024 : 1e3,
            a = Math.ceil(e / n);
        if (a < i) return t.useSpace ? r.default.Messages.FILE_SIZE_MB.format({
            size: a
        }) : r.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: a
        });
        var u = a / i;
        return u = t.showDecimalForGB ? Math.round(10 * u) / 10 : Math.round(u), t.useSpace ? r.default.Messages.FILE_SIZE_GB.format({
            size: u
        }) : r.default.Messages.FILE_SIZE_GB_NO_SPACE.format({
            size: u
        })
    }

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
            n = t.useKibibytes ? 1024 : 1e3,
            a = t.useKibibytes ? 1024 : 1e3,
            u = e / n;
        return u / a >= 1 ? i(u, t) : t.useSpace ? r.default.Messages.FILE_SIZE_KB.format({
            size: Math.ceil(u)
        }) : r.default.Messages.FILE_SIZE_KB_NO_SPACE.format({
            size: Math.ceil(u)
        })
    }
}