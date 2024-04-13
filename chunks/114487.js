function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("346656"),
        a = n("806519"),
        o = n("768581"),
        l = n("566434");
    t.default = r.memo(function(e) {
        var t;
        let {
            guild: n,
            iconSize: r,
            backupSize: u = "LARGER",
            className: d
        } = e, _ = null !== (t = o.default.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: r,
            canAnimate: !0
        })) && void 0 !== t ? t : void 0;
        return null == _ ? (0, i.jsx)(s.default, {
            size: s.default.Sizes[u],
            guild: n,
            animate: !0,
            className: d
        }) : (0, i.jsx)(a.default, {
            mask: a.default.Masks.SQUIRCLE,
            width: r,
            height: r,
            className: d,
            children: (0, i.jsx)("img", {
                src: _,
                alt: n.name,
                className: l.guildIconImage
            })
        })
    })
}