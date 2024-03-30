function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("247164"),
        u = n("103566"),
        s = n("845265"),
        l = n("627537");

    function c(e) {
        var t = e.width,
            n = void 0 === t ? 20 : t,
            o = e.height,
            c = void 0 === o ? 20 : o,
            f = e.className;
        return r.createElement("div", {
            className: i()(l.icon, f)
        }, r.createElement(s.default, {
            mask: s.default.Masks.STATUS_SCREENSHARE,
            width: n,
            height: c
        }, r.createElement(u.default, {
            width: n,
            height: c
        })), r.createElement(a.default, {
            className: l.badge
        }))
    }
}