function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LobbyError: function() {
            return d
        }
    }), n("653041");
    var i, r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("570140"),
        l = n("981631");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class d {
        constructor(e) {
            u(this, "code", void 0), this.code = e
        }
    }
    let _ = {},
        c = {};

    function E(e, t) {
        if (null == c[e]) return null;
        let {
            socketId: n,
            timeout: i,
            resolve: r,
            reject: s
        } = c[e];
        return delete c[e], null != i && clearTimeout(i), null != r && null != s && t(r, s), n
    }

    function I(e) {
        let {
            lobbyId: t,
            member: {
                user: n,
                metadata: i
            }
        } = e, r = _[t];
        if (null == r) return !1;
        let s = r.members.find(e => e.user.id === n.id);
        null != s ? (s.user = n, s.metadata = i) : r.members.push({
            user: n,
            metadata: i
        })
    }
    class T extends(i = a.default.Store) {
        getLobbies() {
            return _
        }
        getLobbiesWithVoice() {
            return s().filter(_, e => e.voice)
        }
        getLobby(e) {
            return _[e]
        }
        getPendingLobbies() {
            return s().map(c, (e, t) => {
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
    u(T, "displayName", "LobbyStore"), t.default = new T(o.default, {
        CONNECTION_OPEN: function() {
            _ = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            _ = e.lobbies
        },
        LOBBY_CONNECT: function(e) {
            let {
                socketId: t,
                lobbyId: n,
                lobbySecret: i,
                resolve: r,
                reject: s
            } = e;
            if (null != c[n] || null != _[n]) {
                null != s && s(new d(l.LobbyErrors.ALREADY_CONNECTING));
                return
            }
            c[n] = {
                socketId: t,
                secret: i,
                resolve: r,
                reject: s,
                timeout: __OVERLAY__ ? null : setTimeout(() => {
                    o.default.dispatch({
                        type: "LOBBY_DELETE",
                        lobbyId: n,
                        reason: l.LobbyErrors.SERVICE_UNAVAILABLE
                    })
                }, 15e3)
            }
        },
        LOBBY_DISCONNECT: function(e) {
            let {
                lobbyId: t
            } = e;
            E(t, (e, t) => t(new d(l.LobbyErrors.NO_ERROR)))
        },
        LOBBY_CREATE: function(e) {
            let {
                lobby: t
            } = e, n = E(t.id, e => e(t));
            null != n && (_[t.id] = {
                socketId: n,
                voice: !1,
                ..._[t.id],
                ...t
            })
        },
        LOBBY_UPDATE: function(e) {
            let {
                lobby: t
            } = e, n = _[t.id];
            null != n && (_[t.id] = {
                ...n,
                ...t
            })
        },
        LOBBY_DELETE: function(e) {
            let {
                lobbyId: t,
                reason: n
            } = e;
            delete _[t], E(t, (e, t) => t(new d(n)))
        },
        LOBBY_MEMBER_CONNECT: I,
        LOBBY_MEMBER_UPDATE: I,
        LOBBY_MEMBER_DISCONNECT: function(e) {
            let {
                lobbyId: t,
                member: {
                    user: n
                }
            } = e, i = _[t];
            if (null == i) return !1;
            i.members = i.members.filter(e => e.user.id !== n.id)
        },
        LOBBY_VOICE_CONNECT: function(e) {
            let {
                lobbyId: t
            } = e, n = _[t];
            if (null == n) return !1;
            n.voice = !0
        },
        LOBBY_VOICE_DISCONNECT: function(e) {
            let {
                lobbyId: t
            } = e, n = _[t];
            if (null == n) return !1;
            n.voice = !1
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                socketId: t
            } = e;
            s().forEach(_, e => {
                e.socketId === t && o.default.dispatch({
                    type: "LOBBY_DISCONNECT",
                    lobbyId: e.id
                })
            })
        }
    })
}