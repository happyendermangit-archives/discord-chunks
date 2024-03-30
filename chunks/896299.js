function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBestMediaProxySize: function() {
            return T
        },
        getDevicePixelRatio: function() {
            return c.default
        },
        getImageSrc: function() {
            return S
        },
        isImageLoaded: function() {
            return h
        },
        loadImage: function() {
            return O
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("31775"),
        a = n.n(i),
        u = n("664751"),
        s = n("235923"),
        l = n("637052"),
        c = n("930097"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e, t) {
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
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var p = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
        m = new(a())({
            max: 1e3
        });

    function y(e) {
        var t, n, r, o, i = new Image;
        i.onerror = (t = e, n = i, null == t.backoff && (t.backoff = new s.default), r = t.backoff, o = function() {
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, l.default.isOnline()];
                    case 1:
                        return e.sent(), r.fails < 5 ? r.fail(function() {
                            y(t)
                        }) : I(!0, t, n), [2]
                }
            })
        }, function() {
            var e = this,
                t = arguments;
            return new Promise(function(n, r) {
                var i = o.apply(e, t);

                function a(e) {
                    _(i, n, r, a, u, "next", e)
                }

                function u(e) {
                    _(i, n, r, a, u, "throw", e)
                }
                a(void 0)
            })
        }), i.onload = function() {
            var t = e.backoff;
            null != t && t.succeed(), I(!1, e, i)
        }, i.src = e.url
    }

    function I(e, t, n) {
        var r = t.callbacks,
            o = t.url;
        e ? m.del(o) : (t = {
            url: o,
            loaded: !0,
            width: n.width,
            height: n.height
        }, m.set(o, t)), null != r && r.forEach(function(n) {
            return n(e, t)
        })
    }

    function h(e) {
        var t = m.get(e);
        return null != t && t.loaded
    }

    function O(e, t) {
        var n, r = m.get(e);
        return null != r && r.loaded ? (null != t && l.default.awaitOnline().then(function() {
            null != r && null != r.callbacks && r.callbacks.forEach(function(t) {
                null != r ? t(!1, r) : t(!0, {
                    url: e,
                    loaded: !0
                })
            })
        }), f.NOOP) : (null == r && (r = {
            url: e,
            loaded: !1
        }, m.set(e, r), y(r)), null != t && (n = t.bind(null), null == r.callbacks && (r.callbacks = new Set), r.callbacks.add(n)), function() {
            null != n && null != r && (null != r.callbacks && r.callbacks.delete(n), null != r.backoff && r.backoff.cancel())
        })
    }

    function T(e) {
        var t;
        return null !== (t = p.find(function(t) {
            return e <= t
        })) && void 0 !== t ? t : p[p.length - 1]
    }

    function S(e) {
        var t = e.src,
            n = e.width,
            r = e.height,
            i = e.maxWidth,
            a = e.maxHeight,
            s = e.ratio,
            l = void 0 === s ? 1 : s,
            f = e.format,
            d = e.quality,
            _ = n,
            p = r;
        l < 1 && (_ = Math.round(n * l), p = Math.round(r * l)), null != i && (_ = Math.min(_, i)), null != a && (p = Math.min(p, a));
        var m = (0, c.default)();
        return function(e) {
            var t, n, r, i = e.src,
                a = e.sourceWidth,
                s = e.sourceHeight,
                l = e.targetWidth,
                c = e.targetHeight,
                f = e.format,
                d = void 0 === f ? null : f,
                _ = e.quality,
                p = void 0 === _ ? null : _;
            var m = E((n = (t = E(i.split("?"), 2))[0], r = t[1], [n, u.parse(r)]), 2),
                y = m[0],
                I = m[1];
            return null != d && (I.format = d), null != p && (I.quality = p), (l !== a || c !== s) && (I.width = 0 | l, I.height = 0 | c), !o().isEmpty(I) && (y += "?" + u.stringify(I)), y
        }({
            src: t,
            sourceWidth: n,
            sourceHeight: r,
            targetWidth: _ *= m,
            targetHeight: p *= m,
            format: void 0 === f ? null : f,
            quality: void 0 === d ? null : d
        })
    }
}