function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        withFallbacks: function() {
            return c
        }
    });
    var r = n("935741"),
        o = n("380512"),
        i = n("363442"),
        a = n("892548"),
        u = n("991591"),
        s = n("281767");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t) {
        if (e.totalLength >= t) return e;
        var n = new i.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
            l = t - e.totalLength,
            c = !0,
            d = !1,
            _ = void 0;
        try {
            for (var E, p = o.default.getGuildFolders()[Symbol.iterator](); !(c = (E = p.next()).done); c = !0) {
                var m = E.value,
                    y = !0,
                    I = !1,
                    h = void 0;
                try {
                    for (var O, T = m.guildIds[Symbol.iterator](); !(y = (O = T.next()).done); y = !0) {
                        var S = O.value,
                            v = !0,
                            g = !1,
                            A = void 0;
                        try {
                            for (var b, N = Object.values(r.default.getMutableBasicGuildChannelsForGuild(S))[Symbol.iterator](); !(v = (b = N.next()).done); v = !0) {
                                var R = b.value;
                                if (function(e) {
                                        return e.type === s.ChannelTypes.DM || e.type === s.ChannelTypes.GROUP_DM || e.type === s.ChannelTypes.GUILD_TEXT
                                    }(R) && (0, u.isReadableChannel)(R) && !(0, a.isLimitedChannel)(R) && function(e, t, n) {
                                        !n.hasExtended(t.id) && n.put(t.id, {
                                            guildId: e,
                                            channelId: t.id,
                                            channelType: t.type,
                                            fallback: !0
                                        })
                                    }(S, R, n), n.totalLength >= l) return f(n, e)
                            }
                        } catch (e) {
                            g = !0, A = e
                        } finally {
                            try {
                                !v && null != N.return && N.return()
                            } finally {
                                if (g) throw A
                            }
                        }
                    }
                } catch (e) {
                    I = !0, h = e
                } finally {
                    try {
                        !y && null != T.return && T.return()
                    } finally {
                        if (I) throw h
                    }
                }
            }
        } catch (e) {
            d = !0, _ = e
        } finally {
            try {
                !c && null != p.return && p.return()
            } finally {
                if (d) throw _
            }
        }
        return f(n, e)
    }

    function f(e, t) {
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t.allEntries()[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u, s, c = (u = i.value, s = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(u) || function(e, t) {
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
                    }(u, s) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }
                    }(u, s) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    f = c[0],
                    d = c[1];
                e.put(f, d)
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return e
    }
}