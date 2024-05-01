function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormSwitch: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("84735"),
        l = n("437337"),
        u = n("981729"),
        d = n("770102"),
        _ = n("534542"),
        c = n("193426");

    function E(e) {
        let {
            value: t,
            disabled: n = !1,
            hideBorder: a = !1,
            tooltipNote: E,
            onChange: I,
            className: T,
            style: f,
            note: S,
            children: h
        } = e, A = r.useRef(null), m = r.useRef(null), N = r.useId(), p = (0, i.jsx)(l.Switch, {
            id: N,
            checked: t,
            onChange: I,
            disabled: n,
            focusProps: {
                enabled: !1
            },
            innerRef: A
        });
        return (0, i.jsxs)("div", {
            style: f,
            className: s()(c.container, T, {
                [c.disabled]: n
            }),
            children: [(0, i.jsx)(o.FocusRing, {
                within: !0,
                offset: -4,
                focusTarget: A,
                ringTarget: m,
                children: (0, i.jsxs)("div", {
                    className: c.labelRow,
                    ref: m,
                    children: [(0, i.jsx)("label", {
                        htmlFor: N,
                        className: c.title,
                        children: h
                    }), (0, i.jsx)("div", {
                        className: c.control,
                        children: null != E ? (0, i.jsx)(u.TooltipContainer, {
                            text: E,
                            children: p
                        }) : p
                    })]
                })
            }), null != S && (0, i.jsx)("div", {
                className: c.note,
                children: (0, i.jsx)(_.FormText, {
                    disabled: n,
                    type: _.FormTextTypes.DESCRIPTION,
                    children: S
                })
            }), !a && (0, i.jsx)(d.FormDivider, {
                className: c.dividerDefault
            })]
        })
    }
}