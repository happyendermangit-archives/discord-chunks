function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        SearchContext: function() {
            return T
        },
        default: function() {
            return m
        }
    }), s("424973"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("222007"), s("70102"), s("854508"), s("881410");
    var l, i, u = s("917351"),
        n = s.n(u),
        r = s("748820"),
        a = s("689988"),
        o = s("233069"),
        h = s("42203"),
        d = s("26989"),
        c = s("27618"),
        p = s("697218"),
        _ = s("449008"),
        f = s("299039"),
        R = s("158998");

    function y(e) {
        if (null == e || c.default.isBlocked(e.id)) return null;
        let t = {
            id: e.id,
            username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username
        };
        return null != R.default.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), c.default.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = c.default.getNickname(e.id)), t
    }

    function E(e, t, s) {
        null != e && (e[t] = null != s && "" !== s ? s : null)
    }

    function C(e) {
        let t = [];
        if (null == e || !(0, o.isPrivate)(e.type)) return t;
        let {
            recipients: s = []
        } = e;
        return s.forEach(s => {
            let l = y(p.default.getUser(s));
            null != e && E(l, e.id), t.push(l)
        }), t
    }

    function g(e, t) {
        let s = [];
        return e.forEach(e => {
            let l = y(e.user);
            null != l && (E(l, t, e.nick), s.push(l))
        }), s
    }(i = l || (l = {})).UPDATE_USERS = "UPDATE_USERS", i.USER_RESULTS = "USER_RESULTS", i.QUERY_SET = "QUERY_SET", i.QUERY_CLEAR = "QUERY_CLEAR";
    class T {
        setLimit(e) {
            this._limit = e, null != this._nextQuery && (this._nextQuery.limit = e)
        }
        subscribe() {
            null != this._worker && !this._subscribed && (this._worker.addEventListener("message", this.handleMessages, !1), this._subscribed = !0, this._setNextQuery())
        }
        unsubscribe() {
            null != this._worker && this._subscribed && (this._worker.removeEventListener("message", this.handleMessages, !1), this._subscribed = !1)
        }
        destroy() {
            this.clearQuery(), this.unsubscribe()
        }
        clearQuery() {
            this._currentQuery = !1, this._nextQuery = null, null != this._worker && this._subscribed && this._worker.postMessage({
                uuid: this._uuid,
                type: "QUERY_CLEAR"
            })
        }
        setQuery(e, t, s, l) {
            null != e && (this._nextQuery = {
                query: e,
                filters: t,
                blacklist: s,
                boosters: null != l ? l : {},
                limit: this._limit
            }, this._setNextQuery())
        }
        _setNextQuery() {
            (null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery && (null != this._worker && this._subscribed ? (this._currentQuery = this._nextQuery, this._nextQuery = null, this._worker.postMessage({
                uuid: this._uuid,
                type: "QUERY_SET",
                payload: this._currentQuery
            })) : !this._subscribed && this.subscribe())
        }
        constructor(e, t, s = 10) {
            this.handleMessages = e => {
                let t = e.data;
                null != t && "USER_RESULTS" === t.type && t.uuid === this._uuid && (!1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery())
            }, this._worker = e, this._uuid = (0, r.v4)(), this._callback = t, this._limit = s, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
        }
    }
    class A extends a.default {
        _initialize() {
            this.rebootWebworker()
        }
        _terminate() {
            null != this._worker && (this._worker.terminate(), this._worker = null)
        }
        rebootWebworker() {
            null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL(s.p + s.u("76730"), s.b))
        }
        updateUsers(e) {
            let {
                _worker: t
            } = this;
            null != t && (e = e.filter(_.isNotNullish), t.postMessage({
                type: "UPDATE_USERS",
                payload: e
            }))
        }
        getSearchContext(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            this.initialize();
            let {
                _worker: s
            } = this;
            if (null == s) throw Error("SearchContextManager: No webworker initialized");
            return new T(s, e, t)
        }
        constructor(...e) {
            super(...e), this.actions = {
                LOGOUT: () => this._handleLogout(),
                POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
                CONNECTION_OPEN_SUPPLEMENTAL: e => this._handleConnectionOpenSupplemental(e),
                OVERLAY_INITIALIZE: e => this._handleOverlayInitialize(e),
                CURRENT_USER_UPDATE: e => this._handleCurrentUserUpdate(e),
                GUILD_CREATE: e => this._handleGuildCreate(e),
                GUILD_MEMBERS_CHUNK: e => this._handleGuildMembersChunk(e),
                GUILD_MEMBER_ADD: e => this._handleGuildMemberUpdate(e),
                GUILD_MEMBER_UPDATE: e => this._handleGuildMemberUpdate(e),
                RELATIONSHIP_ADD: e => this._handleRelationshipAdd(e),
                RELATIONSHIP_UPDATE: e => this._handleRelationshipUpdate(e),
                RELATIONSHIP_REMOVE: e => this._handleRelationshipRemove(e),
                CHANNEL_CREATE: e => this._handleDMCreate(e),
                CHANNEL_UPDATES: e => this._handleDMUpdates(e),
                CHANNEL_RECIPIENT_ADD: e => this._handleRecipientChanges(e),
                PASSIVE_UPDATE_V1: e => this._handlePassiveUpdateV1(e)
            }, this._handleLogout = () => {
                this.rebootWebworker()
            }, this._handleConnectionOpen = () => {
                setTimeout(() => {
                    let e = p.default.getCurrentUser();
                    if (null == e) return;
                    let t = y(e),
                        s = {
                            [t.id]: t
                        };
                    Object.values(p.default.getUsers()).forEach(e => {
                        s[e.id] = y(e)
                    });
                    let l = d.default.getMutableAllGuildsAndMembers();
                    for (let e in l)
                        for (let t in l[e]) {
                            var i, u;
                            let n = s[t],
                                r = null !== (u = null === (i = l[e][t]) || void 0 === i ? void 0 : i.nick) && void 0 !== u ? u : R.default.getGlobalName(n);
                            null != n && (n[e] = null != r && "" !== r ? r : null)
                        }
                    this.updateUsers(Object.values(s))
                }, 3e3)
            }, this._handleConnectionOpenSupplemental = e => {
                let {
                    guilds: t
                } = e;
                setTimeout(() => {
                    let e = n.flatMap(t, e => g(e.members, e.id));
                    this.updateUsers(e)
                }, 3e3)
            }, this._handleOverlayInitialize = e => {
                let {
                    users: t,
                    guildMembers: s
                } = e, l = new Map;
                for (let e of t) l.set(e.id, y(e));
                let i = f.default.keys(s);
                for (let e of i) {
                    let t = s[e];
                    if (null == t) continue;
                    let i = f.default.keys(t);
                    for (let s of i) {
                        let i = l.get(s),
                            u = t[s];
                        null != i && null != u && null != u.nick && (E(i, e, u.nick), l.set(s, i))
                    }
                }
                this.updateUsers(Array.from(l.values())), l.clear()
            }, this._handleCurrentUserUpdate = e => {
                let {
                    user: t
                } = e, s = y(t);
                null != s && this.updateUsers([s])
            }, this._handleGuildCreate = e => {
                let {
                    guild: t
                } = e, {
                    members: s
                } = t;
                this.updateUsers(g(s, t.id))
            }, this._handleGuildMembersChunk = e => {
                let {
                    members: t,
                    guildId: s
                } = e;
                this.updateUsers(g(t, s))
            }, this._handleGuildMemberUpdate = e => {
                let {
                    guildId: t,
                    user: s,
                    nick: l
                } = e, i = y(s);
                null != i && (E(i, t, l), this.updateUsers([i]))
            }, this._handlePassiveUpdateV1 = e => {
                null != e.members && this.updateUsers(g(e.members, e.guildId))
            }, this._handleRelationshipAdd = e => {
                let t = y(e.relationship.user);
                this.updateUsers([t])
            }, this._handleRelationshipUpdate = e => {
                let t = y(p.default.getUser(e.relationship.id));
                this.updateUsers([t])
            }, this._handleRelationshipRemove = e => {
                let t = y(p.default.getUser(e.relationship.id));
                this.updateUsers([t])
            }, this._handleDMCreate = e => {
                let {
                    channel: {
                        id: t
                    }
                } = e, s = C(h.default.getChannel(t));
                if (0 === s.length) return;
                let l = y(p.default.getCurrentUser());
                E(l, t), s.push(l), this.updateUsers(s)
            }, this._handleDMUpdates = e => {
                let {
                    channels: t
                } = e;
                for (let e of t) {
                    let t = C(h.default.getChannel(e.id));
                    if (0 === t.length) continue;
                    let s = y(p.default.getCurrentUser());
                    E(s, e.id), t.push(s), this.updateUsers(t)
                }
            }, this._handleRecipientChanges = e => {
                let {
                    channelId: t,
                    user: s,
                    isMember: l
                } = e;
                if (!l) return;
                let i = y(s);
                E(i, t), this.updateUsers([i])
            }
        }
    }
    var m = new A
}