function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("90915"),
        o = n("77078"),
        u = n("94334");
    let d = l.forwardRef(function(e, t) {
        var n;
        let {
            avatar: l,
            name: a,
            children: d,
            subText: c,
            decorators: f,
            onClick: p,
            selected: m,
            muted: h,
            to: x,
            avatarClassName: E,
            selectedClassName: y,
            innerClassName: g,
            wrapContent: S,
            highlighted: C,
            focusProps: I,
            ...T
        } = e;
        T.className = s(T.className, u.container, {
            [u.selected]: m,
            [u.highlighted]: C,
            [null != y ? y : ""]: m,
            [u.clickable]: !m && (null != x || null != p)
        }), T["aria-selected"] = null !== (n = T["aria-selected"]) && void 0 !== n ? n : m;
        let _ = (0, i.jsxs)("div", {
            className: s(g, u.layout, {
                [u.muted]: !m && h,
                [u.wrappedLayout]: S
            }),
            children: [(0, i.jsx)("div", {
                className: s(u.avatar, E),
                children: l
            }), (0, i.jsxs)("div", {
                className: u.content,
                children: [(0, i.jsxs)("div", {
                    className: u.nameAndDecorators,
                    children: [(0, i.jsx)("div", {
                        className: s(u.name, {
                            [u.wrappedName]: S
                        }),
                        children: a
                    }), f]
                }), null != c ? (0, i.jsx)("div", {
                    className: u.subText,
                    children: c
                }) : null]
            }), null != d ? (0, i.jsx)("div", {
                className: u.children,
                children: d
            }) : null]
        });
        return null != x ? (0, i.jsx)(o.FocusRing, {
            ...I,
            children: (0, i.jsx)(r.Link, {
                to: x,
                onClick: p,
                ...T,
                role: "listitem",
                ref: t,
                children: _
            })
        }) : null != p ? (0, i.jsx)(o.Clickable, {
            onClick: p,
            focusProps: I,
            ...T,
            role: "listitem",
            innerRef: t,
            children: _
        }) : (0, i.jsx)(o.FocusRing, {
            ...I,
            children: (0, i.jsx)("div", {
                ...T,
                role: "listitem",
                ref: t,
                children: _
            })
        })
    });
    var c = d
}