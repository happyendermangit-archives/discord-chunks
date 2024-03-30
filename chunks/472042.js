function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("762624"),
        u = n("639340"),
        s = n("898511"),
        l = n("629815"),
        c = n("183645"),
        f = n("29570"),
        d = n("622780"),
        _ = n("464092"),
        E = n("471559"),
        p = n("309944"),
        m = n("158201"),
        y = n("333969"),
        I = n("443817"),
        h = n("230782"),
        O = n("59686"),
        T = n("281767"),
        S = n("683600"),
        v = n("633353");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var A = [];

    function b(e) {
        var t, n, o = e.channelId,
            b = e.type,
            N = (0, s.useStateFromStores)([d.default], function() {
                return d.default.keyboardModeEnabled
            }),
            R = (0, _.default)("attachments", u.Orientations.HORIZONTAL),
            C = (0, s.useStateFromStores)([m.default], function() {
                return m.default.getUploads(o, b.drafts.type)
            }),
            P = (0, s.useStateFromStoresObject)([E.default], function() {
                var e = E.default.getActiveCommand(o);
                if (null == e) return {
                    isApplicationCommand: !1,
                    commandOptions: A,
                    commandOptionStates: null
                };
                var t = E.default.getOptionStates(o);
                return {
                    isApplicationCommand: !0,
                    commandOptions: e.options,
                    commandOptionStates: t
                }
            }),
            D = P.isApplicationCommand,
            L = P.commandOptions,
            M = P.commandOptionStates,
            U = r.useMemo(function() {
                var e;
                return null !== (e = null == L ? void 0 : L.filter(function(e) {
                    var t;
                    return e.type === f.ApplicationCommandOptionType.ATTACHMENT && (null == M ? void 0 : null === (t = M[e.name]) || void 0 === t ? void 0 : t.hasValue)
                })) && void 0 !== e ? e : []
            }, [L, M]);
        var w = (t = r.useState([]), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            k = w[0],
            G = w[1];
        r.useEffect(function() {
            var e = function() {
                c.default.clearAll(o, b.drafts.type)
            };
            return l.default.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
                function() {
                    return l.default.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
                }
        }, [o, b]);
        var B = r.useCallback(function() {
            R.focusFirstVisibleItem()
        }, [R]);
        return ((0, I.useComponentAction)({
            event: T.ComponentActions.FOCUS_ATTACHMENT_AREA,
            handler: B
        }), r.useEffect(function() {
            if (D) {
                var e = [];
                k.forEach(function(t) {
                    !U.some(function(e) {
                        return t.name === e.name
                    }) && e.push(t)
                }), e.forEach(function(e) {
                    c.default.remove(o, e.name, b.drafts.type)
                }), G(U)
            }
        }, [o, U.length, b]), !D && 0 === C.length || D && 0 === U.length) ? null : r.createElement(r.Fragment, null, r.createElement(a.ListNavigatorProvider, {
            navigator: R
        }, r.createElement(a.ListNavigatorContainer, null, function(e) {
            var t, n, a = e.ref,
                u = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) {
                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                    }
                    return o
                }(e, ["ref"]);
            return r.createElement("ul", (t = function(e) {
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
            }({
                ref: a
            }, u), n = (n = {
                className: i()(S.channelAttachmentArea, v.scrollbarGhost)
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), D ? U.map(function(e) {
                return r.createElement(h.default, {
                    channelId: o,
                    key: e.name,
                    keyboardModeEnabled: N,
                    option: e
                })
            }) : C.map(function(e) {
                return r.createElement(O.default, {
                    channelId: o,
                    draftType: b.drafts.type,
                    upload: e,
                    key: e.id,
                    keyboardModeEnabled: N,
                    clip: e.clip
                })
            }))
        })), b.drafts.type === p.DraftType.FirstThreadMessage ? null : r.createElement(y.default, null))
    }
    t.default = r.memo(function(e) {
        var t = e.channelId,
            n = e.type;
        return e.canAttachFiles ? r.createElement(b, {
            channelId: t,
            type: n
        }) : null
    })
}