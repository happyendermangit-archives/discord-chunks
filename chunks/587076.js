function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormSwitch: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("35628"),
        u = n("703475"),
        s = n("582444"),
        l = n("437452"),
        c = n("773076"),
        f = n("181892");

    function d(e) {
        var t, n, o, d = e.value,
            _ = e.disabled,
            E = void 0 !== _ && _,
            p = e.hideBorder,
            m = e.tooltipNote,
            y = e.onChange,
            I = e.className,
            h = e.style,
            O = e.note,
            T = e.children,
            S = r.useRef(null),
            v = r.useRef(null),
            g = r.useId(),
            A = r.createElement(u.Switch, {
                id: g,
                checked: d,
                onChange: y,
                disabled: E,
                focusProps: {
                    enabled: !1
                },
                innerRef: S
            });
        return r.createElement("div", {
            style: h,
            className: i()(f.container, I, (t = {}, n = f.disabled, o = E, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t))
        }, r.createElement(a.FocusRing, {
            within: !0,
            offset: -4,
            focusTarget: S,
            ringTarget: v
        }, r.createElement("div", {
            className: f.labelRow,
            ref: v
        }, r.createElement("label", {
            htmlFor: g,
            className: f.title
        }, T), r.createElement("div", {
            className: f.control
        }, null != m ? r.createElement(s.TooltipContainer, {
            text: m
        }, A) : A))), null != O && r.createElement("div", {
            className: f.note
        }, r.createElement(c.FormText, {
            disabled: E,
            type: c.FormTextTypes.DESCRIPTION
        }, O)), !(void 0 !== p && p) && r.createElement(l.FormDivider, {
            className: f.dividerDefault
        }))
    }
}