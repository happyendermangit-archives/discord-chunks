function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormSection: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("337033"),
        a = n("15127"),
        o = n("512983"),
        l = n("441422");

    function u(e) {
        var t;
        let {
            children: n,
            className: u,
            titleClassName: d,
            title: _,
            icon: c,
            disabled: E,
            htmlFor: I,
            tag: T = "h5",
            ...f
        } = e, S = r.useId(), h = null !== (t = f.titleId) && void 0 !== t ? t : S;
        return null != _ ? (0, i.jsx)("div", {
            className: u,
            children: (0, i.jsx)(s.HeadingLevel, {
                component: (0, i.jsxs)("div", {
                    className: l.sectionTitle,
                    children: [c, null != _ ? (0, i.jsx)(o.FormTitle, {
                        tag: T,
                        id: h,
                        htmlFor: I,
                        disabled: E,
                        className: d,
                        children: _
                    }) : null]
                }),
                children: (0, i.jsx)("div", {
                    className: l.children,
                    children: (0, i.jsx)(a.FormContextProvider, {
                        titleId: h,
                        children: n
                    })
                })
            })
        }) : (0, i.jsx)("div", {
            className: u,
            children: n
        })
    }
}