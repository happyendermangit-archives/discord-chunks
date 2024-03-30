function(_, E, e) {
    "use strict";

    function o(_, E) {
        (null == E || E > _.length) && (E = _.length);
        for (var e = 0, o = Array(E); e < E; e++) o[e] = _[e];
        return o
    }
    e.r(E), e.d(E, {
        getLoginPath: function() {
            return t
        },
        wrapPaths: function() {
            return I
        }
    });

    function t(_) {
        var E = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            o = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
            t = null != _ ? "?redirect_to=".concat(encodeURIComponent(_)) : "";
        return 0 !== e.length && (e = 0 === t.length ? "?".concat(e) : "&".concat(e)), "".concat(E ? o : "", "/login").concat(t).concat(e)
    }

    function I(_, E) {
        var e = {},
            t = !0,
            I = !1,
            a = void 0;
        try {
            for (var r, R = Object.keys(_)[Symbol.iterator](); !(t = (r = R.next()).done); t = !0) ! function() {
                var t = r.value,
                    I = _[t];
                if ("function" != typeof I) return e[t] = I;
                e[t] = function() {
                    for (var _, e, t, a = arguments.length, r = Array(a), R = 0; R < a; R++) r[R] = arguments[R];
                    return I.apply(void 0, (t = (_ = r, e = E, _.map(function(_) {
                        return null == _ ? _ : null == e ? encodeURIComponent(_) : String(_).split("").map(function(_) {
                            return null != e && e.includes(_) ? _ : encodeURIComponent(_)
                        }).join("")
                    })), function(_) {
                        if (Array.isArray(_)) return o(_)
                    }(t) || function(_) {
                        if ("undefined" != typeof Symbol && null != _[Symbol.iterator] || null != _["@@iterator"]) return Array.from(_)
                    }(t) || function(_, E) {
                        if (_) {
                            if ("string" == typeof _) return o(_, E);
                            var e = Object.prototype.toString.call(_).slice(8, -1);
                            if ("Object" === e && _.constructor && (e = _.constructor.name), "Map" === e || "Set" === e) return Array.from(e);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return o(_, E)
                        }
                    }(t) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()))
                }
            }()
        } catch (_) {
            I = !0, a = _
        } finally {
            try {
                !t && null != R.return && R.return()
            } finally {
                if (I) throw a
            }
        }
        return e
    }
}