function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Spinner: function() {
            return _
        },
        SpinnerTypes: function() {
            return o
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("676250"),
        l = n("941504"),
        c = n("462363");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }(r = o || (o = {})).WANDERING_CUBES = "wanderingCubes", r.CHASING_DOTS = "chasingDots", r.PULSING_ELLIPSIS = "pulsingEllipsis", r.SPINNING_CIRCLE = "spinningCircle", r.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple", r.LOW_MOTION = "lowMotion";

    function _(e) {
        var t = e.type,
            n = void 0 === t ? "wanderingCubes" : t,
            r = e.animated,
            o = void 0 === r || r,
            a = e.className,
            _ = e.itemClassName,
            E = e["aria-label"],
            p = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["type", "animated", "className", "itemClassName", "aria-label"]),
            m = i.useContext(s.AccessibilityPreferencesContext).reducedMotion.enabled ? function(e) {
                switch (e) {
                    case "wanderingCubes":
                    case "chasingDots":
                        return "lowMotion";
                    default:
                        return e
                }
            }(n) : n;
        if (E = null != E ? E : l.default.Messages.LOADING, "spinningCircle" === m || "spinningCircleSimple" === m) return i.createElement("div", d({
            className: u()(c.spinner, c[m], a, f({}, c.stopAnimation, !o)),
            role: "img",
            "aria-label": E
        }, p), i.createElement("div", {
            className: c.spinningCircleInner
        }, i.createElement("svg", {
            className: c.circular,
            viewBox: "25 25 50 50"
        }, "spinningCircle" === m && i.createElement(i.Fragment, null, i.createElement("circle", {
            className: u()(c.path, c.path3, _),
            cx: "50",
            cy: "50",
            r: "20"
        }), i.createElement("circle", {
            className: u()(c.path, c.path2, _),
            cx: "50",
            cy: "50",
            r: "20"
        })), i.createElement("circle", {
            className: u()(c.path, _),
            cx: "50",
            cy: "50",
            r: "20"
        }))));
        var y = u()(c.item, _);
        return i.createElement("span", d({
            className: u()(c.spinner, a, f({}, c.stopAnimation, !o)),
            role: "img",
            "aria-label": E
        }, p), i.createElement("span", {
            className: u()(c.inner, c[m])
        }, i.createElement("span", {
            className: y
        }), i.createElement("span", {
            className: y
        }), "pulsingEllipsis" === m || "lowMotion" === m ? i.createElement("span", {
            className: y
        }) : null))
    }
    _.Type = o
}