function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormSwitch: function() {
            return _
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
        f = n("37973");

    function _(e) {
        let {
            value: t,
            disabled: n = !1,
            hideBorder: r = !1,
            tooltipNote: _,
            onChange: h,
            className: E,
            style: g,
            note: m,
            children: p
        } = e, S = s.useRef(null), v = s.useRef(null), T = s.useId(), I = (0, i.jsx)(l.Switch, {
            id: T,
            checked: t,
            onChange: h,
            disabled: n,
            focusProps: {
                enabled: !1
            },
            innerRef: S
        });
        return (0, i.jsxs)("div", {
            style: g,
            className: a(f.container, E, {
                [f.disabled]: n
            }),
            children: [(0, i.jsx)(o.FocusRing, {
                within: !0,
                offset: -4,
                focusTarget: S,
                ringTarget: v,
                children: (0, i.jsxs)("div", {
                    className: f.labelRow,
                    ref: v,
                    children: [(0, i.jsx)("label", {
                        htmlFor: T,
                        className: f.title,
                        children: p
                    }), (0, i.jsx)("div", {
                        className: f.control,
                        children: null != _ ? (0, i.jsx)(u.TooltipContainer, {
                            text: _,
                            children: I
                        }) : I
                    })]
                })
            }), null != m && (0, i.jsx)("div", {
                className: f.note,
                children: (0, i.jsx)(c.FormText, {
                    disabled: n,
                    type: c.FormTextTypes.DESCRIPTION,
                    children: m
                })
            }), !r && (0, i.jsx)(d.FormDivider, {
                className: f.dividerDefault
            })]
        })
    }
}