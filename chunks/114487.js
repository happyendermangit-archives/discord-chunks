function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanGuildIconSimple: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("806519"),
        l = n("768581"),
        u = n("624138"),
        d = n("374510");

    function _(e) {
        let {
            guildName: t,
            guildIconURL: n,
            iconSize: r,
            className: a
        } = e;
        if (null == n) {
            let e = (0, u.getAcronym)(t);
            return (0, i.jsx)(o.default, {
                mask: o.default.Masks.SQUIRCLE,
                width: r,
                height: r,
                className: a,
                children: (0, i.jsx)("div", {
                    className: s()(d.guildIconImage, d.acronym),
                    children: e
                })
            })
        }
        return (0, i.jsx)(o.default, {
            mask: o.default.Masks.SQUIRCLE,
            width: r,
            height: r,
            className: a,
            children: (0, i.jsx)("img", {
                src: n,
                alt: t,
                className: d.guildIconImage
            })
        })
    }
    t.default = r.memo(function(e) {
        var t;
        let {
            guild: n,
            iconSize: r,
            className: a
        } = e, s = null !== (t = l.default.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: r,
            canAnimate: !0
        })) && void 0 !== t ? t : void 0;
        return (0, i.jsx)(_, {
            guildName: n.name,
            guildIconURL: s,
            iconSize: r,
            className: a
        })
    })
}