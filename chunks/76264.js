function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("259580"),
        a = n("182019");
    let o = e => {
        let {
            child: t,
            onClick: n
        } = e, [o] = t;
        return (0, i.jsxs)(r.Clickable, {
            className: a.childButton,
            onClick: () => n(t),
            children: [(0, i.jsx)(r.Text, {
                className: a.childText,
                variant: "text-md/semibold",
                children: o
            }), (0, i.jsx)(s.default, {
                className: a.childIcon,
                direction: s.default.Directions.RIGHT
            })]
        })
    };
    t.default = e => {
        let {
            node: {
                children: t
            },
            onSelectChild: n
        } = e;
        if (null == t || 0 === t.length) return null;
        let r = t.map(e => {
            let [t, r] = e;
            return (0, i.jsx)(o, {
                child: e,
                onClick: n
            }, "".concat(t, "+").concat(r))
        });
        return (0, i.jsx)("div", {
            className: a.__invalid_childrenContainer,
            children: r
        })
    }
}