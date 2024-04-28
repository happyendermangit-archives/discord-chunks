function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("242411"),
        l = n("806519"),
        u = n("687669");
    t.default = e => {
        let {
            className: t,
            guild: n,
            isSelected: s = !0,
            width: d = 32,
            height: _ = 32,
            shouldAnimate: c = !0,
            isLocked: E = !1
        } = e, [I, T] = r.useState(!1), f = n.getIconURL(32, c && s), S = () => T(!0), h = () => T(!1);
        return (0, i.jsxs)("div", {
            onFocus: S,
            onBlur: h,
            onMouseOver: S,
            onMouseLeave: h,
            children: [(0, i.jsx)(l.default, {
                className: a()(u.mask, t),
                mask: s || I ? l.MaskIDs.SQUIRCLE : l.MaskIDs.AVATAR_DEFAULT,
                width: d,
                height: _,
                children: null == f ? (0, i.jsx)("div", {
                    className: a()(u.guildIcon, u.guildIconWithoutImage),
                    children: (0, i.jsx)("div", {
                        className: u.guildAcronym,
                        children: n.acronym
                    })
                }) : (0, i.jsx)("img", {
                    alt: n.toString(),
                    src: f,
                    className: u.guildIcon
                })
            }), E ? (0, i.jsx)("div", {
                className: u.categoryItemLockIconContainer,
                children: (0, i.jsx)(o.default, {
                    width: 10,
                    height: 10,
                    className: u.categoryItemLockIcon
                })
            }) : null]
        })
    }
}