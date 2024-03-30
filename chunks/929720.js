function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFlattenedChannels: function() {
            return l
        },
        useFlattenedChannels: function() {
            return c
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("898511"),
        a = n("935741"),
        u = n("162677");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = o()(a.default.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
            l = o()(n).map(function(e) {
                return e.isCategory() ? e.id : e.parent_id
            }).filter(u.isNotNullish).uniq().map(function(e) {
                return a.default.getChannel(e)
            }).filter(u.isNotNullish).sortBy("position").value(),
            c = new Set(l.map(function(e) {
                return e.id
            })),
            f = n.filter(function(e) {
                return !e.isCategory() && (null == e.parent_id || !c.has(e.parent_id))
            });
        f = o().sortBy(f, function(e) {
            return e.isGuildVocal() ? e.position + 1e4 : e.position
        });
        var d = !0,
            _ = !1,
            E = void 0;
        try {
            for (var p, m = l[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) ! function() {
                var e, a, u = p.value;
                !r && f.push(u);
                var l = t.has(u.id) ? i[u.id] : n.filter(function(e) {
                    return e.parent_id === u.id
                });
                l = o().sortBy(null != l ? l : [], function(e) {
                    return e.isGuildVocal() ? e.position + 1e4 : e.position
                }), (a = f).push.apply(a, (e = l, function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()))
            }()
        } catch (e) {
            _ = !0, E = e
        } finally {
            try {
                !d && null != m.return && m.return()
            } finally {
                if (_) throw E
            }
        }
        return f
    }

    function c(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (0, i.useStateFromStoresArray)([a.default], function() {
            var r = Array.from(t).map(function(e) {
                return a.default.getChannel(e)
            }).filter(u.isNotNullish);
            return l(e, t, r, n)
        })
    }
}