function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("493687"),
        a = n("264437"),
        u = n("877987"),
        s = n("941504"),
        l = n("718823"),
        c = n("989171");

    function f(e) {
        var t = e.user,
            n = e.setNote,
            f = e.autoFocus,
            d = e.lastSection,
            _ = (0, a.useUserProfileAnalyticsContext)().trackUserProfileAction;
        return r.createElement(u.default, {
            lastSection: d
        }, r.createElement(o.Heading, {
            variant: "eyebrow",
            className: c.title
        }, s.default.Messages.NOTE), r.createElement(i.default, {
            key: "note",
            userId: t.id,
            autoFocus: n || f,
            className: l.note,
            onUpdate: function() {
                return _({
                    action: "SET_NOTE"
                })
            }
        }))
    }
}