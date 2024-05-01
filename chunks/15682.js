function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("613817");
    let s = e => {
        let {
            onChange: t,
            label: n,
            subtitle: s,
            selected: o
        } = e;
        return (0, i.jsx)("div", {
            className: a.checkboxRow,
            children: (0, i.jsxs)(r.Checkbox, {
                type: r.Checkbox.Types.INVERTED,
                onChange: () => t(),
                value: o,
                children: [(0, i.jsx)(r.Text, {
                    color: "interactive-active",
                    variant: "text-md/semibold",
                    children: n
                }), null != s ? (0, i.jsx)(r.Text, {
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
            onChange: r
        } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let {
            data: a
        } = t;
        return (0, i.jsx)("div", {
            children: a.map((e, t) => {
                let [a, o, l] = e;
                return (0, i.jsx)(s, {
                    onChange: () => r(a, o),
                    selected: a in n,
                    label: o,
                    subtitle: l
                }, "".concat(t, "+button"))
            })
        })
    }
}