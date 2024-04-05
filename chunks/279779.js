function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchContext: function() {
            return O
        }
    }), n("653041"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("411104"), n("312677"), n("390547");
    var i, r, s = n("392711"),
        a = n.n(s),
        o = n("153832"),
        l = n("147913"),
        u = n("131704"),
        d = n("592125"),
        _ = n("271383"),
        c = n("699516"),
        E = n("594174"),
        I = n("823379"),
        T = n("709054"),
        f = n("51144");

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        if (null == e || c.default.isBlocked(e.id)) return null;
        let t = {
            id: e.id,
            username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username
        };
        return null != f.default.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), c.default.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = c.default.getNickname(e.id)), t
    }

    function h(e, t, n) {
        null != e && (e[t] = null != n && "" !== n ? n : null)
    }

    function m(e) {
        let t = [];
        if (null == e || !(0, u.isPrivate)(e.type)) return t;
        let {
            recipients: n = []
        } = e;
        return n.forEach(n => {
            let i = A(E.default.getUser(n));
            null != e && h(i, e.id), t.push(i)
        }), t
    }

    function N(e, t) {
        let n = [];
        return e.forEach(e => {
            let i = A(e.user);
            null != i && (h(i, t, e.nick), n.push(i))
        }), n
    }(r = i || (i = {})).UPDATE_USERS = "UPDATE_USERS", r.USER_RESULTS = "USER_RESULTS", r.QUERY_SET = "QUERY_SET", r.QUERY_CLEAR = "QUERY_CLEAR";
    class O {
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
        setQuery(e, t, n, i) {
            null != e && (this._nextQuery = {
                query: e,
                filters: t,
                blacklist: n,
                boosters: null != i ? i : {},
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
        constructor(e, t, n = 10) {
            S(this, "_worker", void 0), S(this, "_uuid", void 0), S(this, "_callback", void 0), S(this, "_limit", void 0), S(this, "_currentQuery", void 0), S(this, "_nextQuery", void 0), S(this, "_subscribed", void 0), S(this, "handleMessages", e => {
                let t = e.data;
                null != t && "USER_RESULTS" === t.type && t.uuid === this._uuid && (!1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery())
            }), this._worker = e, this._uuid = (0, o.v4)(), this._callback = t, this._limit = n, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
        }
    }
    class p extends l.default {
        _initialize() {
            this.rebootWebworker()
        }
        _terminate() {
            null != this._worker && (this._worker.terminate(), this._worker = null)
        }
        rebootWebworker() {
            null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL(n.p + n.u("561"), n.b))
        }
        updateUsers(e) {
            let {
                _worker: t
            } = this;
            null != t && (e = e.filter(I.isNotNullish), t.postMessage({
                type: "UPDATE_USERS",
                payload: e
            }))
        }
        getSearchContext(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            this.initialize();
            let {
                _worker: n
            } = this;
            if (null == n) throw Error("SearchContextManager: No webworker initialized");
            return new O(n, e, t)
        }
        constructor(...e) {
            super(...e), S(this, "_worker", void 0), S(this, "actions", {
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
            }), S(this, "_handleLogout", () => {
                this.rebootWebworker()
            }), S(this, "_handleConnectionOpen", () => {
                setTimeout(() => {
                    let e = E.default.getCurrentUser();
                    if (null == e) return;
                    let t = A(e),
                        n = {
                            [t.id]: t
                        };
                    Object.values(E.default.getUsers()).forEach(e => {
                        n[e.id] = A(e)
                    });
                    let i = _.default.getMutableAllGuildsAndMembers();
                    for (let e in i)
                        for (let t in i[e]) {
                            var r, s;
                            let a = n[t],
                                o = null !== (s = null === (r = i[e][t]) || void 0 === r ? void 0 : r.nick) && void 0 !== s ? s : f.default.getGlobalName(a);
                            null != a && (a[e] = null != o && "" !== o ? o : null)
                        }
                    this.updateUsers(Object.values(n))
                }, 3e3)
            }), S(this, "_handleConnectionOpenSupplemental", e => {
                let {
                    guilds: t
                } = e;
                setTimeout(() => {
                    let e = a().flatMap(t, e => N(e.members, e.id));
                    this.updateUsers(e)
                }, 3e3)
            }), S(this, "_handleOverlayInitialize", e => {
                let {
                    users: t,
                    guildMembers: n
                } = e, i = new Map;
                for (let e of t) i.set(e.id, A(e));
                for (let e of T.default.keys(n)) {
                    let t = n[e];
                    if (null != t)
                        for (let n of T.default.keys(t)) {
                            let r = i.get(n),
                                s = t[n];
                            null != r && null != s && null != s.nick && (h(r, e, s.nick), i.set(n, r))
                        }
                }
                this.updateUsers(Array.from(i.values())), i.clear()
            }), S(this, "_handleCurrentUserUpdate", e => {
                let {
                    user: t
                } = e, n = A(t);
                null != n && this.updateUsers([n])
            }), S(this, "_handleGuildCreate", e => {
                let {
                    guild: t
                } = e, {
                    members: n
                } = t;
                this.updateUsers(N(n, t.id))
            }), S(this, "_handleGuildMembersChunk", e => {
                let {
                    members: t,
                    guildId: n
                } = e;
                this.updateUsers(N(t, n))
            }), S(this, "_handleGuildMemberUpdate", e => {
                let {
                    guildId: t,
                    user: n,
                    nick: i
                } = e, r = A(n);
                null != r && (h(r, t, i), this.updateUsers([r]))
            }), S(this, "_handlePassiveUpdateV1", e => {
                null != e.members && this.updateUsers(N(e.members, e.guildId))
            }), S(this, "_handleRelationshipAdd", e => {
                let t = A(e.relationship.user);
                this.updateUsers([t])
            }), S(this, "_handleRelationshipUpdate", e => {
                let t = A(E.default.getUser(e.relationship.id));
                this.updateUsers([t])
            }), S(this, "_handleRelationshipRemove", e => {
                let t = A(E.default.getUser(e.relationship.id));
                this.updateUsers([t])
            }), S(this, "_handleDMCreate", e => {
                let {
                    channel: {
                        id: t
                    }
                } = e, n = m(d.default.getChannel(t));
                if (0 === n.length) return;
                let i = A(E.default.getCurrentUser());
                h(i, t), n.push(i), this.updateUsers(n)
            }), S(this, "_handleDMUpdates", e => {
                let {
                    channels: t
                } = e;
                for (let e of t) {
                    let t = m(d.default.getChannel(e.id));
                    if (0 === t.length) continue;
                    let n = A(E.default.getCurrentUser());
                    h(n, e.id), t.push(n), this.updateUsers(t)
                }
            }), S(this, "_handleRecipientChanges", e => {
                let {
                    channelId: t,
                    user: n,
                    isMember: i
                } = e;
                if (!i) return;
                let r = A(n);
                h(r, t), this.updateUsers([r])
            })
        }
    }
    t.default = new p
}