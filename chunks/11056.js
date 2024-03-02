function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("90915"),
        o = n("77078"),
        u = n("94334");
    let d = i.forwardRef(function(e, t) {
        var n;
        let {
            avatar: i,
            name: a,
            children: d,
            subText: c,
            decorators: f,
            onClick: m,
            selected: p,
            muted: h,
            to: E,
            avatarClassName: g,
            selectedClassName: C,
            innerClassName: S,
            wrapContent: T,
            highlighted: I,
            focusProps: v,
            ..._
        } = e;
        _.className = s(_.className, u.container, {
            [u.selected]: p,
            [u.highlighted]: I,
            [null != C ? C : ""]: p,
            [u.clickable]: !p && (null != E || null != m)
        }), _["aria-selected"] = null !== (n = _["aria-selected"]) && void 0 !== n ? n : p;
        let N = (0, l.jsxs)("div", {
            className: s(S, u.layout, {
                [u.muted]: !p && h,
                [u.wrappedLayout]: T
            }),
            children: [(0, l.jsx)("div", {
                className: s(u.avatar, g),
                children: i
            }), (0, l.jsxs)("div", {
                className: u.content,
                children: [(0, l.jsxs)("div", {
                    className: u.nameAndDecorators,
                    children: [(0, l.jsx)("div", {
                        className: s(u.name, {
                            [u.wrappedName]: T
                        }),
                        children: a
                    }), f]
                }), null != c ? (0, l.jsx)("div", {
                    className: u.subText,
                    children: c
                }) : null]
            }), null != d ? (0, l.jsx)("div", {
                className: u.children,
                children: d
            }) : null]
        });
        return null != E ? (0, l.jsx)(o.FocusRing, {
            ...v,
            children: (0, l.jsx)(r.Link, {
                to: E,
                onClick: m,
                ..._,
                role: "listitem",
                ref: t,
                children: N
            })
        }) : null != m ? (0, l.jsx)(o.Clickable, {
            onClick: m,
            focusProps: v,
            ..._,
            role: "listitem",
            innerRef: t,
            children: N
        }) : (0, l.jsx)(o.FocusRing, {
            ...v,
            children: (0, l.jsx)("div", {
                ..._,
                role: "listitem",
                ref: t,
                children: N
            })
        })
    });
    var c = d
}