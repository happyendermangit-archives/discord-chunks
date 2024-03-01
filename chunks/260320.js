function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LobbyError: function() {
            return d
        },
        default: function() {
            return g
        }
    }), n("424973");
    var s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        a = n("913144"),
        o = n("49111");
    class d {
        constructor(e) {
            this.code = e
        }
    }
    let u = {},
        l = {};

    function f(e, t) {
        if (null == l[e]) return null;
        let {
            socketId: n,
            timeout: s,
            resolve: i,
            reject: r
        } = l[e];
        return delete l[e], null != s && clearTimeout(s), null != i && null != r && t(i, r), n
    }

    function _(e) {
        let {
            lobbyId: t,
            member: {
                user: n,
                metadata: s
            }
        } = e, i = u[t];
        if (null == i) return !1;
        let r = i.members.find(e => e.user.id === n.id);
        null != r ? (r.user = n, r.metadata = s) : i.members.push({
            user: n,
            metadata: s
        })
    }
    class c extends r.default.Store {
        getLobbies() {
            return u
        }
        getLobbiesWithVoice() {
            return i.filter(u, e => e.voice)
        }
        getLobby(e) {
            return u[e]
        }
        getPendingLobbies() {
            return i.map(l, (e, t) => {
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
    c.displayName = "LobbyStore";
    var g = new c(a.default, {
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
                lobbySecret: s,
                resolve: i,
                reject: r
            } = e;
            if (null != l[n] || null != u[n]) {
                null != r && r(new d(o.LobbyErrors.ALREADY_CONNECTING));
                return
            }
            l[n] = {
                socketId: t,
                secret: s,
                resolve: i,
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
            f(t, (e, t) => t(new d(o.LobbyErrors.NO_ERROR)))
        },
        LOBBY_CREATE: function(e) {
            let {
                lobby: t
            } = e, n = f(t.id, e => e(t));
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
            delete u[t], f(t, (e, t) => t(new d(n)))
        },
        LOBBY_MEMBER_CONNECT: _,
        LOBBY_MEMBER_UPDATE: _,
        LOBBY_MEMBER_DISCONNECT: function(e) {
            let {
                lobbyId: t,
                member: {
                    user: n
                }
            } = e, s = u[t];
            if (null == s) return !1;
            s.members = s.members.filter(e => e.user.id !== n.id)
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
            i.forEach(u, e => {
                e.socketId === t && a.default.dispatch({
                    type: "LOBBY_DISCONNECT",
                    lobbyId: e.id
                })
            })
        }
    })
}