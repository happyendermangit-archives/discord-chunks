function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        searchGuildMembers: function() {
            return u
        }
    });
    var r = n("629815"),
        o = n("865231"),
        i = n("762884");

    function a(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function u(e, t, n) {
        return s.apply(this, arguments)
    }

    function s() {
        var e;
        return e = function(e, t, n) {
            var a, u;
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
            }(this, function(s) {
                switch (s.label) {
                    case 0:
                        return [4, (0, o.searchAllGuildMembers)(e, t, n)];
                    case 1:
                        if ((a = s.sent()).type === i.GuildMemberSearchResponseType.ERROR) throw a.body;
                        return u = a.body, r.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                            guildId: e,
                            members: u.members,
                            page_result_count: u.page_result_count,
                            total_result_count: u.total_result_count
                        }), [2]
                }
            })
        }, (s = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function u(e) {
                    a(i, r, o, u, s, "next", e)
                }

                function s(e) {
                    a(i, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }).apply(this, arguments)
    }
}