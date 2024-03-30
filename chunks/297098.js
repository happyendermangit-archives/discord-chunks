function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSortApplicationsViaFrecency: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("968574"),
        a = n("292222");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e) {
        r.useEffect(function() {
            i.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        var t = (0, o.useStateFromStores)([a.default], function() {
            return a.default.getApplicationFrecencyWithoutLoadingLatest()
        });
        return r.useMemo(function() {
            var n, r = function(e) {
                if (Array.isArray(e)) return u(e)
            }(n = e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }
            }(n) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }();
            return r.sort(function(e, n) {
                var r, o, i = (null !== (r = t.getScore(n.id)) && void 0 !== r ? r : 0) - (null !== (o = t.getScore(e.id)) && void 0 !== o ? o : 0);
                return 0 !== i ? i : e.name.localeCompare(n.name)
            }), r
        }, [e, t])
    }
}