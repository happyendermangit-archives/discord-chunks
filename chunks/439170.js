function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EVERYONE_CHANNEL_ID: function() {
            return L
        },
        EVERYONE_ID: function() {
            return g
        },
        MemberListRowTypes: function() {
            return i
        }
    }), n("724458"), n("653041"), n("47120");
    var i, r, s, a = n("392711"),
        o = n.n(a),
        l = n("505578"),
        u = n.n(l),
        d = n("149765"),
        _ = n("442837"),
        c = n("570140"),
        E = n("700785"),
        I = n("199902"),
        T = n("314897"),
        f = n("592125"),
        S = n("650774"),
        h = n("271383"),
        A = n("430824"),
        m = n("158776"),
        N = n("885110"),
        O = n("594174"),
        p = n("981631"),
        R = n("689938");

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let g = "everyone",
        L = 0;

    function D(e, t, n, i) {
        switch (t) {
            case p.StatusTypes.ONLINE:
            case p.StatusTypes.OFFLINE:
            case p.StatusTypes.UNKNOWN:
                return {
                    type: "GROUP", key: t, id: t, get title() {
                        switch (t) {
                            case p.StatusTypes.ONLINE:
                                return R.default.Messages.STATUS_ONLINE;
                            case p.StatusTypes.OFFLINE:
                                return R.default.Messages.STATUS_OFFLINE;
                            default:
                                return R.default.Messages.STATUS_UNKNOWN
                        }
                    }, count: n, index: i
                };
            default:
                let r = A.default.getGuild(e),
                    s = null != r ? A.default.getRole(r.id, t) : null;
                return {
                    type: "GROUP", key: t, id: t, title: null != s ? s.name : "", count: n, index: i
                }
        }
    }

    function v(e, t, n) {
        let i = n === T.default.getId(),
            r = m.default.isMobileOnline(n),
            s = i ? N.default.getStatus() : m.default.getStatus(n, e),
            a = i ? N.default.getActivities() : m.default.getActivities(n, e),
            o = I.default.getStreamForUser(n, e),
            l = O.default.getUser(n);
        return null == l ? null : {
            type: "MEMBER",
            ...h.default.getMember(e, n),
            user: l,
            status: s,
            activities: a,
            applicationStream: o,
            isOwner: t === n,
            isMobileOnline: r
        }
    }

    function M(e) {
        let t = f.default.getChannel(e);
        return null == t ? g : null == t.memberListId ? function(e) {
            return E.canEveryone(p.Permissions.VIEW_CHANNEL, e) ? g : u().v3(o()(e.permissionOverwrites).reduce((e, t) => {
                let {
                    id: n,
                    allow: i,
                    deny: r
                } = t;
                return d.has(i, p.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : d.has(r, p.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
            }, []).sort().join(",")).toString()
        }(t) : t.memberListId
    }(s = i || (i = {})).GROUP = "GROUP", s.MEMBER = "MEMBER", s.CONTENT_INVENTORY = "CONTENT_INVENTORY", s.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP", s.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY";
    class y {
        updateOwnerId() {
            let e = A.default.getGuild(this.guildId);
            if (null == e) return !1;
            let t = E.getGuildVisualOwnerId(e);
            return this.ownerId !== t && (this.ownerId = t, !0)
        }
        setGroups(e) {
            let t = 0;
            this.groups = e.map(e => {
                var n;
                let i = t,
                    r = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
                return t += r + 1, D(this.guildId, e.id, r, i)
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
            if (null != n) this.rows.splice(e, 0, D(this.guildId, n.id, n.count));
            else if (null != i) {
                let t = v(this.guildId, this.ownerId, i.user.id);
                if (null == t) return;
                this.rows.splice(e, 0, t), this.members[i.user.id] = t
            }
            this.version++
        }
        update(e, t) {
            let {
                group: n,
                member: i
            } = t, r = this.rows[e];
            if (null != r && "MEMBER" === r.type && delete this.members[r.user.id], null != n) this.rows[e] = D(this.guildId, n.id, n.count);
            else if (null != i) {
                let t = v(this.guildId, this.ownerId, i.user.id);
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
            null != t && (Object.assign(t, v(this.guildId, this.ownerId, e)), this.version++)
        }
        rebuildMembers() {
            o().forEach(this.members, (e, t) => {
                this.rebuildMember(t)
            })
        }
        constructor(e, t) {
            C(this, "guildId", void 0), C(this, "listId", void 0), C(this, "ownerId", void 0), C(this, "rows", []), C(this, "groups", []), C(this, "members", {}), C(this, "version", 0), this.guildId = e, this.listId = t, this.updateOwnerId()
        }
    }
    let P = new class e {
        get(e, t) {
            let n = this._guildLists[e];
            null == n && (n = this._guildLists[e] = {});
            let i = n[t];
            return null == i && ((i = new y(e, t)).setGroups([{
                id: p.StatusTypes.UNKNOWN,
                count: 0
            }]), n[t] = i), i
        }
        forEach(e, t) {
            if (null == e) o().forEach(this._guildLists, e => {
                o().forEach(e, t)
            });
            else {
                let n = this._guildLists[e];
                null != n && o().forEach(n, t)
            }
        }
        delete(e) {
            delete this._guildLists[e]
        }
        reset() {
            this._guildLists = {}
        }
        constructor() {
            C(this, "_guildLists", {})
        }
    };

    function U() {
        P.reset()
    }
    let b = [];

    function G() {
        let e = I.default.getAllApplicationStreams(),
            t = b.concat(e);
        b = e, t.forEach(e => {
            P.forEach(null, t => t.rebuildMember(e.ownerId))
        })
    }

    function w() {
        let e = T.default.getId();
        P.forEach(null, t => t.rebuildMember(e))
    }
    class k extends(r = _.default.Store) {
        initialize() {
            this.waitFor(O.default, A.default, f.default, h.default, m.default, N.default, T.default, S.default, I.default), this.syncWith([N.default], w), this.syncWith([I.default], G)
        }
        getProps(e, t) {
            let n = P.get(e, M(t));
            return {
                listId: "".concat(n.guildId, ":").concat(n.listId),
                groups: n.groups,
                rows: n.rows,
                version: n.version
            }
        }
        getRows(e, t) {
            return P.get(e, M(t)).rows
        }
    }
    C(k, "displayName", "ChannelMemberStore"), t.default = new k(c.default, {
        CONNECTION_OPEN: U,
        OVERLAY_INITIALIZE: U,
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