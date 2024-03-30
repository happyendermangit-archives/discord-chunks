function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        searchAllGuildMembers: function() {
            return c
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("146591"),
        a = n("388990"),
        u = n("762884"),
        s = n("281767");

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function c(e, t) {
        return f.apply(this, arguments)
    }

    function f() {
        var e;
        return e = function(e, t) {
            var n, l, f, d, _, E, p, m, y = arguments;
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
            }(this, function(I) {
                switch (I.label) {
                    case 0:
                        if (n = y.length > 2 && void 0 !== y[2] ? y[2] : {}, (l = y.length > 3 && void 0 !== y[3] ? y[3] : 0) > 3) throw Error("Unable to search guild members after max retries");
                        d = void 0 === (f = n.autoRetry) || f, _ = n.signal, I.label = 1;
                    case 1:
                        return I.trys.push([1, 6, , 7]), [4, r.HTTP.post({
                            url: s.Endpoints.GUILD_MEMBER_SEARCH(e),
                            body: t,
                            signal: _
                        })];
                    case 2:
                        if ((E = I.sent()).status !== u.INDEXING_RESPONSE_CODE) return [3, 5];
                        if (null == E.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!d) throw Error("Indexing response received but autoRetry is disabled");
                        return [4, o.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        })];
                    case 3:
                        return I.sent(), [4, new Promise(function(e) {
                            return setTimeout(e, E.body.retry_after * a.default.Millis.SECOND)
                        })];
                    case 4:
                        return I.sent(), [2, c(e, t, n, l + 1)];
                    case 5:
                        var h;
                        return [2, {
                            type: u.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                            body: {
                                guild_id: (h = E.body).guild_id,
                                members: h.members,
                                page_result_count: h.page_result_count,
                                total_result_count: h.total_result_count
                            }
                        }];
                    case 6:
                        return p = I.sent(), m = new i.APIError(p), [2, {
                            type: u.GuildMemberSearchResponseType.ERROR,
                            body: m
                        }];
                    case 7:
                        return [2]
                }
            })
        }, (f = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    l(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    l(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}