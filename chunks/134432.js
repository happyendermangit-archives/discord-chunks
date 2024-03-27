function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBestMediaProxySize: function() {
            return h
        },
        getDevicePixelRatio: function() {
            return d.default
        },
        getImageSrc: function() {
            return A
        },
        isImageLoaded: function() {
            return f
        },
        loadImage: function() {
            return S
        }
    }), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("31775"),
        a = n.n(s),
        o = n("664751"),
        l = n("261470"),
        u = n("931619"),
        d = n("921948"),
        _ = n("981631");
    let c = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
        E = new(a())({
            max: 1e3
        });

    function I(e) {
        let t = new Image;
        t.onerror = function(e, t) {
            null == e.backoff && (e.backoff = new l.default);
            let {
                backoff: n
            } = e;
            return async () => {
                await u.default.isOnline(), n.fails < 5 ? n.fail(() => {
                    I(e)
                }) : T(!0, e, t)
            }
        }(e, t), t.onload = () => {
            let {
                backoff: n
            } = e;
            null != n && n.succeed(), T(!1, e, t)
        }, t.src = e.url
    }

    function T(e, t, n) {
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

    function f(e) {
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
        }), _.NOOP;
        {
            let i;
            return null == n && (n = {
                url: e,
                loaded: !1
            }, E.set(e, n), I(n)), null != t && (i = t.bind(null), null == n.callbacks && (n.callbacks = new Set), n.callbacks.add(i)), () => {
                null != i && null != n && (null != n.callbacks && n.callbacks.delete(i), null != n.backoff && n.backoff.cancel())
            }
        }
    }

    function h(e) {
        var t;
        return null !== (t = c.find(t => e <= t)) && void 0 !== t ? t : c[c.length - 1]
    }

    function A(e) {
        let {
            src: t,
            width: n,
            height: i,
            maxWidth: s,
            maxHeight: a,
            ratio: l = 1,
            format: u = null,
            quality: _ = null
        } = e, c = n, E = i;
        l < 1 && (c = Math.round(n * l), E = Math.round(i * l)), null != s && (c = Math.min(c, s)), null != a && (E = Math.min(E, a));
        let I = (0, d.default)();
        return c *= I,
            function(e) {
                let {
                    src: t,
                    sourceWidth: n,
                    sourceHeight: i,
                    targetWidth: s,
                    targetHeight: a,
                    format: l = null,
                    quality: u = null
                } = e, [d, _] = function(e) {
                    let [t, n] = e.split("?");
                    return [t, o.parse(n)]
                }(t);
                return null != l && (_.format = l), null != u && (_.quality = u), (s !== n || a !== i) && (_.width = 0 | s, _.height = 0 | a), !r().isEmpty(_) && (d += "?" + o.stringify(_)), d
            }({
                src: t,
                sourceWidth: n,
                sourceHeight: i,
                targetWidth: c,
                targetHeight: E *= I,
                format: u,
                quality: _
            })
    }
}