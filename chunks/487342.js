function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useVideoLottie: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("313091"),
        i = {
            disable: {
                name: "disable",
                start: 0,
                duration: 70
            },
            enable: {
                name: "enable",
                start: 100,
                duration: 70
            },
            hover_enabled: {
                name: "hover_enabled",
                start: 180,
                duration: 70
            },
            hover_disabled: {
                name: "hover_disabled",
                start: 280,
                duration: 70
            }
        },
        a = function(e) {
            var t = r.useRef(null),
                a = r.useRef(e),
                u = r.useMemo(function() {
                    return function() {
                        null != t.current && t.current.play(e)
                    }
                }, [e]);
            return {
                events: {
                    onClick: u,
                    onMouseEnter: r.useCallback(function() {
                        if (null != t.current) {
                            var n = "enable" === e ? "hover_disabled" : "hover_enabled";
                            t.current.play(n)
                        }
                    }, [e]),
                    onMouseLeave: r.useCallback(function() {
                        if (null != t.current) {
                            var n = "enable" === e ? "hover_disabled" : "hover_enabled";
                            t.current.stopIfPlaying(n)
                        }
                    }, [e])
                },
                play: u,
                Component: r.useCallback(function(e) {
                    var u, s;
                    return r.createElement(o.LottieIcon, (u = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r, o, i;
                                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[o] = i
                            })
                        }
                        return e
                    }({}, e), s = (s = {
                        src: function() {
                            return n.e("8366").then(n.t.bind(n, "553427", 19))
                        },
                        ref: t,
                        initialAnimation: a.current,
                        markers: i
                    }, s), Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(s)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(s, e))
                    }), u))
                }, [])
            }
        }
}