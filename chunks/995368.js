function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSearchControl: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("324377"),
        u = n("35628"),
        s = n("680799"),
        l = n("247164"),
        c = n("486541"),
        f = n("941504"),
        d = n("313015"),
        _ = r.forwardRef(function(e, t) {
            var n, o, _, E = e.query,
                p = e.onChange,
                m = e.loading,
                y = void 0 !== m && m,
                I = e.disabled,
                h = e.placeholder,
                O = void 0 === h ? f.default.Messages.SEARCH : h,
                T = e["aria-label"],
                S = r.useRef(null),
                v = r.useRef(null);
            r.useImperativeHandle(t, function() {
                return {
                    focus: function() {
                        var e;
                        return null === (e = v.current) || void 0 === e ? void 0 : e.focus()
                    },
                    blur: function() {
                        var e;
                        return null === (e = v.current) || void 0 === e ? void 0 : e.blur()
                    },
                    activate: function() {
                        return !1
                    }
                }
            }, []);
            var g = (n = E, o = y, _ = p, o ? r.createElement("div", {
                className: d.iconContainer
            }, r.createElement(s.Spinner, {
                type: s.Spinner.Type.SPINNING_CIRCLE,
                className: i()(d.icon)
            })) : n.length > 0 ? r.createElement(a.Clickable, {
                "aria-label": f.default.Messages.SEARCH_CLEAR,
                className: i()(d.iconContainer, d.iconClickable),
                onClick: function(e) {
                    e.stopPropagation(), _("")
                },
                onMouseDown: function(e) {
                    e.preventDefault(), e.stopPropagation()
                },
                focusProps: {
                    offset: {
                        top: -3,
                        right: -3,
                        bottom: -3,
                        left: -3
                    }
                }
            }, r.createElement(l.default, {
                width: 18,
                height: 18,
                className: d.icon,
                "aria-label": f.default.Messages.CLOSE
            })) : r.createElement("div", {
                className: d.iconContainer
            }, r.createElement(c.default, {
                width: 18,
                height: 18,
                className: d.icon,
                "aria-label": f.default.Messages.SEARCH
            })));
            return r.createElement(u.FocusRing, {
                focusTarget: v,
                ringTarget: S,
                offset: {
                    top: 2,
                    bottom: 2,
                    left: 4,
                    right: 4
                }
            }, r.createElement("div", {
                className: d.container,
                ref: S
            }, r.createElement("input", {
                role: "searchbox",
                "aria-busy": y,
                ref: v,
                className: d.input,
                value: E,
                onChange: function(e) {
                    return p(e.currentTarget.value)
                },
                "aria-label": T,
                placeholder: O,
                disabled: void 0 !== I && I
            }), g))
        })
}