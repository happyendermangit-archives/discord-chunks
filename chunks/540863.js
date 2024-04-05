function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormItem: function() {
            return o
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("15127"),
        a = n("512983");
    let o = r.forwardRef(function(e, t) {
        var n, o;
        let {
            children: l,
            disabled: u = !1,
            className: d,
            titleClassName: _,
            tag: c = "h5",
            required: E = !1,
            style: I,
            title: T,
            error: f,
            ...S
        } = e, A = r.useId(), h = r.useId(), m = null !== (n = S.titleId) && void 0 !== n ? n : A, N = null != f ? null !== (o = S.errorId) && void 0 !== o ? o : h : void 0;
        return (0, i.jsxs)("div", {
            ref: t,
            className: null != d ? d : void 0,
            style: null != I ? I : void 0,
            children: [null != T || null != f ? (0, i.jsx)(a.FormTitle, {
                tag: c,
                disabled: u,
                required: E,
                error: f,
                className: _,
                id: m,
                errorId: N,
                ...S,
                children: T
            }) : null, (0, i.jsx)(s.FormContextProvider, {
                titleId: m,
                errorId: N,
                error: null != f ? f : void 0,
                children: l
            })]
        })
    })
}