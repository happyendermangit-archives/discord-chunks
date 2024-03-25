function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("222007");
    var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("715708"),
        i = n("890957");
    let d = e => {
        let {
            element: t,
            onChange: n,
            initialOption: d
        } = e, [o, u] = l.useState("");
        l.useEffect(() => {
            u(null != d ? d : "")
        }, [d]);
        let c = t.name,
            {
                title: m,
                options: _
            } = t.data,
            f = l.useCallback(e => {
                null != e && (u(e), n(e))
            }, [n]);
        return (0, a.jsxs)("div", {
            className: i.marginBottom8,
            children: [null != m && (0, a.jsx)("div", {
                className: i.marginBottom8,
                children: (0, a.jsxs)(r.Text, {
                    variant: "text-sm/bold",
                    children: [m, t.should_submit_data && (0, a.jsx)("span", {
                        className: s.required,
                        children: "*"
                    })]
                })
            }), (0, a.jsx)(r.SingleSelect, {
                value: o,
                onChange: f,
                options: _
            })]
        }, c)
    };
    var o = e => {
        let {
            elements: t,
            onChange: n,
            state: l
        } = e, r = t.map(e => {
            var t, r;
            let s = e.name;
            return (0, a.jsx)(d, {
                element: e,
                initialOption: null !== (r = null == l ? void 0 : null === (t = l[s]) || void 0 === t ? void 0 : t.value) && void 0 !== r ? r : void 0,
                onChange: e => n(s, e)
            }, s)
        });
        return (0, a.jsx)("div", {
            children: r
        })
    }
}