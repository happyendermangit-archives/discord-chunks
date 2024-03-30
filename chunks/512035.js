function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("665443"),
        i = n.n(o),
        a = n("39383"),
        u = n.n(a),
        s = n("702016"),
        l = n("62967"),
        c = n("542737"),
        f = n("138860");

    function d(e) {
        var t = e.streamId,
            n = e.paused,
            o = e.onReady,
            a = e.onResize,
            d = e.className,
            _ = function(e, t) {
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
            E = r.useRef(null),
            p = r.useRef(u()("media-engine-video-")).current;
        return r.useEffect(function() {
            var e = E.current;
            if (!n && null != e) {
                var r, i, u, d, _, m, y = !1,
                    I = function(t, n) {
                        !y && (null == o || o(), y = !0), (e.width !== t || e.height !== n) && (e.width = t, e.height = n, null == a || a({
                            width: t,
                            height: n
                        }))
                    },
                    h = (0, s.getVoiceEngine)();
                if (null != h.addVideoOutputSink) return h.addVideoOutputSink(p, t, I),
                    function() {
                        h.removeVideoOutputSink(p, t)
                    };
                var O = (r = e, "canary" === (m = null === (_ = window) || void 0 === _ ? void 0 : null === (d = _.DiscordNative) || void 0 === d ? void 0 : null === (u = d.app) || void 0 === u ? void 0 : null === (i = u.getReleaseChannel) || void 0 === i ? void 0 : i.call(u)) || "development" === m ? (0, c.initRenderingContextWebGL)(r) : (0, l.initRenderingContext2D)(r));
                if (null == O) return;
                return f.default.addSink(t, E, function(e) {
                        I(e.width, e.height), O.render(e)
                    }),
                    function() {
                        f.default.removeSink(t, E)
                    }
            }
        }, [t, n, a, o, p]), r.createElement("canvas", function(e) {
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
            id: p,
            className: i()("media-engine-video", d),
            ref: E
        }, _))
    }
    d.defaultProps = {
        paused: !1
    }
}