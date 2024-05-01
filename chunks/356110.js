function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("481060"),
        s = n("866627"),
        o = n("949086");
    let l = e => {
        let {
            element: t,
            onChange: n,
            initialOption: l
        } = e, [u, d] = r.useState("");
        r.useEffect(() => {
            d(null != l ? l : "")
        }, [l]);
        let _ = t.name,
            {
                title: c,
                options: E
            } = t.data,
            I = r.useCallback(e => {
                null != e && (d(e), n(e))
            }, [n]);
        return (0, i.jsxs)("div", {
            className: o.marginBottom8,
            children: [null != c && (0, i.jsx)("div", {
                className: o.marginBottom8,
                children: (0, i.jsxs)(a.Text, {
                    variant: "text-sm/bold",
                    children: [c, t.should_submit_data && (0, i.jsx)("span", {
                        className: s.required,
                        children: "*"
                    })]
                })
            }), (0, i.jsx)(a.SingleSelect, {
                value: u,
                onChange: I,
                options: E
            })]
        }, _)
    };
    t.default = e => {
        let {
            elements: t,
            onChange: n,
            state: r
        } = e, a = t.map(e => {
            var t, a;
            let s = e.name;
            return (0, i.jsx)(l, {
                element: e,
                initialOption: null !== (a = null == r ? void 0 : null === (t = r[s]) || void 0 === t ? void 0 : t.value) && void 0 !== a ? a : void 0,
                onChange: e => n(s, e)
            }, s)
        });
        return (0, i.jsx)("div", {
            children: a
        })
    }
}