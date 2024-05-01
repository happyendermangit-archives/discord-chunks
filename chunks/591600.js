function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("666520"),
        s = n("785717"),
        o = n("659101"),
        l = n("689938"),
        u = n("695760"),
        d = n("795197");

    function _(e) {
        let {
            user: t,
            setNote: n,
            autoFocus: _,
            lastSection: c
        } = e, {
            trackUserProfileAction: E
        } = (0, s.useUserProfileAnalyticsContext)();
        return (0, i.jsxs)(o.default, {
            lastSection: c,
            children: [(0, i.jsx)(r.Heading, {
                variant: "eyebrow",
                className: d.title,
                children: l.default.Messages.NOTE
            }), (0, i.jsx)(a.default, {
                userId: t.id,
                autoFocus: n || _,
                className: u.note,
                onUpdate: () => E({
                    action: "SET_NOTE"
                })
            }, "note")]
        })
    }
}