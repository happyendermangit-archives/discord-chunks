function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("718017"),
        u = n("898511"),
        s = n("14782"),
        l = n("982118"),
        c = n("784184"),
        f = n("622780"),
        d = n("177770"),
        _ = n("208454"),
        E = n("622208"),
        p = n("412791"),
        m = n("830721"),
        y = n("348201"),
        I = n("941504"),
        h = n("105948");

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function T(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return O(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var S = {
        tension: 750,
        mass: 2.5,
        friction: 70
    };

    function v(e) {
        var t = e.tooltipText,
            n = e.headingText,
            o = e.textColor,
            i = null != n;
        return r.createElement("span", {
            className: i ? void 0 : h.tooltipContainer
        }, r.createElement("span", {
            className: h.tooltipContainer
        }, r.createElement(p.default, {
            className: h.nitroWheel
        }), i ? r.createElement(c.Heading, {
            color: null != o ? o : "text-normal",
            variant: "heading-sm/semibold"
        }, n) : null), r.createElement(c.Text, {
            variant: i ? "text-xs/normal" : "text-sm/medium",
            color: null != o ? o : "text-normal"
        }, t))
    }

    function g(e) {
        var t, n, o, p = e.checked,
            O = e.onClick,
            g = e.id,
            A = void 0 === g ? "burst-reaction-toggle-button" : g,
            b = (0, u.useStateFromStores)([f.default], function() {
                return f.default.useReducedMotion
            }),
            N = _.default.getCurrentUser(),
            R = null == N || (0, m.isPremium)(N) ? [s.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
            C = T((0, d.useSelectedDismissibleContent)(R), 2),
            P = C[0],
            D = C[1],
            L = T(r.useState(!1), 2),
            M = L[0],
            U = L[1],
            w = T((0, a.useSpring)(function() {
                return {}
            }), 2),
            k = w[0],
            G = w[1],
            B = (0, a.animated)(l.SuperReactionIcon);
        r.useEffect(function() {
            var e = P === s.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
            e && (D(y.ContentDismissActionType.DISMISS), setTimeout(function() {
                return U(e)
            }, 200))
        }, [P, D]);
        var j = M ? I.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : p ? I.default.Messages.SUPER_REACTION_TOGGLE_ENABLED : I.default.Messages.SUPER_REACTION_TOGGLE_DISABLED,
            F = M ? I.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
        return r.createElement(c.TooltipContainer, {
            position: "top",
            text: r.createElement(v, {
                textColor: "always-white",
                tooltipText: j,
                headingText: F
            }),
            color: c.Tooltip.Colors.BRAND,
            forceOpen: M,
            "aria-label": j,
            tooltipClassName: h.tooltip
        }, r.createElement("input", {
            className: h.visuallyHidden,
            checked: p,
            onChange: function() {
                G({
                    from: {
                        rotate: p ? "360deg" : "0deg"
                    },
                    to: {
                        rotate: p ? "0deg" : "360deg"
                    },
                    config: S
                }), null == O || O(), U(!1)
            },
            id: A,
            type: "checkbox"
        }), r.createElement("label", {
            htmlFor: A,
            className: i()(h.label, (t = {}, n = h.labelChecked, o = p, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t))
        }, p ? r.createElement(E.Shine, {
            className: h.shine,
            shinePaused: b
        }) : null, r.createElement(B, {
            style: b ? void 0 : k,
            width: 20,
            height: 20,
            color: p ? "white" : void 0,
            className: h.icon
        }), r.createElement("span", null, r.createElement(c.Text, {
            className: h.visuallyHidden,
            variant: "text-sm/semibold"
        }, I.default.Messages.SUPER_REACTION_TOGGLE_DISABLED))))
    }
}