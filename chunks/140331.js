function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        useFavoriteGIFs: function() {
            return o
        },
        useSortedFavoriteGIFs: function() {
            return u
        },
        useIsFavoriteGIF: function() {
            return c
        }
    });
    var s = r("884691"),
        n = r("917351"),
        l = r.n(n),
        i = r("42507");
    let a = {};

    function o() {
        var e, t;
        let r = (0, i.useFrecencySettings)();
        return null !== (t = null === (e = r.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : a
    }

    function u() {
        let e = o();
        return s.useMemo(() => l(e).map((e, t) => ({
            ...e,
            url: t
        })).sortBy("order").reverse().value(), [e])
    }

    function c(e) {
        let t = o();
        return null != t[e]
    }
}