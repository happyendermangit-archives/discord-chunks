function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        MAX_STORED_MESSAGES: function() {
            return T
        },
        default: function() {
            return L
        }
    }), E("424973"), E("222007"), E("808653");
    var t = E("917351"),
        o = E.n(t),
        n = E("446674"),
        r = E("913144"),
        a = E("42203");
    E("162771");
    var i = E("299039"),
        I = E("724210");
    let T = 26,
        s = {},
        S = {},
        N = {},
        O = {};

    function A(e) {
        let _ = S[e];
        if (null == _) return;
        let E = i.default.fromTimestamp(Date.now() - 9e5),
            t = o.findIndex(_, e => i.default.compare(e.id, E) > 0);
        if (-1 === t) S[e] = [];
        else {
            let E = Math.max(t, _.length - T);
            S[e] = o.slice(_, E)
        }
        N[e] = Date.now()
    }

    function R(e, _, E, t) {
        s[e].add(_);
        let o = N[_];
        (null == o || o + 3e5 > Date.now()) && A(_), null == S[_] && (S[_] = []), S[_].push({
            id: E,
            userId: t
        })
    }

    function l(e) {
        let {
            channel: _
        } = e;
        delete S[_.id], delete N[_.id]
    }
    class u extends n.default.Store {
        getActiveChannelsFetchStatus(e) {
            return O[e]
        }
        getActiveChannelIds(e) {
            return s[e]
        }
        getChannelMessageData(e) {
            return S[e]
        }
        shouldFetch(e) {
            var _;
            return null == s[e] && !(null === (_ = O[e]) || void 0 === _ ? void 0 : _.loading)
        }
    }
    u.displayName = "ActiveChannelsStore";
    var L = new u(r.default, {
        CHANNEL_SELECT: function(e) {
            let {
                channelId: _,
                guildId: E
            } = e;
            if (!(0, I.isGuildHomeChannel)(_) || null == E) return !1;
            let t = s[E];
            if (null == t) return !1;
            t.forEach(e => {
                var _;
                A(e), (null === (_ = S[e]) || void 0 === _ ? void 0 : _.length) === 0 && delete S[e]
            });
            let n = o.chain(Array.from(t)).filter(e => e in S).sortBy(e => {
                var _, E;
                return -(null !== (E = null === (_ = S[e]) || void 0 === _ ? void 0 : _.length) && void 0 !== E ? E : 0)
            }).value();
            s[E] = new Set(n)
        },
        MESSAGE_CREATE: function(e) {
            var _;
            let {
                channelId: E,
                message: t,
                optimistic: o,
                isPushNotification: n
            } = e;
            if (o || n) return !1;
            let r = a.default.getChannel(E);
            if (null == r) return !1;
            let i = r.guild_id;
            if (null == i || null == s[i]) return !1;
            R(i, E, t.id, null === (_ = t.author) || void 0 === _ ? void 0 : _.id)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: _
            } = e;
            delete s[_.id]
        },
        CHANNEL_DELETE: l,
        THREAD_DELETE: l,
        ACTIVE_CHANNELS_FETCH_START: function(e) {
            let {
                guildId: _
            } = e;
            O[_] = {
                loading: !0,
                error: null,
                fetchedAt: Date.now()
            }
        },
        ACTIVE_CHANNELS_FETCH_SUCCESS: function(e) {
            let {
                guildId: _,
                channels: E
            } = e;
            O[_] = {
                loading: !1,
                error: null,
                fetchedAt: Date.now()
            }, s[_] = new Set, E.forEach(e => {
                let {
                    channel_id: E,
                    messages: t
                } = e;
                t.forEach(e => {
                    R(_, E, e.message_id, e.user_id)
                })
            })
        },
        ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
            let {
                guildId: _,
                error: E
            } = e;
            O[_] = {
                loading: !1,
                error: E,
                fetchedAt: null
            }
        },
        CONNECTION_OPEN: function() {}
    })
}