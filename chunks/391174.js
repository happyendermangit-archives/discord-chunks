function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var s = n("735250"),
        l = n("470079"),
        a = n("120356"),
        r = n.n(a),
        u = n("725436"),
        i = n("749839"),
        c = n("990291");

    function d(e) {
        let {
            description: t,
            className: n,
            guildId: a,
            truncate: d = !0
        } = e, o = l.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
            guildId: a,
            allowLinks: !0,
            allowHeading: !0,
            allowList: !0
        }), [t, a]);
        return (0, s.jsx)("div", {
            className: r()(i.descriptionText, n, c.markup, {
                [i.truncate]: d
            }),
            children: o
        })
    }
}