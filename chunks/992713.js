function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("505578"),
        r = n.n(i),
        s = n("442837"),
        a = n("570140"),
        o = n("147913"),
        l = n("662896"),
        u = n("710845"),
        d = n("339085"),
        _ = n("926491"),
        c = n("592125"),
        E = n("430824"),
        I = n("709054"),
        T = n("38618");
    let f = new u.default("EntityVersionsManager");
    class S extends o.default {
        _initialize() {
            a.default.subscribe("CONNECTION_OPEN", A)
        }
        _terminate() {
            a.default.unsubscribe("CONNECTION_OPEN", A)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                GUILD_CREATE: m,
                DELETED_ENTITY_IDS: h
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }

    function h(e) {
        var t;
        let n = null === (t = E.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
        f.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(n, ")")), s.default.Emitter.batched(() => {
            null != e.channels && function(e, t) {
                let n = I.default.keys(c.default.getMutableBasicGuildChannelsForGuild(e));
                f.fileOnly("syncChannels", {
                    channelIdsInMemory: n,
                    channelIdsFromServer: t
                }), n.forEach(n => {
                    !t.has(n) && a.default.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: {
                            guild_id: e,
                            id: n,
                            parent_id: void 0
                        }
                    })
                })
            }(e.guild_id, new Set(e.channels)), null != e.roles && function(e, t) {
                I.default.keys(E.default.getRoles(e)).forEach(n => {
                    !t.has(n) && a.default.dispatch({
                        type: "GUILD_ROLE_DELETE",
                        guildId: e,
                        roleId: n
                    })
                })
            }(e.guild_id, new Set(e.roles)), null != e.emojis && function(e, t) {
                let n = d.default.getGuildEmoji(e),
                    i = n.filter(e => t.has(e.id));
                n.length !== i.length && a.default.dispatch({
                    type: "GUILD_EMOJIS_UPDATE",
                    guildId: e,
                    emojis: i
                })
            }(e.guild_id, new Set(e.emojis)), null != e.stickers && function(e, t) {
                var n;
                let i = null !== (n = _.default.getStickersByGuildId(e)) && void 0 !== n ? n : [],
                    r = i.filter(e => t.has(e.id));
                i.length !== r.length && a.default.dispatch({
                    type: "GUILD_STICKERS_UPDATE",
                    guildId: e,
                    stickers: r
                })
            }(e.guild_id, new Set(e.stickers))
        })
    }

    function A() {
        l.default.getAll().then(e => {
            e.forEach(e => N(e))
        })
    }

    function m(e) {
        let {
            guild: t
        } = e;
        t.unableToSyncDeletes && N(t.id)
    }

    function N(e) {
        setTimeout(() => (function(e) {
            var t, n, i;
            let r = null === (t = E.default.getGuild(e)) || void 0 === t ? void 0 : t.name;
            f.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(r, ")"));
            let s = p(Object.keys(c.default.getMutableBasicGuildChannelsForGuild(e))),
                a = p(Object.keys(E.default.getRoles(e))),
                o = p(d.default.getGuildEmoji(e).map(e => e.id)),
                l = p(null !== (i = null === (n = _.default.getStickersByGuildId(e)) || void 0 === n ? void 0 : n.map(e => e.id)) && void 0 !== i ? i : []);
            T.default.getSocket().getDeletedEntityIdsNotMatchingHash(e, s, a, o, l)
        })(e), Math.ceil(2e3 * Math.random()))
    }

    function p(e) {
        return r().v3(e.sort().join(",")).toString()
    }
    t.default = new S
}