function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFavoriteGIFs: function() {
            return l
        },
        useIsFavoriteGIF: function() {
            return d
        },
        useSortedFavoriteGIFs: function() {
            return u
        }
    });
    var i = n("470079"),
        r = n("392711"),
        a = n.n(r),
        s = n("516373");
    let o = {};

    function l() {
        var e, t;
        return null !== (t = null === (e = (0, s.useFrecencySettings)().favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : o
    }

    function u() {
        let e = l();
        return i.useMemo(() => a()(e).map((e, t) => ({
            ...e,
            url: t
        })).sortBy("order").reverse().value(), [e])
    }

    function d(e) {
        return null != l()[e]
    }
}