function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VideoButtonWrapper: function() {
            return _
        },
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("487342"),
        u = n("813970"),
        s = n("381545"),
        l = n("867197"),
        c = n("504986");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e, t) {
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
    }

    function _(e) {
        var t = (0, s.getVideoButtonLabel)(e),
            n = e.enabled,
            o = e.cameraUnavailable,
            i = e.onChange,
            l = e.onCameraUnavailable,
            c = e.hasPermission,
            f = e.children,
            d = e.channelLimitReached,
            _ = e.join,
            E = (0, u.useAppContext)(),
            p = o ? function() {
                return l()
            } : function() {
                return i(!e.enabled, E)
            },
            m = (0, a.useVideoLottie)(_ || n ? "disable" : "enable"),
            y = m.Component,
            I = m.play,
            h = m.events;
        return r.useEffect(function() {
            return function() {
                return I()
            }
        }, [n, I]), r.createElement(r.Fragment, null, f({
            onClick: p,
            active: n,
            disabled: !n && (!c || void 0 !== d && d),
            iconComponent: y,
            label: t,
            unavailable: o,
            onMouseEnter: _ ? void 0 : h.onMouseEnter,
            onMouseLeave: _ ? void 0 : h.onMouseLeave
        }))
    }

    function E(e) {
        var t = e.enabled,
            n = e.join,
            o = e.channel,
            a = e.onChange,
            u = e.onCameraUnavailable,
            s = e.cameraUnavailable,
            E = e.hasPermission,
            p = e.className,
            m = e.channelLimitReached,
            y = e.channelLimit,
            I = e.centerButton,
            h = e.onPopoutClick,
            O = d(e, ["enabled", "join", "channel", "onChange", "onCameraUnavailable", "cameraUnavailable", "hasPermission", "className", "channelLimitReached", "channelLimit", "centerButton", "onPopoutClick"]),
            T = void 0 !== I && I ? l.CenterControlButton : l.default;
        return r.createElement(_, {
            enabled: t,
            join: n,
            channel: o,
            onChange: a,
            onCameraUnavailable: u,
            cameraUnavailable: s,
            hasPermission: E,
            channelLimitReached: m,
            channelLimit: y
        }, function(e) {
            var n, o, a = e.unavailable,
                u = e.onMouseEnter,
                s = e.onMouseLeave,
                l = d(e, ["unavailable", "onMouseEnter", "onMouseLeave"]);
            return r.createElement(T, (n = function(e) {
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
            }({}, l, O), o = (o = {
                onMouseEnter: function(e) {
                    var t;
                    null === (t = O.onMouseEnter) || void 0 === t || t.call(O, e), null == u || u()
                },
                onMouseLeave: function(e) {
                    var t;
                    null === (t = O.onMouseLeave) || void 0 === t || t.call(O, e), null == s || s()
                },
                isActive: t,
                className: i()(p, f({}, c.fauxDisabled, a)),
                onPopoutClick: h
            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
            }), n))
        })
    }
}