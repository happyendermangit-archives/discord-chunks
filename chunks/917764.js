function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("600785"),
        o = n("587974"),
        u = n("205631"),
        d = e => {
            let {
                className: t,
                guild: n,
                isSelected: a = !0,
                width: d = 32,
                height: c = 32,
                shouldAnimate: f = !0,
                isLocked: m = !1
            } = e, [p, h] = i.useState(!1), E = n.getIconURL(32, f && a), g = () => h(!0), C = () => h(!1);
            return (0, l.jsxs)("div", {
                onFocus: g,
                onBlur: C,
                onMouseOver: g,
                onMouseLeave: C,
                children: [(0, l.jsx)(o.default, {
                    className: s(u.mask, t),
                    mask: a || p ? o.MaskIDs.SQUIRCLE : o.MaskIDs.AVATAR_DEFAULT,
                    width: d,
                    height: c,
                    children: null == E ? (0, l.jsx)("div", {
                        className: s(u.guildIcon, u.guildIconWithoutImage),
                        children: (0, l.jsx)("div", {
                            className: u.guildAcronym,
                            children: n.acronym
                        })
                    }) : (0, l.jsx)("img", {
                        alt: n.toString(),
                        src: E,
                        className: u.guildIcon
                    })
                }), m ? (0, l.jsx)("div", {
                    className: u.categoryItemLockIconContainer,
                    children: (0, l.jsx)(r.default, {
                        width: 10,
                        height: 10,
                        className: u.categoryItemLockIcon
                    })
                }) : null]
            })
        }
}