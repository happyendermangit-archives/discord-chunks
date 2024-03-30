function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("898511"),
        l = n("242880"),
        c = n("629815"),
        f = n("2432"),
        d = n("870331"),
        _ = n("222007"),
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

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = "BlockedDomainStore",
        O = "BlockedDomainRevision",
        T = null,
        S = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && I(e, t)
            }(c, e);
            var t, r, o, i, u, s = (t = c, r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, n, o, i = y(t);
                if (r) {
                    var a = y(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (n = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(n) || "function" == typeof n) ? n : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function c() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, c), s.apply(this, arguments)
            }
            return o = c, i = [{
                key: "initialize",
                value: function() {
                    a = null, l.Storage.get(h) && (l.Storage.remove(O), l.Storage.remove(h))
                }
            }, {
                key: "getCurrentRevision",
                value: function() {
                    if (null == a) {
                        var e;
                        a = null !== (e = l.Storage.get(O)) && void 0 !== e ? e : null
                    }
                    return a
                }
            }, {
                key: "getBlockedDomainList",
                value: function() {
                    var e;
                    return (e = function() {
                        var e;
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
                        }(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (null != T) return [3, 2];
                                    return e = Set.bind, [4, _.default.getBlockedDomains()];
                                case 1:
                                    T = new(e.apply(Set, [void 0, t.sent()])), t.label = 2;
                                case 2:
                                    return [2, T]
                            }
                        })
                    }, function() {
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
                    })()
                }
            }, {
                key: "isBlockedDomain",
                value: function(e) {
                    var t = n("647229");
                    if (null == T) return this.getBlockedDomainList(), null;
                    var r = (0, f.getHostname)(e),
                        o = new t.hash.sha256,
                        i = t.codec.hex.fromBits(o.update(r).finalize()),
                        a = "";
                    T.has(i) && (a = r);
                    for (var u = r.indexOf("."); - 1 !== u && "" === a;) r = r.substring(u + 1), o.reset(), i = t.codec.hex.fromBits(o.update(r).finalize()), T.has(i) && (a = r), u = r.indexOf(".");
                    return "" !== a ? (d.default.track(E.AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, {
                        blocked_domain: a
                    }), a) : null
                }
            }], m(o.prototype, i), u && m(o, u), c
        }(s.default.Store);
    i = "BlockedDomainStore", (o = "displayName") in(r = S) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new S(c.default, {
        BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
            var t = e.list,
                n = e.revision;
            T = null, a = null, _.default.saveBlockedDomains(t), l.Storage.set("BlockedDomainRevision", n)
        }
    })
}