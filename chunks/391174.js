function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return c
        }
    });
    var n = s("735250"),
        l = s("470079"),
        a = s("120356"),
        r = s.n(a),
        u = s("725436"),
        i = s("749839"),
        d = s("990291");

    function c(e) {
        let {
            description: t,
            className: s,
            guildId: a,
            truncate: c = !0
        } = e, o = l.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
            guildId: a,
            allowLinks: !0,
            allowHeading: !0,
            allowList: !0
        }), [t, a]);
        return (0, n.jsx)("div", {
            className: r()(i.descriptionText, s, d.markup, {
                [i.truncate]: c
            }),
            children: o
        })
    }
}