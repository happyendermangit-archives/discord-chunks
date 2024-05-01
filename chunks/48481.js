function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BINARY_READ_OPTIONS: function() {
            return _
        },
        b64ToPreloadedUserSettingsProto: function() {
            return T
        },
        b64ToProto: function() {
            return I
        },
        b64ToProtoWithType: function() {
            return E
        },
        mergeTopLevelFields: function() {
            return h
        },
        mutateUserChannelSettings: function() {
            return m
        },
        mutateUserChannelSettingsInternal: function() {
            return N
        },
        mutateUserGuildSettingsInternal: function() {
            return A
        },
        protoToB64: function() {
            return S
        },
        protoToB64WithType: function() {
            return f
        },
        runMigrations: function() {
            return p
        },
        serializeUsageHistory: function() {
            return O
        }
    }), n("411104"), n("47120"), n("653041");
    var i = n("578012"),
        r = n("392711"),
        a = n.n(r),
        s = n("377108"),
        o = n("524437"),
        l = n("397696"),
        u = n("526761"),
        d = n("981631");
    let _ = {
            readerFactory: e => new i.BinaryReader(e, new TextDecoder("utf-8"))
        },
        c = {
            [u.UserSettingsTypes.PRELOADED_USER_SETTINGS]: o.PreloadedUserSettings,
            [u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: s.FrecencyUserSettings
        };

    function E(e, t) {
        return null != t && e in c ? I(c[e], t) : null
    }

    function I(e, t) {
        if (null == t) return null;
        let n = (0, i.base64decode)(t);
        try {
            return e.fromBinary(n, _)
        } catch (e) {
            throw Error("Settings proto failed to deserialize (potentially corrupt): ".concat(e))
        }
    }

    function T(e) {
        return I(o.PreloadedUserSettings, e)
    }

    function f(e, t) {
        return S(c[e], t)
    }

    function S(e, t) {
        return (0, i.base64encode)(e.toBinary(t))
    }

    function h(e, t, n) {
        for (let e in t = {
                ...t
            }, n) delete t[e];
        return e.mergePartial(t, n), t
    }

    function A(e, t, n) {
        return (null == t || "null" === t) && (t = d.ZERO_STRING_GUILD_ID), !(t in e.guilds) && (e.guilds[t] = o.GuildSettings.create()), n(e.guilds[t])
    }

    function m(e, t, n, i) {
        var r, a, s;
        return r = e, a = t, s = e => N(e, n, i), null == r.guilds && (r.guilds = o.AllGuildSettings.create()), A(r.guilds, a, s)
    }

    function N(e, t, n) {
        return !(t in e.channels) && (e.channels[t] = o.ChannelSettings.create()), n(e.channels[t])
    }

    function p(e, t) {
        null == e.versions && (e.versions = l.Versions.create());
        let n = 0;
        for (let e of t) {
            if (e.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
            n = e.version
        }
        let i = .1 > Math.random(),
            r = !1,
            a = [];
        for (let n of t) {
            var s, o;
            if (n.version <= e.versions.clientVersion) {
                i && (null === (s = n.cleanup) || void 0 === s || s.call(n));
                continue
            }
            let t = n.run(e);
            if (e.versions.clientVersion = n.version, !1 === t) {
                null === (o = n.cleanup) || void 0 === o || o.call(n);
                continue
            }
            r = !0, null != n.cleanup && a.push(n.cleanup)
        }
        return {
            proto: e,
            isDirty: r,
            cleanupFuncs: a
        }
    }

    function O(e, t) {
        let n = Object.entries(e);
        if (n.length > t)
            for (n = a().sortBy(n, e => {
                    let [t, n] = e;
                    return n.recentUses[n.recentUses.length - 1]
                }).reverse(); n.length > t;) n.pop();
        let i = {};
        for (let [e, t] of n) {
            let n = s.FrecencyItem.create();
            n.frecency = t.frecency, n.recentUses = t.recentUses.filter(e => null != e && e > 0).map(String), n.score = Math.round(t.score), n.totalUses = t.totalUses, i[e] = n
        }
        return i
    }
}