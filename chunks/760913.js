function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchTabFetcherImpl: function() {
            return O
        },
        default: function() {
            return h
        }
    });
    var r = n("664751"),
        o = n("967888"),
        i = n("35523"),
        a = n("388990"),
        u = n("281767");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

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
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t && f(e.prototype, t), n && f(e, n), e
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && m(e, t)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function y(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = E(e);
            if (t) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(n)
        }
    }
    var I = function() {
            function e(t, n, r) {
                c(this, e), _(this, "indexingPollId", void 0), _(this, "searchId", void 0), _(this, "searchType", void 0), _(this, "query", void 0), _(this, "retryDelay", void 0), _(this, "isCanceled", !1), this.searchId = t, this.searchType = n, this.query = r
            }
            return d(e, [{
                key: "fetch",
                value: function(e, t, n) {
                    var r, o = this;
                    return (r = function() {
                        var r, u, s, l;
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
                        }(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    if (o.isCanceled) return [2];
                                    c.label = 1;
                                case 1:
                                    return c.trys.push([1, 3, , 4]), [4, o.makeRequest()];
                                case 2:
                                    if (null == (r = c.sent()) || o.isCanceled) return [2];
                                    if (200 === r.status) e(r);
                                    else if (202 === r.status) {
                                        if (o.query.attempts = (null !== (u = o.query.attempts) && void 0 !== u ? u : 0) + 1, o.query.attempts > 5) return [2];
                                        s = r.body.retry_after * a.default.Millis.SECOND, o.retryDelay = isNaN(s) || 0 === s ? 5e3 : s, o.retryLater(e, t, n), t(r)
                                    }
                                    return [3, 4];
                                case 3:
                                    return l = c.sent(), new i.default("SearchFetcher").error(l), n(l), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise(function(n, o) {
                            var i = r.apply(e, t);

                            function a(e) {
                                l(i, n, o, a, u, "next", e)
                            }

                            function u(e) {
                                l(i, n, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    })()
                }
            }, {
                key: "cancel",
                value: function() {
                    this.isCanceled = !0, null != this.indexingPollId && clearTimeout(this.indexingPollId)
                }
            }, {
                key: "retryLater",
                value: function(e, t, n) {
                    null != this.indexingPollId && clearTimeout(this.indexingPollId), this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
                }
            }]), e
        }(),
        h = function(e) {
            p(n, e);
            var t = y(n);

            function n() {
                return c(this, n), t.apply(this, arguments)
            }
            return d(n, [{
                key: "getEndpoint",
                value: function() {
                    switch (this.searchType) {
                        case u.SearchTypes.DMS:
                            return u.Endpoints.SEARCH_DMS;
                        case u.SearchTypes.FAVORITES:
                            return u.Endpoints.SEARCH_FAVORITES;
                        case u.SearchTypes.GUILD:
                            if (null == this.searchId || "" === this.searchId) return;
                            return u.Endpoints.SEARCH_GUILD(this.searchId);
                        case u.SearchTypes.CHANNEL:
                            if (null == this.searchId || "" === this.searchId) return;
                            return u.Endpoints.SEARCH_CHANNEL(this.searchId);
                        default:
                            throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
                    }
                }
            }, {
                key: "makeRequest",
                value: function() {
                    var e = this.getEndpoint();
                    return null == e ? null : o.HTTP.get({
                        url: e,
                        query: r.stringify(this.query),
                        oldFormErrors: !0
                    })
                }
            }]), n
        }(I),
        O = function(e) {
            p(n, e);
            var t = y(n);

            function n(e, r, o, i) {
                var a;
                return c(this, n), _(s(a = t.call(this, e, r, o)), "payload", void 0), a.payload = i, a
            }
            return d(n, [{
                key: "getEndpoint",
                value: function() {
                    switch (this.searchType) {
                        case u.SearchTypes.DMS:
                            return u.Endpoints.SEARCH_TABS_DMS;
                        case u.SearchTypes.GUILD_CHANNEL:
                        case u.SearchTypes.GUILD:
                            if (null == this.searchId || "" === this.searchId) return;
                            return u.Endpoints.SEARCH_TABS_GUILD(this.searchId);
                        case u.SearchTypes.CHANNEL:
                            if (null == this.searchId || "" === this.searchId) return;
                            return u.Endpoints.SEARCH_TABS_CHANNEL(this.searchId);
                        default:
                            throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
                    }
                }
            }, {
                key: "makeRequest",
                value: function() {
                    var e = this.getEndpoint();
                    return null == e ? null : o.HTTP.post({
                        url: e,
                        body: this.payload,
                        oldFormErrors: !0
                    })
                }
            }]), n
        }(I)
}