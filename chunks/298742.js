function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormItem: function() {
            return o
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("516826"),
        a = n("818810");
    let o = s.forwardRef(function(e, t) {
        var n, o;
        let {
            children: l,
            disabled: u = !1,
            className: d,
            titleClassName: c,
            tag: f = "h5",
            required: _ = !1,
            style: h,
            title: E,
            error: g,
            ...m
        } = e, p = s.useId(), S = s.useId(), v = null !== (n = m.titleId) && void 0 !== n ? n : p, T = null != g ? null !== (o = m.errorId) && void 0 !== o ? o : S : void 0;
        return (0, i.jsxs)("div", {
            ref: t,
            className: null != d ? d : void 0,
            style: null != h ? h : void 0,
            children: [null != E || null != g ? (0, i.jsx)(a.FormTitle, {
                tag: f,
                disabled: u,
                required: _,
                error: g,
                className: c,
                id: v,
                errorId: T,
                ...m,
                children: E
            }) : null, (0, i.jsx)(r.FormContextProvider, {
                titleId: v,
                errorId: T,
                error: null != g ? g : void 0,
                children: l
            })]
        })
    })
}