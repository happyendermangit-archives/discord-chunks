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
            ..._
        } = e;
        _.className = s(_.className, u.container, {
            [u.selected]: m,
            [u.highlighted]: C,
            [null != y ? y : ""]: m,
            [u.clickable]: !m && (null != x || null != p)
        }), _["aria-selected"] = null !== (n = _["aria-selected"]) && void 0 !== n ? n : m;
        let T = (0, i.jsxs)("div", {
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
                ..._,
                role: "listitem",
                ref: t,
                children: T
            })
        }) : null != p ? (0, i.jsx)(o.Clickable, {
            onClick: p,
            focusProps: I,
            ..._,
            role: "listitem",
            innerRef: t,
            children: T
        }) : (0, i.jsx)(o.FocusRing, {
            ...I,
            children: (0, i.jsx)("div", {
                ..._,
                role: "listitem",
                ref: t,
                children: T
            })
        })
    });
    var c = d
}