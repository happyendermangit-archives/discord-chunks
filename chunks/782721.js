function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuRadioItem: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("324377"),
        u = n("148153"),
        s = n("131248"),
        l = n("43019"),
        c = n("839619"),
        f = n("367628"),
        d = n("989608");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        var t, n, o, E = e.color,
            p = e.label,
            m = e.checked,
            y = e.subtext,
            I = e.disabled,
            h = e.isFocused,
            O = e.menuItemProps,
            T = e.action,
            S = r.useRef(null);
        return r.useEffect(function() {
            h && (0, s.ensureItemVisible)(S)
        }, [h]), r.createElement(a.Clickable, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    _(e, t, n[t])
                })
            }
            return e
        }({
            innerRef: S,
            className: i()(d.item, d.labelContainer, f.MENU_ITEM_COLORS[void 0 === E ? "default" : E], (_(o = {}, d.disabled, I), _(o, d.focused, h), o)),
            onClick: I ? void 0 : T
        }, O), n = (n = {
            "aria-checked": m,
            "aria-disabled": I
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), r.createElement("div", {
            className: d.label
        }, (0, u.renderSubnode)(p, e), null != y && r.createElement("div", {
            className: d.subtext
        }, y)), r.createElement("div", {
            className: d.iconContainer
        }, m ? r.createElement(c.default, {
            className: d.icon,
            background: d.__invalid_radio,
            foreground: d.radioSelection
        }) : r.createElement(l.default, {
            className: d.icon,
            foreground: d.__invalid_radio
        })))
    }
}