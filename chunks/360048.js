function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("613828"),
        l = n("481060"),
        u = n("507861");
    let d = r.forwardRef(function(e, t) {
        var n;
        let {
            avatar: r,
            name: a,
            children: d,
            subText: _,
            decorators: c,
            onClick: E,
            selected: I,
            muted: T,
            to: f,
            avatarClassName: S,
            selectedClassName: h,
            innerClassName: A,
            wrapContent: m,
            highlighted: N,
            focusProps: p,
            ...O
        } = e;
        O.className = s()(O.className, u.container, {
            [u.selected]: I,
            [u.highlighted]: N,
            [null != h ? h : ""]: I,
            [u.clickable]: !I && (null != f || null != E)
        }), O["aria-selected"] = null !== (n = O["aria-selected"]) && void 0 !== n ? n : I;
        let R = (0, i.jsxs)("div", {
            className: s()(A, u.layout, {
                [u.muted]: !I && T,
                [u.wrappedLayout]: m
            }),
            children: [(0, i.jsx)("div", {
                className: s()(u.avatar, S),
                children: r
            }), (0, i.jsxs)("div", {
                className: u.content,
                children: [(0, i.jsxs)("div", {
                    className: u.nameAndDecorators,
                    children: [(0, i.jsx)("div", {
                        className: s()(u.name, {
                            [u.wrappedName]: m
                        }),
                        children: a
                    }), c]
                }), null != _ ? (0, i.jsx)("div", {
                    className: u.subText,
                    children: _
                }) : null]
            }), null != d ? (0, i.jsx)("div", {
                className: u.children,
                children: d
            }) : null]
        });
        return null != f ? (0, i.jsx)(l.FocusRing, {
            ...p,
            children: (0, i.jsx)(o.Link, {
                to: f,
                onClick: E,
                ...O,
                role: "listitem",
                ref: t,
                children: R
            })
        }) : null != E ? (0, i.jsx)(l.Clickable, {
            onClick: E,
            focusProps: p,
            ...O,
            role: "listitem",
            innerRef: t,
            children: R
        }) : (0, i.jsx)(l.FocusRing, {
            ...p,
            children: (0, i.jsx)("div", {
                ...O,
                role: "listitem",
                ref: t,
                children: R
            })
        })
    });
    t.default = d
}