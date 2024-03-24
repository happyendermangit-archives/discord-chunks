function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("367376"),
        i = n("442791"),
        d = n("782340"),
        o = n("231074"),
        u = n("890957");
    let c = e => {
        let {
            data: {
                title: t,
                subtitle: n,
                placeholder: c,
                rows: m,
                character_limit: _,
                pattern: f
            },
            onChange: E,
            initialText: h,
            isRequired: v
        } = e, R = l.useRef(s.default.reactParserFor({
            ...s.default.defaultRules,
            link: i.LinkMarkupRule
        })), [x, p] = l.useState(""), [N, g] = l.useState("");
        l.useEffect(() => {
            var e;
            p(null !== (e = null == h ? void 0 : h.value) && void 0 !== e ? e : "")
        }, [h]);
        let T = l.useCallback(e => {
            let t = null != f ? new RegExp(f) : null;
            null != t && null == t.exec(e) ? (g(d.default.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR), E({
                value: e,
                isValid: !1
            })) : null != e && (g(""), p(e), E({
                value: e,
                isValid: !0
            }))
        }, [E, f]);
        return (0, a.jsxs)("div", {
            className: u.marginBottom8,
            children: [null != t && (0, a.jsx)("div", {
                className: u.marginBottom8,
                children: (0, a.jsxs)(r.Text, {
                    variant: "text-sm/bold",
                    children: [t, v && (0, a.jsx)("span", {
                        className: o.required,
                        children: "*"
                    })]
                })
            }), (0, a.jsx)(r.TextArea, {
                maxLength: _,
                onChange: T,
                value: x,
                error: N,
                rows: m,
                placeholder: c,
                autoFocus: !0
            }), null != n && (0, a.jsx)("div", {
                children: (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children: R.current(n)
                })
            })]
        })
    };
    var m = e => {
        let {
            elements: t,
            onChange: n,
            state: l
        } = e, r = t.map(e => {
            var t;
            let r = e.name;
            return (0, a.jsx)(c, {
                data: e.data,
                onChange: e => n(r, e.value, e.isValid),
                initialText: null !== (t = null == l ? void 0 : l[r]) && void 0 !== t ? t : void 0,
                isRequired: e.should_submit_data
            }, r)
        });
        return (0, a.jsx)("div", {
            children: r
        })
    }
}