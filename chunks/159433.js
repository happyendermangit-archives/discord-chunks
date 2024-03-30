function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("951240"),
        i = n("388990"),
        a = n("855210");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e) {
        var t, n, s, l = e.sectionId,
            c = e.commandsByActiveSection;
        var f = (t = r.useState(a.CommandListSortOrder.ALPHABETICAL), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            d = f[0],
            _ = f[1],
            E = r.useMemo(function() {
                var e, t;
                return null !== (t = null === (e = c.find(function(e) {
                    return e.section.id === l
                })) || void 0 === e ? void 0 : e.data) && void 0 !== t ? t : []
            }, [c, l]);
        var p = (s = ({
                alphabeticalSortedCommands: E
            }).alphabeticalSortedCommands, r.useMemo(function() {
                if (s.length <= 1) return {
                    popularSortedCommands: s,
                    canSort: !1
                };
                var e = !1,
                    t = s.map(function(t, n) {
                        return e = e || null != t.global_popularity_rank, {
                            command: t,
                            alphabeticalSortIndex: n
                        }
                    });
                return e ? (t.sort(function(e, t) {
                    var n = e.command.global_popularity_rank,
                        r = t.command.global_popularity_rank;
                    if (null != n && null != r) {
                        if (n !== r) return n - r
                    } else if (null != n) return -1;
                    else if (null != r) return 1;
                    return e.alphabeticalSortIndex - t.alphabeticalSortIndex
                }), {
                    popularSortedCommands: t.map(function(e) {
                        return e.command
                    }),
                    canSort: !0
                }) : {
                    popularSortedCommands: s,
                    canSort: !1
                }
            }, [s])),
            m = p.popularSortedCommands,
            y = p.canSort;
        r.useEffect(function() {
            o.getApplication(l, {
                dontRefetchMs: i.default.Millis.DAY
            })
        }, [l]), r.useEffect(function() {
            y && _(a.CommandListSortOrder.POPULAR)
        }, [y]);
        var I = E;
        switch (d) {
            case a.CommandListSortOrder.POPULAR:
                I = m;
                break;
            case a.CommandListSortOrder.ALPHABETICAL:
                I = E
        }
        return {
            sortOrder: d,
            setSortOrder: _,
            commands: I,
            canSort: y
        }
    }
}