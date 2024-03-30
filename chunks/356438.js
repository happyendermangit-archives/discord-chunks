function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("948876"),
        s = n("785720"),
        l = n("650946"),
        c = n("960201"),
        f = n("407048"),
        d = n("941504"),
        _ = n("373938");

    function E(e, t, n) {
        return r.createElement(l.default, {
            key: e.name,
            className: _.option,
            name: e.displayName,
            state: t,
            onClick: n
        })
    }

    function p(e) {
        var t = e.command,
            n = e.optionStates,
            o = e.onOptionClick,
            i = r.useMemo(function() {
                var e, r, o, i, a = null !== (o = null === (e = t.options) || void 0 === e ? void 0 : e.filter(function(e) {
                        return e.required
                    })) && void 0 !== o ? o : [],
                    u = null !== (i = null === (r = t.options) || void 0 === r ? void 0 : r.filter(function(e) {
                        return !e.required
                    })) && void 0 !== i ? i : [];
                return {
                    requiredOptions: a,
                    setOptionalOptions: u.filter(function(e) {
                        var t;
                        return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue
                    }),
                    unsetOptionalOptions: u.filter(function(e) {
                        var t;
                        return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue)
                    })
                }
            }, [t.options, n]),
            u = i.requiredOptions,
            l = i.setOptionalOptions,
            c = i.unsetOptionalOptions,
            f = r.createElement("div", {
                className: _.optionalNames
            }, c.map(function(e) {
                return r.createElement(a.Text, {
                    key: e.name,
                    variant: "text-sm/normal"
                }, e.displayName)
            })),
            p = u.map(function(e) {
                return E(e, null == n ? void 0 : n[e.name], o)
            }),
            m = l.length > 0 ? r.createElement(r.Fragment, null, r.createElement(a.Heading, {
                className: _.optionalHeader,
                variant: "heading-deprecated-12/semibold"
            }, d.default.Messages.COMMANDS_OPTIONAL_HEADER), l.map(function(e) {
                return E(e, null == n ? void 0 : n[e.name], o)
            })) : null,
            y = c.length > 0 ? r.createElement(a.Tooltip, {
                text: f,
                "aria-label": !1,
                delay: 200
            }, function(e) {
                return r.createElement(s.default, function(e) {
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
                    className: _.optionalCount,
                    color: s.default.Colors.MUTED
                }, e), 0 === l.length ? d.default.Messages.COMMANDS_OPTIONAL_COUNT.format({
                    count: c.length
                }) : d.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                    count: c.length
                }))
            }) : null;
        return r.createElement(r.Fragment, null, p, null != m || null != y ? r.createElement("div", {
            className: _.optionals
        }, m, y) : null)
    }

    function m(e) {
        var t, n, o, a, s = e.command,
            l = e.activeOptionName,
            d = e.channel,
            E = e.showOptions,
            m = e.showImage,
            y = e.optionStates,
            I = e.onOptionClick,
            h = e.section,
            O = e.isSelectable,
            T = r.useMemo(function() {
                var e;
                return null == s ? void 0 : null === (e = s.options) || void 0 === e ? void 0 : e.find(function(e) {
                    return e.name === l
                })
            }, [l, s]),
            S = null != l ? null == y ? void 0 : y[l] : null;
        n = null != S && (null === (t = S.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (o = S.lastValidationResult.error) && void 0 !== o ? o : "" : null;
        var v = m && null != h ? (0, c.getIconComponent)(h) : null;
        return r.createElement("div", {
            className: i()(_.wrapper, void 0 === O || O ? null : _.disabled)
        }, null != v ? r.createElement(v, {
            className: _.image,
            channel: d,
            section: h,
            width: 32,
            height: 32
        }) : null, r.createElement("div", {
            className: _.infoWrapper
        }, r.createElement("div", {
            className: _.usageWrapper
        }, r.createElement(u.AutocompleteRowHeading, {
            className: _.title
        }, f.COMMAND_SENTINEL + s.displayName), E ? r.createElement(p, {
            command: s,
            optionStates: y,
            onOptionClick: I
        }) : null), r.createElement(u.AutocompleteRowSubheading, {
            className: i()(_.description, null != n ? _.error : null)
        }, null !== (a = null != n ? n : null == T ? void 0 : T.displayDescription) && void 0 !== a ? a : s.displayDescription)), r.createElement(u.AutocompleteRowContentSecondary, {
            className: _.source
        }, null == h ? void 0 : h.name))
    }
}