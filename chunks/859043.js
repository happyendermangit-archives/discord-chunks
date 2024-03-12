function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var a = n("37983");
    n("884691");
    var l = n("77078"),
        r = n("461380"),
        s = n("165296");
    let i = e => {
        let {
            child: t,
            onClick: n
        } = e, [i] = t;
        return (0, a.jsxs)(l.Clickable, {
            className: s.childButton,
            onClick: () => n(t),
            children: [(0, a.jsx)(l.Text, {
                className: s.childText,
                variant: "text-md/semibold",
                children: i
            }), (0, a.jsx)(r.default, {
                className: s.childIcon,
                direction: r.default.Directions.RIGHT
            })]
        })
    };
    var d = e => {
        let {
            node: {
                children: t
            },
            onSelectChild: n
        } = e;
        if (null == t || 0 === t.length) return null;
        let l = t.map(e => {
            let [t, l] = e;
            return (0, a.jsx)(i, {
                child: e,
                onClick: n
            }, "".concat(t, "+").concat(l))
        });
        return (0, a.jsx)("div", {
            className: s.childrenContainer,
            children: l
        })
    }
}