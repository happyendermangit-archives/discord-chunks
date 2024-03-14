function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDevicePixelRatio: function() {
            return d.default
        },
        isImageLoaded: function() {
            return g
        },
        loadImage: function() {
            return m
        },
        getBestMediaProxySize: function() {
            return p
        },
        getImageSrc: function() {
            return S
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("693566"),
        a = n.n(r),
        o = n("522632"),
        l = n("981980"),
        u = n("35468"),
        d = n("547630"),
        c = n("49111");
    let f = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
        _ = new a({
            max: 1e3
        });

    function E(e) {
        let t = new Image;
        t.onerror = function(e, t) {
            null == e.backoff && (e.backoff = new l.default);
            let {
                backoff: n
            } = e;
            return async () => {
                await u.default.isOnline(), n.fails < 5 ? n.fail(() => {
                    E(e)
                }) : h(!0, e, t)
            }
        }(e, t), t.onload = () => {
            let {
                backoff: n
            } = e;
            null != n && n.succeed(), h(!1, e, t)
        }, t.src = e.url
    }

    function h(e, t, n) {
        let {
            callbacks: i,
            url: s
        } = t;
        if (e) _.del(s);
        else {
            let {
                width: e,
                height: i
            } = n;
            t = {
                url: s,
                loaded: !0,
                width: e,
                height: i
            }, _.set(s, t)
        }
        null != i && i.forEach(n => n(e, t))
    }

    function g(e) {
        let t = _.get(e);
        return null != t && t.loaded
    }

    function m(e, t) {
        let n = _.get(e);
        if (null != n && n.loaded) return null != t && u.default.awaitOnline().then(() => {
            null != n && null != n.callbacks && n.callbacks.forEach(t => {
                null != n ? t(!1, n) : t(!0, {
                    url: e,
                    loaded: !0
                })
            })
        }), c.NOOP;
        {
            let i;
            return null == n && (n = {
                url: e,
                loaded: !1
            }, _.set(e, n), E(n)), null != t && (i = t.bind(null), null == n.callbacks && (n.callbacks = new Set), n.callbacks.add(i)), () => {
                null != i && null != n && (null != n.callbacks && n.callbacks.delete(i), null != n.backoff && n.backoff.cancel())
            }
        }
    }

    function p(e) {
        var t;
        return null !== (t = f.find(t => e <= t)) && void 0 !== t ? t : f[f.length - 1]
    }

    function S(e) {
        let {
            src: t,
            width: n,
            height: i,
            maxWidth: r,
            maxHeight: a,
            ratio: l = 1,
            format: u = null,
            quality: c = null
        } = e, f = n, _ = i;
        l < 1 && (f = Math.round(n * l), _ = Math.round(i * l)), null != r && (f = Math.min(f, r)), null != a && (_ = Math.min(_, a));
        let E = (0, d.default)();
        return f *= E,
            function(e) {
                let {
                    src: t,
                    sourceWidth: n,
                    sourceHeight: i,
                    targetWidth: r,
                    targetHeight: a,
                    format: l = null,
                    quality: u = null
                } = e, [d, c] = function(e) {
                    let [t, n] = e.split("?");
                    return [t, o.parse(n)]
                }(t);
                return null != l && (c.format = l), null != u && (c.quality = u), (r !== n || a !== i) && (c.width = 0 | r, c.height = 0 | a), !s.isEmpty(c) && (d += "?" + o.stringify(c)), d
            }({
                src: t,
                sourceWidth: n,
                sourceHeight: i,
                targetWidth: f,
                targetHeight: _ *= E,
                format: u,
                quality: c
            })
    }
}