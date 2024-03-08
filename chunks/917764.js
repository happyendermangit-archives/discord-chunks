function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
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
                isLocked: p = !1
            } = e, [m, h] = l.useState(!1), x = n.getIconURL(32, f && a), E = () => h(!0), y = () => h(!1);
            return (0, i.jsxs)("div", {
                onFocus: E,
                onBlur: y,
                onMouseOver: E,
                onMouseLeave: y,
                children: [(0, i.jsx)(o.default, {
                    className: s(u.mask, t),
                    mask: a || m ? o.MaskIDs.SQUIRCLE : o.MaskIDs.AVATAR_DEFAULT,
                    width: d,
                    height: c,
                    children: null == x ? (0, i.jsx)("div", {
                        className: s(u.guildIcon, u.guildIconWithoutImage),
                        children: (0, i.jsx)("div", {
                            className: u.guildAcronym,
                            children: n.acronym
                        })
                    }) : (0, i.jsx)("img", {
                        alt: n.toString(),
                        src: x,
                        className: u.guildIcon
                    })
                }), p ? (0, i.jsx)("div", {
                    className: u.categoryItemLockIconContainer,
                    children: (0, i.jsx)(r.default, {
                        width: 10,
                        height: 10,
                        className: u.categoryItemLockIcon
                    })
                }) : null]
            })
        }
}