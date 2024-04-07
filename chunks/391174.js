function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        default: function() {
            return c
        }
    });
    var a = l("735250"),
        n = l("470079"),
        s = l("803997"),
        r = l.n(s),
        u = l("725436"),
        i = l("161061"),
        d = l("931093");

    function c(e) {
        let {
            description: t,
            className: l,
            guildId: s,
            truncate: c = !0
        } = e, o = n.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
            guildId: s,
            allowLinks: !0,
            allowHeading: !0,
            allowList: !0
        }), [t, s]);
        return (0, a.jsx)("div", {
            className: r()(i.descriptionText, l, d.markup, {
                [i.truncate]: c
            }),
            children: o
        })
    }
}