function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFavoriteGIFs: function() {
            return s
        },
        useIsFavoriteGIF: function() {
            return c
        },
        useSortedFavoriteGIFs: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("419127"),
        u = {};

    function s() {
        var e, t;
        return null !== (t = null === (e = (0, a.useFrecencySettings)().favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : u
    }

    function l() {
        var e = s();
        return r.useMemo(function() {
            return i()(e).map(function(e, t) {
                var n, r;
                return n = function(e) {
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
                }({}, e), r = (r = {
                    url: t
                }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n
            }).sortBy("order").reverse().value()
        }, [e])
    }

    function c(e) {
        return null != s()[e]
    }
}