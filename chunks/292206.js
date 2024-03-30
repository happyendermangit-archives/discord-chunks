function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        executeQuery: function() {
            return S
        },
        getCachedApplicationSection: function() {
            return I
        },
        getCachedCommand: function() {
            return y
        },
        getCachedResults: function() {
            return h
        },
        getChangeKeys: function() {
            return O
        },
        useCommand: function() {
            return v
        },
        useCommandsForApplication: function() {
            return g
        },
        useDiscovery: function() {
            return T
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("306912"),
        a = n("162677"),
        u = n("591439"),
        s = n("455866"),
        l = n("705737"),
        c = n("861272"),
        f = n("653754"),
        d = n("118891"),
        _ = n("281767");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e) {
        return function(e) {
            if (Array.isArray(e)) return E(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || m(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t) {
        if (e) {
            if ("string" == typeof e) return E(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
        }
    }

    function y(e, t) {
        if (null == t) return {
            application: void 0,
            command: void 0
        };
        var n = s.default.getUserState(),
            r = s.default.getContextState(e),
            o = Object.values(null !== (f = null === (l = n.result) || void 0 === l ? void 0 : l.sections) && void 0 !== f ? f : {}).concat(Object.values(null !== (d = null === (c = r.result) || void 0 === c ? void 0 : c.sections) && void 0 !== d ? d : {})),
            i = !0,
            a = !1,
            u = void 0;
        try {
            for (var l, c, f, d, _, E = o[Symbol.iterator](); !(i = (_ = E.next()).done); i = !0) {
                var p = _.value,
                    m = p.commands[t];
                if (null != m) return {
                    application: p.descriptor.application,
                    command: m
                }
            }
        } catch (e) {
            a = !0, u = e
        } finally {
            try {
                !i && null != E.return && E.return()
            } finally {
                if (a) throw u
            }
        }
        return {
            application: void 0,
            command: void 0
        }
    }

    function I(e, t, n) {
        var r, o, i, a, u, l = s.default.getUserState(),
            c = s.default.getContextState(e),
            f = null !== (u = null === (o = l.result) || void 0 === o ? void 0 : null === (r = o.sections) || void 0 === r ? void 0 : r[n]) && void 0 !== u ? u : null === (a = c.result) || void 0 === a ? void 0 : null === (i = a.sections) || void 0 === i ? void 0 : i[n];
        return null == f ? void 0 : f.descriptor
    }

    function h(e, t, n) {
        var r = s.default.query(e, {
            commandType: t,
            text: n
        }, {
            scoreMethod: l.ScoreMethod.COMMAND_OR_APPLICATION,
            allowFetch: !1
        });
        return {
            commands: r.commands,
            sections: r.descriptors
        }
    }

    function O(e) {
        var t = s.default.getUserState(),
            n = s.default.getContextState(e);
        return [null == t ? void 0 : t.result, null == n ? void 0 : n.result]
    }

    function T(e, t, n) {
        var a, l, c, f, E = (0, o.useStateFromStores)([i.default], function() {
            return i.default.getGuild(null == e ? void 0 : e.guild_id)
        }, [e.guild_id]);
        var y = (0, s.useDiscoveryState)(e, E, t, (a = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, n), l = (l = {
                allowFetch: !0
            }, l), Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e))
            }), a)),
            I = y.descriptors,
            h = y.commands,
            O = y.sectionedCommands,
            T = y.loading;
        var S = (c = r.useState(null), f = 2, function(e) {
                if (Array.isArray(e)) return e
            }(c) || function(e, t) {
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
            }(c, f) || m(c, f) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            v = S[0],
            g = S[1],
            A = r.useRef(!1);
        A.current = T;
        var N = r.useMemo(function() {
            var e = [];
            if (null != n.placeholderCount)
                for (var r = 0; r < n.placeholderCount; r++) e.push(b(r, t.commandType));
            return e
        }, [t.commandType, n.placeholderCount]);
        return r.useMemo(function() {
            var e = {
                loading: A,
                commands: h,
                activeSections: I,
                commandsByActiveSection: O,
                filteredSectionId: v,
                hasMoreAfter: !1,
                placeholders: T ? N : [],
                sectionDescriptors: I,
                filterSection: function(e) {
                    g(e)
                },
                scrollDown: _.NOOP
            };
            if (null != v) {
                var t = O.find(function(e) {
                    return e.section.id === v
                });
                e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
            }
            if (T) {
                var n = O[0];
                if (null != n) e.commandsByActiveSection = [{
                    section: n.section,
                    data: p(n.data).concat(p(N))
                }].concat(p(O.slice(1)));
                else {
                    var r = u.BUILT_IN_SECTIONS[d.BuiltInSectionId.BUILT_IN];
                    e.activeSections = [r], e.commandsByActiveSection = [{
                        section: r,
                        data: N
                    }]
                }
                e.commands = p(h).concat(p(N))
            }
            return e
        }, [h, I, v, O, T, N])
    }

    function S(e, t, n) {
        var r = s.default.query(e, t, n),
            o = r.descriptors,
            i = r.commands,
            a = r.loading,
            l = [];
        if (null != n.placeholderCount && a)
            for (var c = 0; c < n.placeholderCount; c++) l.push(b(c, t.commandType));
        return {
            commands: a ? p(i).concat(p(l)) : i,
            sections: a && 0 === o.length ? [u.BUILT_IN_SECTIONS[d.BuiltInSectionId.BUILT_IN]] : o
        }
    }

    function v(e, t) {
        var n = (0, s.useUserIndexState)(!0, !0),
            o = (0, s.useContextIndexState)(e, !0, !0);
        return r.useMemo(function() {
            if (null != t) {
                var e = Object.values(null !== (l = null === (u = n.result) || void 0 === u ? void 0 : u.sections) && void 0 !== l ? l : {}).concat(Object.values(null !== (c = null === (s = o.result) || void 0 === s ? void 0 : s.sections) && void 0 !== c ? c : {})),
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var u, s, l, c, f, d = e[Symbol.iterator](); !(r = (f = d.next()).done); r = !0) {
                        var _ = f.value,
                            E = _.commands[t];
                        if (null != E) return {
                            command: E,
                            application: _.descriptor.application
                        }
                    }
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !r && null != d.return && d.return()
                    } finally {
                        if (i) throw a
                    }
                }
            }
            return {
                command: void 0,
                application: void 0
            }
        }, [o.result, n.result, t])
    }

    function g(e, t, n) {
        var o = (0, s.useUserIndexState)(!0, !0),
            i = (0, s.useContextIndexState)(e, !0, !0);
        return r.useMemo(function() {
            var e, r, u, s, l, c, d = null !== (l = null === (r = o.result) || void 0 === r ? void 0 : null === (e = r.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== l ? l : null === (u = i.result) || void 0 === u ? void 0 : u.sections[t],
                _ = Object.values(null !== (c = null == d ? void 0 : d.commands) && void 0 !== c ? c : {}).map(function(e) {
                    return null == e.rootCommand ? e : (0, f.buildCommand)({
                        rootCommand: e.rootCommand,
                        command: e.rootCommand,
                        applicationId: e.applicationId
                    })
                }).reduce(function(e, t) {
                    return e[t.id] = t, e
                }, {});
            return {
                application: null == d ? void 0 : null === (s = d.descriptor) || void 0 === s ? void 0 : s.application,
                commands: n.map(function(e) {
                    return _[e]
                }).filter(a.isNotNullish)
            }
        }, [null == o ? void 0 : o.result, null == i ? void 0 : i.result, t, n])
    }
    var A = {
        id: "placeholder-section",
        type: c.ApplicationCommandSectionType.APPLICATION,
        name: ""
    };

    function b(e, t) {
        return {
            type: t,
            inputType: c.ApplicationCommandInputType.PLACEHOLDER,
            id: "placeholder-".concat(e),
            name: "",
            displayName: "",
            description: "",
            displayDescription: "",
            applicationId: "",
            section: A
        }
    }
}