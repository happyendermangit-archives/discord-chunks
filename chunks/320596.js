function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("454585"),
        o = n("273744"),
        l = n("689938"),
        u = n("321779"),
        d = n("949086");
    let _ = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                placeholder: _,
                rows: c,
                character_limit: E,
                pattern: I
            },
            onChange: T,
            initialText: f,
            isRequired: S
        } = e, h = r.useRef(a.default.reactParserFor({
            ...a.default.defaultRules,
            link: o.LinkMarkupRule
        })), [A, m] = r.useState(""), [N, p] = r.useState("");
        r.useEffect(() => {
            var e;
            m(null !== (e = null == f ? void 0 : f.value) && void 0 !== e ? e : "")
        }, [f]);
        let O = r.useCallback(e => {
            let t = null != I ? new RegExp(I) : null;
            null != t && null == t.exec(e) ? (p(l.default.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR), T({
                value: e,
                isValid: !1
            })) : null != e && (p(""), m(e), T({
                value: e,
                isValid: !0
            }))
        }, [T, I]);
        return (0, i.jsxs)("div", {
            className: d.marginBottom8,
            children: [null != t && (0, i.jsx)("div", {
                className: d.marginBottom8,
                children: (0, i.jsxs)(s.Text, {
                    variant: "text-sm/bold",
                    children: [t, S && (0, i.jsx)("span", {
                        className: u.required,
                        children: "*"
                    })]
                })
            }), (0, i.jsx)(s.TextArea, {
                maxLength: E,
                onChange: O,
                value: A,
                error: N,
                rows: c,
                placeholder: _,
                autoFocus: !0
            }), null != n && (0, i.jsx)("div", {
                children: (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: h.current(n)
                })
            })]
        })
    };
    t.default = e => {
        let {
            elements: t,
            onChange: n,
            state: r
        } = e, s = t.map(e => {
            var t;
            let s = e.name;
            return (0, i.jsx)(_, {
                data: e.data,
                onChange: e => n(s, e.value, e.isValid),
                initialText: null !== (t = null == r ? void 0 : r[s]) && void 0 !== t ? t : void 0,
                isRequired: e.should_submit_data
            }, s)
        });
        return (0, i.jsx)("div", {
            children: s
        })
    }
}