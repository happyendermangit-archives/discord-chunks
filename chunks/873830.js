function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSliderControl: function() {
            return l
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("837443"),
        a = n("130075");
    let o = e => "".concat(e.toFixed(0), "%"),
        l = s.forwardRef(function(e, t) {
            let {
                value: n,
                minValue: l = 0,
                maxValue: u = 100,
                onChange: d,
                renderValue: c = o,
                "aria-label": _
            } = e, f = s.useRef(null);
            return s.useImperativeHandle(t, () => ({
                focus: () => {
                    var e;
                    return null === (e = f.current) || void 0 === e ? void 0 : e.focus()
                },
                blur: () => {
                    var e;
                    return null === (e = f.current) || void 0 === e ? void 0 : e.blur()
                },
                activate: () => !1
            }), []), (0, i.jsx)("div", {
                className: a.sliderContainer,
                children: (0, i.jsx)(r.Slider, {
                    ref: f,
                    mini: !0,
                    handleSize: 16,
                    className: a.slider,
                    initialValue: n,
                    minValue: l,
                    maxValue: u,
                    onValueChange: d,
                    asValueChanges: d,
                    onValueRender: c,
                    orientation: "horizontal",
                    "aria-label": _
                })
            })
        })
}