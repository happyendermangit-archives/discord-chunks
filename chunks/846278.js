function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        preloadForumThreads: function() {
            return P
        },
        useFirstForumPostMessage: function() {
            return N
        },
        useMostRecentForumMessage: function() {
            return R
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("898511"),
        a = n("967888"),
        u = n("629815"),
        s = n("935741"),
        l = n("523018"),
        c = n("93141"),
        f = n("426166"),
        d = n("566600"),
        _ = n("527666"),
        E = n("281767");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function y(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t && I(e.prototype, t), n && I(e, n), e
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e, t) {
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
    var S = function() {
            function e(t) {
                y(this, e), O(this, "_set", void 0), O(this, "_defaultValueFunc", void 0), this._set = {}, this._defaultValueFunc = t
            }
            return h(e, [{
                key: "get",
                value: function(e) {
                    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
                }
            }, {
                key: "delete",
                value: function(e) {
                    delete this._set[e]
                }
            }, {
                key: "hasNext",
                value: function() {
                    return !o().isEmpty(this._set)
                }
            }, {
                key: "next",
                value: function() {
                    return l.default.keys(this._set)[0]
                }
            }]), e
        }(),
        v = new(function() {
            function e() {
                y(this, e), O(this, "requested", void 0), this.requested = new S(function() {
                    return new Set
                })
            }
            return h(e, [{
                key: "request",
                value: function(e, t) {
                    this.requested.get(e).add(t)
                }
            }, {
                key: "hasRequested",
                value: function(e, t) {
                    return this.requested.get(e).has(t)
                }
            }, {
                key: "finishRequesting",
                value: function(e, t) {
                    var n = this.requested.get(e);
                    t.forEach(function(e) {
                        return n.delete(e)
                    }), v.compact(e)
                }
            }, {
                key: "getRequested",
                value: function(e) {
                    return this.requested.get(e)
                }
            }, {
                key: "getNextBatch",
                value: function(e, t) {
                    return Array.from(this.requested.get(e)).slice(0, t)
                }
            }, {
                key: "hasNext",
                value: function() {
                    return this.requested.hasNext()
                }
            }, {
                key: "next",
                value: function() {
                    return this.requested.next()
                }
            }, {
                key: "compact",
                value: function(e) {
                    0 === this.requested.get(e).size && this.requested.delete(e)
                }
            }]), e
        }()),
        g = null;

    function A(e, t) {
        if ((0, f.isForumActivityExperimentEnabled)(e)) {
            var n = _.default.getMessageState(t),
                r = n.loaded,
                o = n.message;
            return !r && null == o
        }
        return !1
    }

    function b(e, t) {
        return !e && null == t
    }

    function N(e) {
        var t, n, r = (0, i.useStateFromStoresObject)([d.default], function() {
                return d.default.getMessage(e.id)
            }),
            o = r.loaded,
            a = r.firstMessage,
            u = (0, i.useStateFromStores)([s.default], function() {
                return s.default.getChannel(e.parent_id)
            });
        if (null != u && (t = o, n = a, !t && null == n)) D(u, e.id);
        return {
            loaded: o,
            firstMessage: a
        }
    }

    function R(e, t) {
        var n = (0, i.useStateFromStoresObject)([_.default], function() {
                return _.default.getMessageState(t.id)
            }),
            r = n.loaded,
            o = n.message;
        return null != e && A(t.guild_id, t.id) && D(e, t.id), {
            loaded: r,
            mostRecentMessage: o
        }
    }

    function C(e, t) {
        var n = !1;
        t.forEach(function(t) {
            var r, o, i = d.default.getMessage(t),
                a = i.loaded,
                u = i.firstMessage;
            if (r = a, o = u, !r && null == o || A(e.guild_id, t)) v.request(e.id, t), n = !0
        }), n && null == g && (g = setTimeout(L, 0))
    }

    function P(e) {
        C(e, (0, c.computeThreadIdsSnapshot)(e.id).slice(0, 10))
    }

    function D(e, t) {
        if (!v.hasRequested(e.id, t)) {
            var n = (0, c.computeThreadIdsSnapshot)(e.id),
                r = n.findIndex(function(e) {
                    return e === t
                }),
                o = n.slice(r, r + 5).filter(function(t) {
                    return !v.hasRequested(e.id, t)
                });
            C(e, o)
        }
    }

    function L() {
        return M.apply(this, arguments)
    }

    function M() {
        return (M = m(function() {
            return T(this, function(e) {
                switch (e.label) {
                    case 0:
                        e.trys.push([0, , 4, 5]), e.label = 1;
                    case 1:
                        if (!v.hasNext()) return [3, 3];
                        return [4, function(e) {
                            return U.apply(this, arguments)
                        }(v.next())];
                    case 2:
                        return e.sent(), [3, 1];
                    case 3:
                        return [3, 5];
                    case 4:
                        return g = null, [7];
                    case 5:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function U() {
        return (U = m(function(e) {
            var t, n, r, o, i;
            return T(this, function(i) {
                switch (i.label) {
                    case 0:
                        t = v.getNextBatch(e, 10), i.label = 1;
                    case 1:
                        if (i.trys.push([1, 3, 4, 5]), 0 === t.length || null == (r = null === (n = s.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id)) return [2];
                        return [4, a.HTTP.post({
                            url: E.Endpoints.FORUM_POSTS(e),
                            body: {
                                thread_ids: t
                            }
                        })];
                    case 2:
                        return o = i.sent().body.threads, u.default.dispatch({
                            type: "LOAD_FORUM_POSTS",
                            guildId: r,
                            threads: o
                        }), [3, 5];
                    case 3:
                        return i.sent(), [3, 5];
                    case 4:
                        return v.finishRequesting(e, t), [7];
                    case 5:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}