function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("913527"),
        o = n.n(r),
        i = n("812497"),
        a = n("1757"),
        u = n.n(a),
        s = n("638402"),
        l = n.n(s),
        c = n("327348"),
        f = n.n(c),
        d = function(e) {
            return function(e) {
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
            }({}, l(), f(), e)
        },
        _ = new i.default({
            getMessages: function(e) {
                return "en-US" === e ? d(u()) : n("594802")("./messages/".concat(e, ".jsona").replace("./messages/", "./")).then(function(e) {
                    return e.default
                }).then(d)
            },
            getLanguages: function() {
                return n("515297")
            }
        });

    function E(e) {
        n("912258").dateFnsLocales[e]().then(function(t) {
            var r = t.default;
            (0, n("217379").registerLocale)(e, r)
        })
    }
    _.addListener("locale", function(e) {
        ! function(e, t) {
            for (var n = [], r = ("no" === e ? "nb" : e).split("-"); r.length > 0;) n.push(r.join("-")), r.pop();
            n.push(t), o().locale(n)
        }(e, "en-US"), (0, n("285910").default.setTags)({
            locale: e
        })
    }), _.addListener("locale", E), E(_.getLocale()), t.default = _
}