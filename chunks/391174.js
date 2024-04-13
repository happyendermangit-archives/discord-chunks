function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return c
        }
    });
    var l = a("735250"),
        n = a("470079"),
        s = a("803997"),
        r = a.n(s),
        u = a("725436"),
        i = a("161061"),
        d = a("931093");

    function c(e) {
        let {
            description: t,
            className: a,
            guildId: s,
            truncate: c = !0
        } = e, o = n.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
            guildId: s,
            allowLinks: !0,
            allowHeading: !0,
            allowList: !0
        }), [t, s]);
        return (0, l.jsx)("div", {
            className: r()(i.descriptionText, a, d.markup, {
                [i.truncate]: c
            }),
            children: o
        })
    }
}