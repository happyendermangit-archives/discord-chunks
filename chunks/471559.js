function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("248579"),
        u = n("894288"),
        s = n("653754");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = {};

    function m() {
        return p = {}, !0
    }

    function y(e) {
        return !(e in p) && (p[e] = {
            activeCommand: null,
            activeCommandSection: null,
            activeOptionName: null,
            preferredCommandId: null,
            optionStates: {},
            initialValues: {}
        }), p[e]
    }

    function I(e) {
        var t, n = e.channelId,
            r = e.command,
            o = e.section,
            i = e.initialValues,
            a = e.location,
            u = e.triggerSection,
            l = e.queryLength,
            c = y(n);
        if ((null == r ? void 0 : r.id) === (null === (t = c.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
        c.activeCommand = r, c.activeCommandSection = o, c.activeOptionName = null, c.preferredCommandId = null, c.initialValues = null != i ? i : {};
        var f = {};
        return (null == r ? void 0 : r.options) != null && r.options.forEach(function(e) {
            f[e.name] = {
                isActive: !1,
                hasValue: !1,
                lastValidationResult: null,
                optionValue: null
            }
        }), c.optionStates = f, null != r && (0, s.trackCommandSelected)({
            command: r,
            location: a,
            triggerSection: u,
            queryLength: l
        }), !0
    }

    function h(e) {
        var t, n, r = e.channelId,
            o = e.commandId,
            i = y(r);
        return o !== i.preferredCommandId && (null !== i.preferredCommandId || o !== (null !== (n = null === (t = i.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (i.activeCommand = null, i.activeOptionName = null, i.preferredCommandId = o, i.optionStates = {}, !0)
    }

    function O(e) {
        var t = e.channelId,
            n = e.changedOptionStates,
            r = y(t),
            o = _({}, r.optionStates),
            i = !0,
            a = !1,
            u = void 0;
        try {
            for (var s, c = Object.entries(n)[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                var f, d, E, p, m, I = (f = s.value, d = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(f) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                u = !0, r = e
                            } finally {
                                try {
                                    !a && null != o.return && o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(f, d) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }
                    }(f, d) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    h = I[0],
                    O = I[1];
                if (h in r.optionStates) {
                    if (!(void 0 !== O.hasValue ? O.hasValue : o[h].hasValue)) {
                        o[h] = {
                            hasValue: !1,
                            isActive: !1,
                            lastValidationResult: null,
                            optionValue: null,
                            location: void 0,
                            length: void 0
                        }, r.activeOptionName === h && (r.activeOptionName = null);
                        continue
                    }
                    var T = o[h];
                    o[h] = {
                        hasValue: !0,
                        isActive: void 0 !== O.isActive ? O.isActive : T.isActive,
                        lastValidationResult: void 0 !== O.lastValidationResult ? O.lastValidationResult : T.lastValidationResult,
                        optionValue: null !== (E = O.optionValue) && void 0 !== E ? E : T.optionValue,
                        location: null !== (p = O.location) && void 0 !== p ? p : T.location,
                        length: null !== (m = O.length) && void 0 !== m ? m : T.length
                    }, void 0 !== O.isActive && (O.isActive ? (null != r.activeOptionName && r.activeOptionName !== h && (o[r.activeOptionName] = _({}, o[r.activeOptionName]), o[r.activeOptionName].isActive = !1), r.activeOptionName = h) : h === r.activeOptionName && (r.activeOptionName = null))
                }
            }
        } catch (e) {
            a = !0, u = e
        } finally {
            try {
                !i && null != c.return && c.return()
            } finally {
                if (a) throw u
            }
        }
        return r.optionStates = o, !0
    }
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(l, e);
        var t, n, r, o, i, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), s.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                a.default.addChangeListener(function() {
                    var e = u.default.getChannelId();
                    if (null == e) return p = {}, !0;
                    var t = a.default.getCurrentSidebarChannelId(e);
                    if (null != t && t in p) return !1;
                    p = e in p ? f({}, e, p[e]) : {}
                })
            }
        }, {
            key: "getActiveCommand",
            value: function(e) {
                return y(e).activeCommand
            }
        }, {
            key: "getActiveCommandSection",
            value: function(e) {
                return y(e).activeCommandSection
            }
        }, {
            key: "getActiveOptionName",
            value: function(e) {
                return y(e).activeOptionName
            }
        }, {
            key: "getActiveOption",
            value: function(e) {
                var t, n, r, o = y(e);
                return null !== (r = null === (n = o.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(function(e) {
                    return e.name === o.activeOptionName
                })) && void 0 !== r ? r : null
            }
        }, {
            key: "getPreferredCommandId",
            value: function(e) {
                return y(e).preferredCommandId
            }
        }, {
            key: "getOptionStates",
            value: function(e) {
                return y(e).optionStates
            }
        }, {
            key: "getOptionState",
            value: function(e, t) {
                return y(e).optionStates[t]
            }
        }, {
            key: "getOption",
            value: function(e, t) {
                var n, r;
                return null === (r = y(e).activeCommand) || void 0 === r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find(function(e) {
                    return e.name === t
                })
            }
        }, {
            key: "getState",
            value: function(e) {
                return _({}, y(e))
            }
        }], c(r.prototype, o), i && c(r, i), l
    }(o.default.Store);
    f(T, "displayName", "ApplicationCommandStore");
    var S = new T(i.default, {
        CONNECTION_OPEN: m,
        CHANNEL_SELECT: m,
        LOGOUT: m,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: I,
        APPLICATION_COMMAND_SET_PREFERRED_COMMAND: h,
        APPLICATION_COMMAND_UPDATE_OPTIONS: O,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
            var t = e.channelId,
                n = e.preferredCommandId,
                r = e.command,
                o = e.section,
                i = e.location,
                a = e.changedOptionStates,
                u = I({
                    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                    channelId: t,
                    command: r,
                    section: o,
                    location: i
                }),
                s = h({
                    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                    channelId: t,
                    commandId: n
                }),
                l = O({
                    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                    channelId: t,
                    changedOptionStates: a
                });
            return u || s || l
        }
    });
    t.default = S
}