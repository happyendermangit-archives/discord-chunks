function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        r = n.n(s),
        u = n("1339"),
        i = n("534242"),
        c = n("919163");

    function d(e) {
        let {
            description: t,
            className: n,
            guildId: s,
            truncate: d = !0
        } = e, o = a.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
            guildId: s,
            allowLinks: !0,
            allowHeading: !0,
            allowList: !0
        }), [t, s]);
        return (0, l.jsx)("div", {
            className: r(i.descriptionText, n, c.markup, {
                [i.truncate]: d
            }),
            children: o
        })
    }
}