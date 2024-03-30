function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGiftLottie: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("313091"),
        i = {
            all: {
                name: "all",
                start: 0,
                duration: 66
            }
        },
        a = function() {
            var e = r.useRef(null),
                t = r.useCallback(function() {
                    null != e.current && e.current.play("all")
                }, []);
            return {
                events: {
                    onMouseEnter: r.useCallback(function() {
                        null != e.current && e.current.play("all")
                    }, []),
                    onMouseLeave: r.useCallback(function() {
                        null != e.current && e.current.stopIfPlaying("all")
                    }, [])
                },
                play: t,
                Component: r.useCallback(function(t) {
                    var a, u;
                    return r.createElement(o.LottieIcon, (a = function(e) {
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
                    }({}, t), u = (u = {
                        src: function() {
                            return n.e("8286").then(n.t.bind(n, "893346", 19))
                        },
                        ref: e,
                        markers: i
                    }, u), Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(u)).forEach(function(e) {
                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e))
                    }), a))
                }, [])
            }
        }
}