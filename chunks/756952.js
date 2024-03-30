function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSliderControl: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("871652"),
        i = n("291720"),
        a = function(e) {
            return "".concat(e.toFixed(0), "%")
        },
        u = r.forwardRef(function(e, t) {
            var n = e.value,
                u = e.minValue,
                s = e.maxValue,
                l = e.onChange,
                c = e.renderValue,
                f = e["aria-label"],
                d = r.useRef(null);
            return r.useImperativeHandle(t, function() {
                return {
                    focus: function() {
                        var e;
                        return null === (e = d.current) || void 0 === e ? void 0 : e.focus()
                    },
                    blur: function() {
                        var e;
                        return null === (e = d.current) || void 0 === e ? void 0 : e.blur()
                    },
                    activate: function() {
                        return !1
                    }
                }
            }, []), r.createElement("div", {
                className: i.sliderContainer
            }, r.createElement(o.Slider, {
                ref: d,
                mini: !0,
                handleSize: 16,
                className: i.slider,
                initialValue: n,
                minValue: void 0 === u ? 0 : u,
                maxValue: void 0 === s ? 100 : s,
                onValueChange: l,
                asValueChanges: l,
                onValueRender: void 0 === c ? a : c,
                orientation: "horizontal",
                "aria-label": f
            }))
        })
}