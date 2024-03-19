function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EVERYONE_ID: function() {
            return C
        },
        EVERYONE_CHANNEL_ID: function() {
            return y
        },
        MemberListRowTypes: function() {
            return i
        },
        default: function() {
            return k
        }
    }), n("808653"), n("424973"), n("222007");
    var i, s, r = n("917351"),
        a = n.n(r),
        o = n("210696"),
        l = n.n(o),
        u = n("316693"),
        d = n("446674"),
        c = n("913144"),
        f = n("991170"),
        _ = n("373469"),
        E = n("271938"),
        h = n("42203"),
        g = n("525065"),
        m = n("26989"),
        p = n("305961"),
        S = n("824563"),
        v = n("101125"),
        T = n("697218"),
        I = n("49111"),
        A = n("782340");
    let C = "everyone",
        y = 0;

    function N(e, t, n, i) {
        switch (t) {
            case I.StatusTypes.ONLINE:
            case I.StatusTypes.OFFLINE:
            case I.StatusTypes.UNKNOWN:
                return {
                    type: "GROUP", key: t, id: t, get title() {
                        switch (t) {
                            case I.StatusTypes.ONLINE:
                                return A.default.Messages.STATUS_ONLINE;
                            case I.StatusTypes.OFFLINE:
                                return A.default.Messages.STATUS_OFFLINE;
                            default:
                                return A.default.Messages.STATUS_UNKNOWN
                        }
                    }, count: n, index: i
                };
            default:
                let s = p.default.getGuild(e),
                    r = null != s ? p.default.getRole(s.id, t) : null;
                return {
                    type: "GROUP", key: t, id: t, title: null != r ? r.name : "", count: n, index: i
                }
        }
    }

    function R(e, t, n) {
        let i = n === E.default.getId(),
            s = S.default.isMobileOnline(n),
            r = i ? v.default.getStatus() : S.default.getStatus(n, e),
            a = i ? v.default.getActivities() : S.default.getActivities(n, e),
            o = _.default.getStreamForUser(n, e),
            l = T.default.getUser(n);
        return null == l ? null : {
            type: "MEMBER",
            ...m.default.getMember(e, n),
            user: l,
            status: r,
            activities: a,
            applicationStream: o,
            isOwner: t === n,
            isMobileOnline: s
        }
    }

    function O(e) {
        let t = h.default.getChannel(e);
        return null == t ? C : null == t.memberListId ? function(e) {
            return f.default.canEveryone(I.Permissions.VIEW_CHANNEL, e) ? C : l.v3(a(e.permissionOverwrites).reduce((e, t) => {
                let {
                    id: n,
                    allow: i,
                    deny: s
                } = t;
                return u.default.has(i, I.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : u.default.has(s, I.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
            }, []).sort().join(",")).toString()
        }(t) : t.memberListId
    }(s = i || (i = {})).GROUP = "GROUP", s.MEMBER = "MEMBER", s.CONTENT_INVENTORY = "CONTENT_INVENTORY", s.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP", s.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY";
    class D {
        updateOwnerId() {
            let e = p.default.getGuild(this.guildId);
            if (null == e) return !1;
            let t = f.default.getGuildVisualOwnerId(e);
            return this.ownerId !== t && (this.ownerId = t, !0)
        }
        setGroups(e) {
            let t = 0;
            this.groups = e.map(e => {
                var n;
                let i = t,
                    s = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
                return t += s + 1, N(this.guildId, e.id, s, i)
            }), this.rows.length = t
        }
        sync(e, t) {
            let [n] = e;
            t.forEach((e, t) => this.update(n + t, e))
        }
        invalidate(e) {
            let [t, n] = e;
            for (let e = t; e <= n; e++) {
                let t = this.rows[e];
                if (null == t) break;
                delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id]
            }
            this.version++
        }
        insert(e, t) {
            let {
                group: n,
                member: i
            } = t;
            if (null != n) this.rows.splice(e, 0, N(this.guildId, n.id, n.count));
            else if (null != i) {
                let t = R(this.guildId, this.ownerId, i.user.id);
                if (null == t) return;
                this.rows.splice(e, 0, t), this.members[i.user.id] = t
            }
            this.version++
        }
        update(e, t) {
            let {
                group: n,
                member: i
            } = t, s = this.rows[e];
            if (null != s && "MEMBER" === s.type && delete this.members[s.user.id], null != n) this.rows[e] = N(this.guildId, n.id, n.count);
            else if (null != i) {
                let t = R(this.guildId, this.ownerId, i.user.id);
                if (null == t) return;
                this.rows[e] = t, this.members[i.user.id] = t
            }
            this.version++
        }
        delete(e) {
            let t = this.rows[e];
            null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
        }
        rebuildMember(e) {
            let t = this.members[e];
            null != t && (Object.assign(t, R(this.guildId, this.ownerId, e)), this.version++)
        }
        rebuildMembers() {
            a.forEach(this.members, (e, t) => {
                this.rebuildMember(t)
            })
        }
        constructor(e, t) {
            this.rows = [], this.groups = [], this.members = {}, this.version = 0, this.guildId = e, this.listId = t, this.updateOwnerId()
        }
    }
    let P = new class e {
        get(e, t) {
            let n = this._guildLists[e];
            null == n && (n = this._guildLists[e] = {});
            let i = n[t];
            return null == i && ((i = new D(e, t)).setGroups([{
                id: I.StatusTypes.UNKNOWN,
                count: 0
            }]), n[t] = i), i
        }
        forEach(e, t) {
            if (null == e) a.forEach(this._guildLists, e => {
                a.forEach(e, t)
            });
            else {
                let n = this._guildLists[e];
                null != n && a.forEach(n, t)
            }
        }
        delete(e) {
            delete this._guildLists[e]
        }
        reset() {
            this._guildLists = {}
        }
        constructor() {
            this._guildLists = {}
        }
    };

    function L() {
        P.reset()
    }
    let M = [];

    function b() {
        let e = _.default.getAllApplicationStreams(),
            t = M.concat(e);
        M = e, t.forEach(e => {
            P.forEach(null, t => t.rebuildMember(e.ownerId))
        })
    }

    function U() {
        let e = E.default.getId();
        P.forEach(null, t => t.rebuildMember(e))
    }
    class w extends d.default.Store {
        initialize() {
            this.waitFor(T.default, p.default, h.default, m.default, S.default, v.default, E.default, g.default, _.default), this.syncWith([v.default], U), this.syncWith([_.default], b)
        }
        getProps(e, t) {
            let n = P.get(e, O(t));
            return {
                listId: "".concat(n.guildId, ":").concat(n.listId),
                groups: n.groups,
                rows: n.rows,
                version: n.version
            }
        }
        getRows(e, t) {
            let n = P.get(e, O(t));
            return n.rows
        }
    }
    w.displayName = "ChannelMemberStore";
    var k = new w(c.default, {
        CONNECTION_OPEN: L,
        OVERLAY_INITIALIZE: L,
        GUILD_MEMBER_LIST_UPDATE: function(e) {
            let t = P.get(e.guildId, e.id);
            e.ops.forEach(e => {
                switch (e.op) {
                    case "SYNC":
                        t.sync(e.range, e.items);
                        break;
                    case "INVALIDATE":
                        t.invalidate(e.range);
                        break;
                    case "INSERT":
                        t.insert(e.index, e.item);
                        break;
                    case "UPDATE":
                        t.update(e.index, e.item);
                        break;
                    case "DELETE":
                        t.delete(e.index)
                }
            }), t.setGroups(e.groups)
        },
        GUILD_UPDATE: function(e) {
            let {
                guild: t
            } = e;
            P.forEach(t.id, e => {
                e.updateOwnerId() && e.rebuildMembers()
            })
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            P.delete(t.id)
        },
        GUILD_ROLE_UPDATE: function(e) {
            let {
                guildId: t
            } = e;
            P.forEach(t, e => e.rebuildMembers())
        },
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            P.forEach(t, e => e.rebuildMember(n.id))
        },
        CHANNEL_UPDATES: function() {
            return !0
        }
    })
}