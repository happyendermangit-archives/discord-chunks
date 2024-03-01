function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("910330"),
        s = n("777003"),
        r = n("782340"),
        o = n("999050"),
        u = n("862939");

    function d(e) {
        let {
            user: t,
            setNote: n,
            autoFocus: d,
            lastSection: c,
            hideNote: f
        } = e;
        return f ? null : (0, l.jsxs)(s.default, {
            lastSection: c,
            children: [(0, l.jsx)(i.Heading, {
                variant: "eyebrow",
                className: u.title,
                children: r.default.Messages.NOTE
            }), (0, l.jsx)(a.default, {
                userId: t.id,
                autoFocus: n || d,
                className: o.note
            }, "note")]
        })
    }
}