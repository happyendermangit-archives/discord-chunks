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
    var r = n("120356"),
        a = n.n(r),
        s = n("481060"),
        o = n("285952"),
        l = n("407620");

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
                className: a()(l.art, l[d]),
                style: {
                    backgroundImage: "url(".concat(c, ")")
                }
            }), null != r ? (0, i.jsx)(s.Text, {
                color: "none",
                variant: "text-md/semibold",
                className: l.header,
                children: r
            }) : null, null != u ? (0, i.jsx)(s.Text, {
                color: "none",
                className: l.description,
                variant: "text-sm/medium",
                children: u
            }) : null, I || null == n ? null : (0, i.jsx)(s.Button, {
                className: l.outerButton,
                size: s.Button.Sizes.NONE,
                color: s.Button.Colors.WHITE,
                look: s.Button.Looks.BLANK,
                innerClassName: l.button,
                onClick: e => {
                    e.stopPropagation(), null == t || t(e)
                },
                children: n
            })]
        })
    }
}