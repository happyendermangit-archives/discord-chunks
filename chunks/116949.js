function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        BINARY_READ_OPTIONS: function() {
            return T
        },
        b64ToProtoWithType: function() {
            return N
        },
        b64ToProto: function() {
            return O
        },
        b64ToPreloadedUserSettingsProto: function() {
            return A
        },
        protoToB64WithType: function() {
            return R
        },
        protoToB64: function() {
            return l
        },
        mergeTopLevelFields: function() {
            return u
        },
        mutateUserGuildSettingsInternal: function() {
            return L
        },
        mutateUserChannelSettings: function() {
            return C
        },
        mutateUserChannelSettingsInternal: function() {
            return c
        },
        runMigrations: function() {
            return D
        },
        serializeUsageHistory: function() {
            return d
        }
    }), E("70102"), E("222007"), E("424973");
    var t = E("849266"),
        o = E("917351"),
        n = E.n(o),
        r = E("713349"),
        a = E("151426"),
        i = E("959714"),
        I = E("397336"),
        s = E("49111");
    let T = {
            readerFactory: e => new t.BinaryReader(e, new TextDecoder("utf-8"))
        },
        S = {
            [I.UserSettingsTypes.PRELOADED_USER_SETTINGS]: a.PreloadedUserSettings,
            [I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: r.FrecencyUserSettings
        };

    function N(e, _) {
        return null != _ && e in S ? O(S[e], _) : null
    }

    function O(e, _) {
        if (null == _) return null;
        let E = (0, t.base64decode)(_);
        try {
            return e.fromBinary(E, T)
        } catch (e) {
            throw Error("Settings proto failed to deserialize (potentially corrupt): ".concat(e))
        }
    }

    function A(e) {
        return O(a.PreloadedUserSettings, e)
    }

    function R(e, _) {
        return l(S[e], _)
    }

    function l(e, _) {
        return (0, t.base64encode)(e.toBinary(_))
    }

    function u(e, _, E) {
        for (let e in _ = {
                ..._
            }, E) delete _[e];
        return e.mergePartial(_, E), _
    }

    function L(e, _, E) {
        return (null == _ || "null" === _) && (_ = s.ZERO_STRING_GUILD_ID), !(_ in e.guilds) && (e.guilds[_] = a.GuildSettings.create()), E(e.guilds[_])
    }

    function C(e, _, E, t) {
        var o, n, r;
        return o = e, n = _, r = e => c(e, E, t), null == o.guilds && (o.guilds = a.AllGuildSettings.create()), L(o.guilds, n, r)
    }

    function c(e, _, E) {
        return !(_ in e.channels) && (e.channels[_] = a.ChannelSettings.create()), E(e.channels[_])
    }

    function D(e, _) {
        null == e.versions && (e.versions = i.Versions.create());
        let E = 0;
        for (let e of _) {
            if (e.version <= E) throw Error("Migrations are out of order or there is a duplicate version");
            E = e.version
        }
        let t = .1 > Math.random(),
            o = !1,
            n = [];
        for (let E of _) {
            var r, a;
            if (E.version <= e.versions.clientVersion) {
                t && (null === (r = E.cleanup) || void 0 === r || r.call(E));
                continue
            }
            let _ = E.run(e);
            if (e.versions.clientVersion = E.version, !1 === _) {
                null === (a = E.cleanup) || void 0 === a || a.call(E);
                continue
            }
            o = !0, null != E.cleanup && n.push(E.cleanup)
        }
        return {
            proto: e,
            isDirty: o,
            cleanupFuncs: n
        }
    }

    function d(e, _) {
        let E = Object.entries(e);
        if (E.length > _)
            for (E = n.sortBy(E, e => {
                    let [_, E] = e;
                    return E.recentUses[E.recentUses.length - 1]
                }).reverse(); E.length > _;) E.pop();
        let t = {};
        for (let [e, _] of E) {
            let E = r.FrecencyItem.create();
            E.frecency = _.frecency, E.recentUses = _.recentUses.filter(e => null != e && e > 0).map(String), E.score = Math.round(_.score), E.totalUses = _.totalUses, t[e] = E
        }
        return t
    }
}