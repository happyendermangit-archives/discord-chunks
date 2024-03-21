function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LobbyError: function() {
            return l
        },
        default: function() {
            return E
        }
    }), n("424973");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("49111");
    class l {
        constructor(e) {
            this.code = e
        }
    }
    let u = {},
        d = {};

    function c(e, t) {
        if (null == d[e]) return null;
        let {
            socketId: n,
            timeout: i,
            resolve: s,
            reject: r
        } = d[e];
        return delete d[e], null != i && clearTimeout(i), null != s && null != r && t(s, r), n
    }

    function _(e) {
        let {
            lobbyId: t,
            member: {
                user: n,
                metadata: i
            }
        } = e, s = u[t];
        if (null == s) return !1;
        let r = s.members.find(e => e.user.id === n.id);
        null != r ? (r.user = n, r.metadata = i) : s.members.push({
            user: n,
            metadata: i
        })
    }
    class f extends r.default.Store {
        getLobbies() {
            return u
        }
        getLobbiesWithVoice() {
            return s.filter(u, e => e.voice)
        }
        getLobby(e) {
            return u[e]
        }
        getPendingLobbies() {
            return s.map(d, (e, t) => {
                let {
                    secret: n
                } = e;
                return {
                    id: t,
                    secret: n
                }
            })
        }
    }
    f.displayName = "LobbyStore";
    var E = new f(a.default, {
        CONNECTION_OPEN: function() {
            u = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            u = e.lobbies
        },
        LOBBY_CONNECT: function(e) {
            let {
                socketId: t,
                lobbyId: n,
                lobbySecret: i,
                resolve: s,
                reject: r
            } = e;
            if (null != d[n] || null != u[n]) {
                null != r && r(new l(o.LobbyErrors.ALREADY_CONNECTING));
                return
            }
            d[n] = {
                socketId: t,
                secret: i,
                resolve: s,
                reject: r,
                timeout: __OVERLAY__ ? null : setTimeout(() => {
                    a.default.dispatch({
                        type: "LOBBY_DELETE",
                        lobbyId: n,
                        reason: o.LobbyErrors.SERVICE_UNAVAILABLE
                    })
                }, 15e3)
            }
        },
        LOBBY_DISCONNECT: function(e) {
            let {
                lobbyId: t
            } = e;
            c(t, (e, t) => t(new l(o.LobbyErrors.NO_ERROR)))
        },
        LOBBY_CREATE: function(e) {
            let {
                lobby: t
            } = e, n = c(t.id, e => e(t));
            null != n && (u[t.id] = {
                socketId: n,
                voice: !1,
                ...u[t.id],
                ...t
            })
        },
        LOBBY_UPDATE: function(e) {
            let {
                lobby: t
            } = e, n = u[t.id];
            null != n && (u[t.id] = {
                ...n,
                ...t
            })
        },
        LOBBY_DELETE: function(e) {
            let {
                lobbyId: t,
                reason: n
            } = e;
            delete u[t], c(t, (e, t) => t(new l(n)))
        },
        LOBBY_MEMBER_CONNECT: _,
        LOBBY_MEMBER_UPDATE: _,
        LOBBY_MEMBER_DISCONNECT: function(e) {
            let {
                lobbyId: t,
                member: {
                    user: n
                }
            } = e, i = u[t];
            if (null == i) return !1;
            i.members = i.members.filter(e => e.user.id !== n.id)
        },
        LOBBY_VOICE_CONNECT: function(e) {
            let {
                lobbyId: t
            } = e, n = u[t];
            if (null == n) return !1;
            n.voice = !0
        },
        LOBBY_VOICE_DISCONNECT: function(e) {
            let {
                lobbyId: t
            } = e, n = u[t];
            if (null == n) return !1;
            n.voice = !1
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                socketId: t
            } = e;
            s.forEach(u, e => {
                e.socketId === t && a.default.dispatch({
                    type: "LOBBY_DISCONNECT",
                    lobbyId: e.id
                })
            })
        }
    })
}