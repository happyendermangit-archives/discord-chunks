function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatKbSize: function() {
            return s
        },
        formatSize: function() {
            return a
        }
    });
    var i = n("689938");
    let r = {
        useKibibytes: !1,
        showDecimalForGB: !0,
        useSpace: !0
    };

    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            n = t.useKibibytes ? 1024 : 1e3,
            a = t.useKibibytes ? 1024 : 1e3,
            s = Math.ceil(e / n);
        if (s < a) return t.useSpace ? i.default.Messages.FILE_SIZE_MB.format({
            size: s
        }) : i.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: s
        });
        let o = s / a;
        return o = t.showDecimalForGB ? Math.round(10 * o) / 10 : Math.round(o), t.useSpace ? i.default.Messages.FILE_SIZE_GB.format({
            size: o
        }) : i.default.Messages.FILE_SIZE_GB_NO_SPACE.format({
            size: o
        })
    }

    function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            n = t.useKibibytes ? 1024 : 1e3,
            s = t.useKibibytes ? 1024 : 1e3,
            o = e / n;
        return o / s >= 1 ? a(o, t) : t.useSpace ? i.default.Messages.FILE_SIZE_KB.format({
            size: Math.ceil(o)
        }) : i.default.Messages.FILE_SIZE_KB_NO_SPACE.format({
            size: Math.ceil(o)
        })
    }
}