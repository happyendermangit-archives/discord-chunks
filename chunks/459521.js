function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("29570"),
        o = n("292206"),
        i = n("705737"),
        a = n("861272"),
        u = n("960201"),
        s = n("53867"),
        l = n("208454"),
        c = n("587996"),
        f = n("62957"),
        d = n("4833"),
        _ = n("233126"),
        E = n("209610"),
        p = n("875686"),
        m = n("941504");

    function y(e) {
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
    }

    function I(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function h(e) {
        var t = d.PREFIX_COMMAND_REGEX.exec(e);
        if (null != t) return {
            type: "prefix",
            cleanedQuery: e.substring(t[0].length).trim()
        };
        var n = d.BOT_MENTION_COMMAND_REGEX.exec(e);
        if (null != n) {
            var r = n[1],
                o = l.default.getUser(r);
            return null == o || !o.bot || o.isClyde() ? null : {
                type: "mention",
                cleanedQuery: e.substring(n[0].length).trim(),
                user: o
            }
        }
        return null
    }
    var O = I(y({}, p.default), {
        sentinel: void 0,
        focusMode: E.FocusMode.MANUAL,
        matches: function(e, t, n, r, o) {
            if (o.commands === E.CommandMode.DISABLED || o.commands === E.CommandMode.OLD_BUILT_INS || n.length < 2 || !s.ShowCommandSuggestions.getSetting()) return !1;
            var i = h(n);
            return null != i && i.cleanedQuery.length > 0
        },
        queryResults: function(e, t, n, a, l) {
            if (!s.ShowCommandSuggestions.getSetting()) return p.EMPTY_RESULTS;
            var c = h(n);
            if (null == c) return p.EMPTY_RESULTS;
            var f = (0, u.getCommandQuery)(e, c.cleanedQuery),
                d = o.executeQuery(e, {
                    commandType: r.ApplicationCommandType.CHAT,
                    text: f.text
                }, {
                    limit: E.MAX_COMMAND_AUTOCOMPLETE_RESULTS,
                    placeholderCount: E.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: i.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: l
                }),
                _ = d.commands,
                m = d.sections;
            if (null == _) return p.EMPTY_RESULTS;
            var y = _;
            if (f.hasSpaceTerminator) {
                var I = f.text.trim(),
                    O = I + " ";
                y = y.filter(function(e) {
                    return e.name === I || e.name.startsWith(O)
                })
            }
            return 0 === y.length ? p.EMPTY_RESULTS : {
                results: {
                    entries: y.slice(0, E.MAX_COMMAND_AUTOCOMPLETE_RESULTS).map(function(e) {
                        return {
                            command: e,
                            section: null == m ? void 0 : m.find(function(t) {
                                return t.id === e.applicationId
                            })
                        }
                    })
                }
            }
        },
        renderResults: function(e) {
            var t = e.results.entries,
                n = e.selectedIndex,
                r = e.guild,
                o = e.channel,
                i = e.query,
                a = e.options,
                u = e.onHover,
                s = e.onClick;
            return (0, _.renderAutocompleteGroup)({
                query: i,
                selectedIndex: n,
                autocompletes: t,
                onHover: u,
                onClick: s,
                titleWithQuery: m.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: m.default.Messages.COMMANDS,
                Component: a.commands === E.CommandMode.OLD_BUILT_INS ? c.default.Command : c.default.NewCommand,
                getProps: function(e) {
                    var t = e.command,
                        n = e.section;
                    return {
                        key: t.id,
                        command: t,
                        channel: o,
                        guildId: o.guild_id,
                        showImage: !0,
                        section: n
                    }
                },
                getQuery: function(e) {
                    var t = h(e);
                    if ("mention" !== t.type) return e;
                    var n = f.default.getName(null == r ? void 0 : r.id, o.id, t.user);
                    return e.replace(d.BOT_MENTION_COMMAND_REGEX, "@".concat(n))
                },
                key: "commands"
            })
        },
        onSelect: function(e) {
            var t = e.results,
                n = e.index,
                r = e.type,
                o = e.options,
                i = e.channel,
                u = p.default.onSelect({
                    results: t,
                    index: n,
                    type: r,
                    options: o,
                    channel: i,
                    location: a.ApplicationCommandTriggerLocations.SUGGESTION
                });
            return null == u ? null : I(y({}, u), {
                type: E.AutocompleteSelectionTypes.COMMAND_SUGGESTION
            })
        }
    });
    t.default = O
}