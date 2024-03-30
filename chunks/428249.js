function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BINARY_READ_OPTIONS: function() {
            return p
        },
        b64ToPreloadedUserSettingsProto: function() {
            return h
        },
        b64ToProto: function() {
            return I
        },
        b64ToProtoWithType: function() {
            return y
        },
        mergeTopLevelFields: function() {
            return S
        },
        mutateUserChannelSettings: function() {
            return g
        },
        mutateUserChannelSettingsInternal: function() {
            return A
        },
        mutateUserGuildSettingsInternal: function() {
            return v
        },
        protoToB64: function() {
            return T
        },
        protoToB64WithType: function() {
            return O
        },
        runMigrations: function() {
            return b
        },
        serializeUsageHistory: function() {
            return N
        }
    });
    var r, o = n("578012"),
        i = n("392711"),
        a = n.n(i),
        u = n("340310"),
        s = n("14782"),
        l = n("28178"),
        c = n("382021"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var p = {
            readerFactory: function(e) {
                return new o.BinaryReader(e, new TextDecoder("utf-8"))
            }
        },
        m = (_(r = {}, c.UserSettingsTypes.PRELOADED_USER_SETTINGS, s.PreloadedUserSettings), _(r, c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS, u.FrecencyUserSettings), r);

    function y(e, t) {
        return null != t && e in m ? I(m[e], t) : null
    }

    function I(e, t) {
        if (null == t) return null;
        var n = (0, o.base64decode)(t);
        try {
            return e.fromBinary(n, p)
        } catch (e) {
            throw Error("Settings proto failed to deserialize (potentially corrupt): ".concat(e))
        }
    }

    function h(e) {
        return I(s.PreloadedUserSettings, e)
    }

    function O(e, t) {
        return T(m[e], t)
    }

    function T(e, t) {
        return (0, o.base64encode)(e.toBinary(t))
    }

    function S(e, t, n) {
        for (var r in t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        _(e, t, n[t])
                    })
                }
                return e
            }({}, t), n) delete t[r];
        return e.mergePartial(t, n), t
    }

    function v(e, t, n) {
        return (null == t || "null" === t) && (t = f.ZERO_STRING_GUILD_ID), !(t in e.guilds) && (e.guilds[t] = s.GuildSettings.create()), n(e.guilds[t])
    }

    function g(e, t, n, r) {
        var o, i, a;
        return o = e, i = t, a = function(e) {
            return A(e, n, r)
        }, null == o.guilds && (o.guilds = s.AllGuildSettings.create()), v(o.guilds, i, a)
    }

    function A(e, t, n) {
        return !(t in e.channels) && (e.channels[t] = s.ChannelSettings.create()), n(e.channels[t])
    }

    function b(e, t) {
        null == e.versions && (e.versions = l.Versions.create());
        var n = 0,
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s = a.value;
                if (s.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
                n = s.version
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != u.return && u.return()
            } finally {
                if (o) throw i
            }
        }
        var c = .1 > Math.random(),
            f = !1,
            d = [],
            _ = !0,
            E = !1,
            p = void 0;
        try {
            for (var m, y = t[Symbol.iterator](); !(_ = (m = y.next()).done); _ = !0) {
                var I, h, O = m.value;
                if (O.version <= e.versions.clientVersion) {
                    c && (null === (I = O.cleanup) || void 0 === I || I.call(O));
                    continue
                }
                var T = O.run(e);
                if (e.versions.clientVersion = O.version, !1 === T) {
                    null === (h = O.cleanup) || void 0 === h || h.call(O);
                    continue
                }
                f = !0, null != O.cleanup && d.push(O.cleanup)
            }
        } catch (e) {
            E = !0, p = e
        } finally {
            try {
                !_ && null != y.return && y.return()
            } finally {
                if (E) throw p
            }
        }
        return {
            proto: e,
            isDirty: f,
            cleanupFuncs: d
        }
    }

    function N(e, t) {
        var n = Object.entries(e);
        if (n.length > t)
            for (n = a().sortBy(n, function(e) {
                    var t = E(e, 2),
                        n = (t[0], t[1]);
                    return n.recentUses[n.recentUses.length - 1]
                }).reverse(); n.length > t;) n.pop();
        var r = {},
            o = !0,
            i = !1,
            s = void 0;
        try {
            for (var l, c = n[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                var f = E(l.value, 2),
                    d = f[0],
                    _ = f[1],
                    p = u.FrecencyItem.create();
                p.frecency = _.frecency, p.recentUses = _.recentUses.filter(function(e) {
                    return null != e && e > 0
                }).map(String), p.score = Math.round(_.score), p.totalUses = _.totalUses, r[d] = p
            }
        } catch (e) {
            i = !0, s = e
        } finally {
            try {
                !o && null != c.return && c.return()
            } finally {
                if (i) throw s
            }
        }
        return r
    }
}