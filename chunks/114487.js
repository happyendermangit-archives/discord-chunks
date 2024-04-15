function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("806519"),
        l = n("768581"),
        u = n("566434");
    t.default = r.memo(function(e) {
        var t;
        let {
            guild: n,
            iconSize: r,
            className: s
        } = e, d = null !== (t = l.default.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: r,
            canAnimate: !0
        })) && void 0 !== t ? t : void 0;
        return null == d ? (0, i.jsx)(o.default, {
            mask: o.default.Masks.SQUIRCLE,
            width: r,
            height: r,
            className: s,
            children: (0, i.jsx)("div", {
                className: a()(u.guildIconImage, u.acronym),
                children: n.acronym
            })
        }) : (0, i.jsx)(o.default, {
            mask: o.default.Masks.SQUIRCLE,
            width: r,
            height: r,
            className: s,
            children: (0, i.jsx)("img", {
                src: d,
                alt: n.name,
                className: u.guildIconImage
            })
        })
    })
}