function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchMemberCounts: function() {
            return E
        },
        requestMembersForRole: function() {
            return y
        }
    });
    var r = n("31775"),
        o = n.n(r),
        i = n("967888"),
        a = n("629815"),
        u = n("322997"),
        s = n("749893"),
        l = n("281767");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function f(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    c(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    c(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function d(e, t) {
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
    }

    function _() {
        return (_ = f(function(e) {
            var t, n;
            return d(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), a.default.dispatch({
                            type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                            guildId: e
                        }), [4, i.HTTP.get({
                            url: l.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        })];
                    case 1:
                        return t = n.sent().body, a.default.dispatch({
                            type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                            guildId: e,
                            roleMemberCount: t
                        }), [3, 3];
                    case 2:
                        return n.sent(), a.default.dispatch({
                            type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                            guildId: e
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function E(e) {
        return p.apply(this, arguments)
    }

    function p() {
        return (p = f(function(e) {
            return d(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (!s.default.shouldFetch(e)) return [3, 2];
                        return [4, function(e) {
                            return _.apply(this, arguments)
                        }(e)];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    var m = new(o())({
        maxAge: 1e4
    });

    function y(e, t) {
        var n, r, o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            a = "".concat(e, "-").concat(t);
        if (!o || null == m.get(a)) {
            ;
            return m.set(a, !0), n = e, r = t, i.HTTP.get({
                url: l.Endpoints.GUILD_ROLE_MEMBER_IDS(n, r)
            }).then(function(e) {
                return u.default.requestMembersById(n, e.body, !1), e.body.length
            })
        }
        return Promise.resolve(null)
    }
}