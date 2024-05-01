function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormTitle: function() {
            return d
        },
        FormTitleTags: function() {
            return r
        }
    });
    var i, r, a = n("735250");
    n("470079");
    var s = n("120356"),
        o = n.n(s),
        l = n("337033"),
        u = n("296411");

    function d(e) {
        let t, {
            tag: n = "h5",
            children: i,
            className: r,
            faded: s,
            disabled: d,
            required: _ = !1,
            error: c,
            errorId: E,
            ...I
        } = e;
        switch (n) {
            case "legend":
            case "label":
                t = n;
                break;
            default:
                t = l.H
        }
        return (0, a.jsxs)(t, {
            className: o()(u[n], "h5" !== n ? u.defaultColor : null, r, {
                [u["defaultMargin".concat(n)]]: null == r,
                [u.faded]: s,
                [u.disabled]: d,
                [u.error]: null != c
            }),
            ...I,
            children: [i, _ && null == c ? (0, a.jsx)("span", {
                className: u.required,
                children: "*"
            }) : null, null != c ? (0, a.jsxs)("span", {
                id: E,
                className: u.errorMessage,
                children: [null != i ? (0, a.jsx)("span", {
                    className: u.errorSeparator,
                    children: "-"
                }) : null, c]
            }) : null]
        })
    }(i = r || (r = {})).H1 = "h1", i.H2 = "h2", i.H3 = "h3", i.H4 = "h4", i.H5 = "h5", i.LABEL = "label", i.LEGEND = "legend"
}