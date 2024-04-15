function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("923717");
    let a = e => {
        let {
            onChange: t,
            label: n,
            subtitle: a,
            selected: o
        } = e;
        return (0, i.jsx)("div", {
            className: s.checkboxRow,
            children: (0, i.jsxs)(r.Checkbox, {
                type: r.Checkbox.Types.INVERTED,
                onChange: () => t(),
                value: o,
                children: [(0, i.jsx)(r.Text, {
                    color: "interactive-active",
                    variant: "text-md/semibold",
                    children: n
                }), null != a ? (0, i.jsx)(r.Text, {
                    color: "interactive-active",
                    variant: "text-sm/normal",
                    children: a
                }) : null]
            })
        })
    };
    t.default = e => {
        let {
            element: t,
            state: n,
            onChange: r
        } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let {
            data: s
        } = t;
        return (0, i.jsx)("div", {
            children: s.map((e, t) => {
                let [s, o, l] = e;
                return (0, i.jsx)(a, {
                    onChange: () => r(s, o),
                    selected: s in n,
                    label: o,
                    subtitle: l
                }, "".concat(t, "+button"))
            })
        })
    }
}