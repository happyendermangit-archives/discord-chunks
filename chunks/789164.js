function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormSection: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("337033"),
        s = n("15127"),
        o = n("512983"),
        l = n("444364");
    let u = r.forwardRef(function(e, t) {
        var n;
        let {
            children: u,
            className: d,
            titleClassName: _,
            title: c,
            icon: E,
            disabled: I,
            htmlFor: T,
            tag: f = "h5",
            ...S
        } = e, h = r.useId(), A = null !== (n = S.titleId) && void 0 !== n ? n : h;
        return (0, i.jsx)("div", {
            ref: t,
            className: d,
            children: null != c ? (0, i.jsx)(a.HeadingLevel, {
                component: (0, i.jsxs)("div", {
                    className: l.sectionTitle,
                    children: [E, null != c ? (0, i.jsx)(o.FormTitle, {
                        tag: f,
                        id: A,
                        htmlFor: T,
                        disabled: I,
                        className: _,
                        children: c
                    }) : null]
                }),
                children: (0, i.jsx)("div", {
                    className: l.children,
                    children: (0, i.jsx)(s.FormContextProvider, {
                        titleId: A,
                        children: u
                    })
                })
            }) : u
        })
    })
}