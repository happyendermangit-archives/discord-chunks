function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        getSizeForWidth: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("481060"),
        o = n("285952"),
        l = n("349611");

    function u(e) {
        return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
    }

    function d(e) {
        let {
            onCTAClick: t,
            callToAction: n,
            header: r,
            description: u,
            size: d,
            className: _,
            artURL: c,
            noArt: E = !1,
            selected: I = !1
        } = e;
        return (0, i.jsxs)(o.default, {
            className: _,
            justify: o.default.Justify.CENTER,
            align: o.default.Align.CENTER,
            direction: o.default.Direction.VERTICAL,
            style: {
                padding: 4
            },
            children: [!E && null != c && (0, i.jsx)("div", {
                className: s()(l.art, l[d]),
                style: {
                    backgroundImage: "url(".concat(c, ")")
                }
            }), null != r ? (0, i.jsx)(a.Text, {
                color: "none",
                variant: "text-md/semibold",
                className: l.header,
                children: r
            }) : null, null != u ? (0, i.jsx)(a.Text, {
                color: "none",
                className: l.description,
                variant: "text-sm/medium",
                children: u
            }) : null, I || null == n ? null : (0, i.jsx)(a.Button, {
                className: l.outerButton,
                size: a.Button.Sizes.NONE,
                color: a.Button.Colors.WHITE,
                look: a.Button.Looks.BLANK,
                innerClassName: l.button,
                onClick: e => {
                    e.stopPropagation(), null == t || t(e)
                },
                children: n
            })]
        })
    }
}