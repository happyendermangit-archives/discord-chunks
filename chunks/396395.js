function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("665443"),
        i = n.n(o),
        a = n("188129"),
        u = n("702016");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = new a.Logger("DirectVideo"),
        f = function() {
            var e, t, n;

            function r(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), l(this, "refcount", void 0), l(this, "stream", void 0), this.refcount = 1, this.stream = window.createDiscordStream(e)
            }
            return e = r, t = [{
                key: "addref",
                value: function() {
                    this.refcount++
                }
            }, {
                key: "release",
                value: function() {
                    return this.refcount--, 0 === this.refcount
                }
            }], s(e.prototype, t), n && s(e, n), r
        }(),
        d = new Map;

    function _(e) {
        var t = d.get(e);
        null != t && t.release() && ((0, u.getVoiceEngine)().removeDirectVideoOutputSink(e), d.delete(e))
    }

    function E(e) {
        var t = e.streamId,
            n = e.paused,
            o = e.onReady,
            a = e.onResize,
            s = e.className,
            E = function(e, t) {
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
            p = r.useRef(null),
            m = r.useRef(null),
            y = r.useRef({
                width: 0,
                height: 0
            }),
            I = r.useRef({
                streamId: t,
                paused: n,
                onReady: o,
                onResize: a
            });
        return r.useLayoutEffect(function() {
            var e = p.current;
            if (null != e) {
                var t = document.createElement("video");
                t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.autoplay = !0, t.muted = !0, t.addEventListener("pause", function() {
                    if (!I.current.paused) {
                        var e;
                        null === (e = m.current) || void 0 === e || e.play()
                    }
                }), t.addEventListener("resize", function() {
                    var e = y.current,
                        t = e.width,
                        n = e.height,
                        r = null !== (u = null === (i = m.current) || void 0 === i ? void 0 : i.videoWidth) && void 0 !== u ? u : 0,
                        o = null !== (s = null === (a = m.current) || void 0 === a ? void 0 : a.videoHeight) && void 0 !== s ? s : 0;
                    if (t !== r || n !== o) {
                        var i, a, u, s, l, c, f = {
                            width: r,
                            height: o
                        };
                        null === (l = (c = I.current).onResize) || void 0 === l || l.call(c, f), y.current = f
                    }
                }), t.addEventListener("canplaythrough", function() {
                    var e, t;
                    c.info("handleReady for ".concat(I.current.streamId, ", have onReady callback = ").concat(null != I.current.onReady)), null === (e = (t = I.current).onReady) || void 0 === e || e.call(t)
                }), c.info("create video element for ".concat(I.current.streamId, ", readyState=").concat(t.readyState)), t.readyState > 3 && c.error("video element for ".concat(I.current.streamId, " was ready before attached")), e.appendChild(t), m.current = t
            }
        }, []), r.useEffect(function() {
            I.current.streamId = t, I.current.paused = n, I.current.onReady = o, I.current.onResize = a
        }), r.useEffect(function() {
            var e, r, o = m.current;
            if (null != o) {
                if (n) null != o.srcObject && (o.srcObject = null, _(t));
                else {
                    ;
                    return c.info("attaching srcObject for ".concat(t)), o.srcObject = (e = t, null == (r = d.get(e)) ? (r = new f(e), (0, u.getVoiceEngine)().addDirectVideoOutputSink(e), d.set(e, r)) : r.addref(), r.stream),
                        function() {
                            _(t), o.srcObject = null
                        }
                }
            }
        }, [n, t]), r.createElement("div", function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    l(e, t, n[t])
                })
            }
            return e
        }({
            className: i()("media-engine-video", s),
            ref: p
        }, E))
    }
    E.defaultProps = {
        paused: !1
    }
}