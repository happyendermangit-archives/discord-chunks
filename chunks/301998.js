function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("910330"),
        s = n("756507"),
        r = n("777003"),
        o = n("782340"),
        u = n("999050"),
        d = n("862939");

    function c(e) {
        let {
            user: t,
            setNote: n,
            autoFocus: c,
            lastSection: f
        } = e, {
            trackUserProfileAction: p
        } = (0, s.useUserProfileAnalyticsContext)();
        return (0, i.jsxs)(r.default, {
            lastSection: f,
            children: [(0, i.jsx)(l.Heading, {
                variant: "eyebrow",
                className: d.title,
                children: o.default.Messages.NOTE
            }), (0, i.jsx)(a.default, {
                userId: t.id,
                autoFocus: n || c,
                className: u.note,
                onUpdate: () => p({
                    action: "SET_NOTE"
                })
            }, "note")]
        })
    }
}