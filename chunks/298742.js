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
            tag: _ = "h5",
            required: f = !1,
            style: E,
            title: h,
            error: g,
            ...m
        } = e, p = s.useId(), S = s.useId(), T = null !== (n = m.titleId) && void 0 !== n ? n : p, v = null != g ? null !== (o = m.errorId) && void 0 !== o ? o : S : void 0;
        return (0, i.jsxs)("div", {
            ref: t,
            className: null != d ? d : void 0,
            style: null != E ? E : void 0,
            children: [null != h || null != g ? (0, i.jsx)(a.FormTitle, {
                tag: _,
                disabled: u,
                required: f,
                error: g,
                className: c,
                id: T,
                errorId: v,
                ...m,
                children: h
            }) : null, (0, i.jsx)(r.FormContextProvider, {
                titleId: T,
                errorId: v,
                error: null != g ? g : void 0,
                children: l
            })]
        })
    })
}