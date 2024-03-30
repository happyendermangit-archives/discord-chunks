function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("629815"),
        o = n("531822"),
        i = n("712398"),
        a = n("965067"),
        u = n("465478"),
        s = n("935741"),
        l = n("957808"),
        c = n("903716"),
        f = n("761387");

    function d(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function _(e, t) {
        return E.apply(this, arguments)
    }

    function E() {
        var e;
        return e = function(e, t) {
            var n, d, _, E, p, m, y, I, h, O, T, S, v, g, A, b, N, R, C, P, D, L, M, U = arguments;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(w) {
                switch (w.label) {
                    case 0:
                        if (_ = void 0 !== (d = (n = U.length > 2 && void 0 !== U[2] ? U[2] : {}).withMutualGuilds) && d, p = void 0 !== (E = n.withMutualFriendsCount) && E, m = n.friendToken, I = void 0 === (y = n.preloadUserBanner) || y, O = void 0 !== (h = n.dispatchWait) && h, T = n.guildId, S = n.channelId, "" === e) return [2];
                        if ((0, u.fetchUserProfileEffects)(), null != t && (0, i.maybeFetchColors)(t), null != T && !_ && (_ = !0), null != T && (v = null !== (A = null === (g = (0, a.getVisibleConnectionsRole)({
                                guildMember: l.default.getMember(T, e),
                                channel: s.default.getChannel(S)
                            })) || void 0 === g ? void 0 : g.id) && void 0 !== A ? A : void 0), b = c.default.getUserProfile(e), N = c.default.getMutualGuilds(e), R = c.default.getMutualFriendsCount(e), C = c.default.isFetchingProfile(e), P = (null == b ? void 0 : b.profileFetchFailed) || !C && (!Array.isArray(N) && _ || null == R && p), D = I ? f.default : void 0, L = !1, null != T && (L = null == c.default.getGuildMemberProfile(e, T)), !P && !L && (C || Date.now() - (null !== (M = null == b ? void 0 : b.lastFetched) && void 0 !== M ? M : 0) < 6e4)) return [2];
                        if (!O) return [3, 2];
                        return [4, r.default.wait(function() {
                            return (0, o.fetchProfile)(e, {
                                withMutualGuilds: _,
                                withMutualFriendsCount: p,
                                friendToken: m,
                                guildId: T,
                                connectionsRoleId: v
                            }, D)
                        })];
                    case 1:
                        return w.sent(), [3, 4];
                    case 2:
                        return [4, (0, o.fetchProfile)(e, {
                            withMutualGuilds: _,
                            withMutualFriendsCount: p,
                            friendToken: m,
                            guildId: T,
                            connectionsRoleId: v
                        }, D)];
                    case 3:
                        w.sent(), w.label = 4;
                    case 4:
                        return [2]
                }
            })
        }, (E = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    d(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    d(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}