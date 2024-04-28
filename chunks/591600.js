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
        s = n("666520"),
        a = n("785717"),
        o = n("659101"),
        l = n("689938"),
        u = n("917943"),
        d = n("379916");

    function _(e) {
        let {
            user: t,
            setNote: n,
            autoFocus: _,
            lastSection: c
        } = e, {
            trackUserProfileAction: E
        } = (0, a.useUserProfileAnalyticsContext)();
        return (0, i.jsxs)(o.default, {
            lastSection: c,
            children: [(0, i.jsx)(r.Heading, {
                variant: "eyebrow",
                className: d.title,
                children: l.default.Messages.NOTE
            }), (0, i.jsx)(s.default, {
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