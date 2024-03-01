function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDevicePixelRatio: function() {
            return c.default
        },
        isImageLoaded: function() {
            return _
        },
        loadImage: function() {
            return S
        },
        getBestMediaProxySize: function() {
            return m
        },
        getImageSrc: function() {
            return T
        }
    }), n("222007");
    var i = n("917351"),
        r = n.n(i),
        s = n("693566"),
        a = n.n(s),
        o = n("522632"),
        l = n("981980"),
        u = n("35468"),
        c = n("547630"),
        d = n("49111");
    let f = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
        E = new a({
            max: 1e3
        });

    function p(e) {
        let t = new Image;
        t.onerror = function(e, t) {
            null == e.backoff && (e.backoff = new l.default);
            let {
                backoff: n
            } = e;
            return async () => {
                await u.default.isOnline(), n.fails < 5 ? n.fail(() => {
                    p(e)
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
            url: r
        } = t;
        if (e) E.del(r);
        else {
            let {
                width: e,
                height: i
            } = n;
            t = {
                url: r,
                loaded: !0,
                width: e,
                height: i
            }, E.set(r, t)
        }
        null != i && i.forEach(n => n(e, t))
    }

    function _(e) {
        let t = E.get(e);
        return null != t && t.loaded
    }

    function S(e, t) {
        let n = E.get(e);
        if (null != n && n.loaded) return null != t && u.default.awaitOnline().then(() => {
            null != n && null != n.callbacks && n.callbacks.forEach(t => {
                null != n ? t(!1, n) : t(!0, {
                    url: e,
                    loaded: !0
                })
            })
        }), d.NOOP;
        {
            let i;
            return null == n && (n = {
                url: e,
                loaded: !1
            }, E.set(e, n), p(n)), null != t && (i = t.bind(null), null == n.callbacks && (n.callbacks = new Set), n.callbacks.add(i)), () => {
                null != i && null != n && (null != n.callbacks && n.callbacks.delete(i), null != n.backoff && n.backoff.cancel())
            }
        }
    }

    function m(e) {
        var t;
        return null !== (t = f.find(t => e <= t)) && void 0 !== t ? t : f[f.length - 1]
    }

    function T(e) {
        let {
            src: t,
            width: n,
            height: i,
            maxWidth: s,
            maxHeight: a,
            ratio: l = 1,
            format: u = null,
            quality: d = null
        } = e, f = n, E = i;
        l < 1 && (f = Math.round(n * l), E = Math.round(i * l)), null != s && (f = Math.min(f, s)), null != a && (E = Math.min(E, a));
        let p = (0, c.default)();
        return f *= p,
            function(e) {
                let {
                    src: t,
                    sourceWidth: n,
                    sourceHeight: i,
                    targetWidth: s,
                    targetHeight: a,
                    format: l = null,
                    quality: u = null
                } = e, [c, d] = function(e) {
                    let [t, n] = e.split("?");
                    return [t, o.parse(n)]
                }(t);
                return null != l && (d.format = l), null != u && (d.quality = u), (s !== n || a !== i) && (d.width = 0 | s, d.height = 0 | a), !r.isEmpty(d) && (c += "?" + o.stringify(d)), c
            }({
                src: t,
                sourceWidth: n,
                sourceHeight: i,
                targetWidth: f,
                targetHeight: E *= p,
                format: u,
                quality: d
            })
    }
}