function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("665443"),
        i = n.n(o),
        a = n("278960"),
        u = n("278831");

    function s(e) {
        var t = e.streamId,
            n = e.paused,
            o = e.onReady,
            s = e.onResize,
            l = e.className,
            c = function(e, t) {
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
            }(e, ["streamId", "paused", "onReady", "onResize", "className"]),
            f = r.useRef(null),
            d = r.useRef({
                width: 0,
                height: 0
            });
        r.useLayoutEffect(function() {
            var e = f.current;
            if (null != e) return (0, a.registerActiveSink)(t), e.srcObject = (0, u.getVideoStream)(t),
                function() {
                    (0, a.unregisterActiveSink)(t), e.srcObject = null, e.load()
                }
        }, [t]), r.useEffect(function() {
            var e, r;
            return n ? (null === (e = f.current) || void 0 === e || e.pause(), (0, a.unregisterActiveSink)(t)) : null === (r = f.current) || void 0 === r || r.play().catch(function() {}),
                function() {
                    n && (0, a.registerActiveSink)(t)
                }
        }, [n]);
        var _ = r.useCallback(function() {
            var e, t, n, r, o = d.current,
                i = o.width,
                a = o.height,
                u = null !== (n = null === (e = f.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0,
                l = null !== (r = null === (t = f.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== r ? r : 0;
            if (i !== u || a !== l) {
                var c = {
                    width: u,
                    height: l
                };
                null == s || s(c), d.current = c
            }
        }, [s]);
        r.useLayoutEffect(function() {
            var e = f.current;
            if (null != e) return e.addEventListener("resize", _),
                function() {
                    return e.removeEventListener("resize", _)
                }
        }, [_]);
        var E = r.useCallback(function() {
                null == o || o()
            }, [o]),
            p = r.useCallback(function(e) {
                !n && e.currentTarget.play()
            }, [n]);
        return r.createElement("video", function(e) {
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
        }({
            className: i()("media-engine-video", l),
            ref: f,
            autoPlay: !0,
            onPause: p,
            onCanPlayThrough: E,
            muted: !0
        }, c))
    }
    s.defaultProps = {
        paused: !1
    }
}