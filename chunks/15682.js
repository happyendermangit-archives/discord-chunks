function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var a = n("735250");
    n("470079");
    var l = n("481060"),
        r = n("923717");
    let s = e => {
        let {
            onChange: t,
            label: n,
            subtitle: s,
            selected: i
        } = e;
        return (0, a.jsx)("div", {
            className: r.checkboxRow,
            children: (0, a.jsxs)(l.Checkbox, {
                type: l.Checkbox.Types.INVERTED,
                onChange: () => t(),
                value: i,
                children: [(0, a.jsx)(l.Text, {
                    color: "interactive-active",
                    variant: "text-md/semibold",
                    children: n
                }), null != s ? (0, a.jsx)(l.Text, {
                    color: "interactive-active",
                    variant: "text-sm/normal",
                    children: s
                }) : null]
            })
        })
    };
    t.default = e => {
        let {
            element: t,
            state: n,
            onChange: l
        } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let {
            data: r
        } = t;
        return (0, a.jsx)("div", {
            children: r.map((e, t) => {
                let [r, i, d] = e;
                return (0, a.jsx)(s, {
                    onChange: () => l(r, i),
                    selected: r in n,
                    label: i,
                    subtitle: d
                }, "".concat(t, "+button"))
            })
        })
    }
}