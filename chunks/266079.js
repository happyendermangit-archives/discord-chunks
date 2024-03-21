function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormSwitch: function() {
            return f
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("718776"),
        l = n("980672"),
        u = n("414055"),
        d = n("370373"),
        c = n("329272"),
        _ = n("37973");

    function f(e) {
        let {
            value: t,
            disabled: n = !1,
            hideBorder: r = !1,
            tooltipNote: f,
            onChange: E,
            className: h,
            style: g,
            note: m,
            children: p
        } = e, S = s.useRef(null), v = s.useRef(null), T = s.useId(), I = (0, i.jsx)(l.Switch, {
            id: T,
            checked: t,
            onChange: E,
            disabled: n,
            focusProps: {
                enabled: !1
            },
            innerRef: S
        });
        return (0, i.jsxs)("div", {
            style: g,
            className: a(_.container, h, {
                [_.disabled]: n
            }),
            children: [(0, i.jsx)(o.FocusRing, {
                within: !0,
                offset: -4,
                focusTarget: S,
                ringTarget: v,
                children: (0, i.jsxs)("div", {
                    className: _.labelRow,
                    ref: v,
                    children: [(0, i.jsx)("label", {
                        htmlFor: T,
                        className: _.title,
                        children: p
                    }), (0, i.jsx)("div", {
                        className: _.control,
                        children: null != f ? (0, i.jsx)(u.TooltipContainer, {
                            text: f,
                            children: I
                        }) : I
                    })]
                })
            }), null != m && (0, i.jsx)("div", {
                className: _.note,
                children: (0, i.jsx)(c.FormText, {
                    disabled: n,
                    type: c.FormTextTypes.DESCRIPTION,
                    children: m
                })
            }), !r && (0, i.jsx)(d.FormDivider, {
                className: _.dividerDefault
            })]
        })
    }
}