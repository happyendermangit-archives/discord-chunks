function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("140817"),
        u = n("471559"),
        s = n("281767");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = new Map,
        E = new Map,
        p = new Map;

    function m(e) {
        if (!E.has(e)) {
            var t;
            E.set(e, {
                commandId: null === (t = u.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                optionName: u.default.getActiveOptionName(e),
                optionNameToAutocompleteQueries: new Map,
                optionNameToLastResults: new Map,
                optionNameToNonce: new Map,
                optionNameToLastQuery: new Map,
                lastErrored: !1,
                lastResponseNonce: void 0
            })
        }
        return E.get(e)
    }

    function y() {
        return _.clear(), E.clear(), !0
    }

    function I(e) {
        var t = e.channelId,
            n = e.command;
        h(t, null == n ? void 0 : n.id)
    }

    function h(e, t) {
        var n = u.default.getActiveOptionName(e),
            r = E.get(e);
        return null != r && (t !== r.commandId || n !== r.optionName) && (null != t && t !== r.commandId && (r.optionNameToLastResults.clear(), r.optionNameToNonce.clear(), r.optionNameToLastQuery.clear(), r.optionNameToAutocompleteQueries.clear()), r.lastErrored = !1, r.commandId = t, r.optionName = n, !0)
    }
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), a.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(u.default)
            }
        }, {
            key: "getLastErrored",
            value: function(e) {
                return m(e).lastErrored
            }
        }, {
            key: "getAutocompleteChoices",
            value: function(e, t, n) {
                var r;
                return null === (r = m(e).optionNameToAutocompleteQueries.get(t)) || void 0 === r ? void 0 : r.get(n)
            }
        }, {
            key: "getAutocompleteLastChoices",
            value: function(e, t) {
                return m(e).optionNameToLastResults.get(t)
            }
        }, {
            key: "getLastResponseNonce",
            value: function(e) {
                return m(e).lastResponseNonce
            }
        }], l(r.prototype, o), i && l(r, i), s
    }(o.default.Store);
    c(O, "displayName", "ApplicationCommandAutocompleteStore"), t.default = new O(i.default, {
        CONNECTION_OPEN: y,
        LOGOUT: y,
        CHANNEL_SELECT: y,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
            var t, n = e.nonce,
                r = e.channelId,
                o = e.query,
                i = e.name,
                a = m(r);
            if (a.optionNameToLastQuery.get(i) === o) return !1;
            a.optionNameToLastQuery.set(i, o);
            var u = null === (t = a.optionNameToAutocompleteQueries.get(i)) || void 0 === t ? void 0 : t.get(o);
            if (null != u) return a.lastErrored = !1, a.optionNameToLastResults.set(i, u), !0;
            var s = a.optionNameToNonce.get(i);
            if (null != s && _.delete(s), _.set(n, {
                    channelId: r,
                    query: o,
                    name: i
                }), p.set(n, new Date), a.optionNameToNonce.set(i, n), a.lastErrored) return a.lastErrored = !1, !0
        },
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
            var t, n, r = e.choices,
                o = e.nonce,
                i = _.get(o);
            if (null == i) return !1;
            _.delete(o);
            var u = null !== (n = null == r ? void 0 : r.map(function(e) {
                    var t, n, r;
                    return n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                c(e, t, n[t])
                            })
                        }
                        return e
                    }({}, e), r = (r = {
                        displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                    }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                    }), n
                })) && void 0 !== n ? n : [],
                l = p.get(o),
                f = null != l ? new Date().getTime() - l.getTime() : 0;
            (0, a.trackWithMetadata)(s.AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: f,
                error: !1,
                num_options: u.length
            }), p.delete(o);
            var d = m(i.channelId);
            return null == d.optionNameToAutocompleteQueries.get(i.name) && d.optionNameToAutocompleteQueries.set(i.name, new Map), null === (t = d.optionNameToAutocompleteQueries.get(i.name)) || void 0 === t || t.set(i.query, u), d.optionNameToLastQuery.get(i.name) === i.query && (d.lastErrored = !1, d.optionNameToLastResults.set(i.name, u)), d.lastResponseNonce = o, !0
        },
        INTERACTION_FAILURE: function(e) {
            var t = e.nonce;
            if (null == t) return !1;
            var n = _.get(t);
            if (null == n) return !1;
            _.delete(t);
            var r = p.get(t),
                o = null != r ? new Date().getTime() - r.getTime() : 0;
            return (0, a.trackWithMetadata)(s.AnalyticEvents.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE, {
                duration_ms: o,
                error: !0
            }), p.delete(t), m(n.channelId).lastErrored = !0, !0
        },
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: I,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: I,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
            var t = e.channelId,
                n = e.command;
            h(t, null == n ? void 0 : n.id)
        }
    })
}