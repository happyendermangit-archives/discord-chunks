function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMPTY_RESULTS: function() {
            return b
        }
    });
    var r = n("470079"),
        o = n("608036"),
        i = n("67381"),
        a = n("29570"),
        u = n("503113"),
        s = n("591439"),
        l = n("455866"),
        c = n("292206"),
        f = n("705737"),
        d = n("471559"),
        _ = n("861272"),
        E = n("653754"),
        p = n("960201"),
        m = n("29884"),
        y = n("587996"),
        I = n("949011"),
        h = n("233126"),
        O = n("209610"),
        T = n("407048"),
        S = n("118891"),
        v = n("941504"),
        g = n("157304");

    function A(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var b = {
        results: {
            entries: []
        }
    };

    function N() {
        var e;
        (0, i.openModalLazy)((e = function() {
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
                        return [4, Promise.all([n.e("99387"), n.e("47684")]).then(n.bind(n, "776612"))];
                    case 1:
                        return e = t.sent().default, [2, function(t) {
                            return r.createElement(e, t)
                        }]
                }
            })
        }, function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    A(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    A(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }))
    }
    var R = {
        sentinel: T.COMMAND_SENTINEL,
        stores: [d.default, l.default, m.default],
        matches: function(e, t, n, r, o) {
            return o.commands !== O.CommandMode.DISABLED && null == d.default.getActiveCommand(e.id) && (r || o.commands !== O.CommandMode.OLD_BUILT_INS)
        },
        queryResults: function(e, t, n, r, o) {
            if (0 === n.length && r.commands !== O.CommandMode.OLD_BUILT_INS) return b;
            if (r.commands === O.CommandMode.OLD_BUILT_INS) {
                var i = (0, s.getBuiltInCommands)(a.ApplicationCommandType.CHAT, !1, !1),
                    u = RegExp("^".concat(I.default.escape(n)), "i"),
                    l = (0, E.getMatchingGroupCommands)(i, u, {
                        channel: e,
                        guild: t
                    }, O.MAX_COMMAND_AUTOCOMPLETE_RESULTS),
                    d = s.BUILT_IN_SECTIONS[S.BuiltInSectionId.BUILT_IN];
                return 0 === l.length ? b : {
                    results: {
                        entries: l.map(function(e) {
                            return {
                                command: e,
                                section: d
                            }
                        })
                    }
                }
            }
            var _ = (0, p.getCommandQuery)(e, n),
                m = c.executeQuery(e, {
                    commandType: a.ApplicationCommandType.CHAT,
                    text: _.text
                }, {
                    limit: O.MAX_COMMAND_AUTOCOMPLETE_RESULTS,
                    placeholderCount: O.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: f.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: o
                }),
                y = m.commands,
                h = m.sections;
            if (null == y) return b;
            var T = y;
            if (_.hasSpaceTerminator) {
                var v = _.text.trim(),
                    g = v + " ";
                T = T.filter(function(e) {
                    return e.name === v || e.name.startsWith(g)
                })
            }
            return 0 === T.length ? b : {
                results: {
                    entries: T.slice(0, O.MAX_COMMAND_AUTOCOMPLETE_RESULTS).map(function(e) {
                        return {
                            command: e,
                            section: null == h ? void 0 : h.find(function(t) {
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
                i = e.channel,
                a = e.query,
                u = e.options,
                s = e.onHover,
                l = e.onClick,
                c = (0, p.getCommandQuery)(i, a),
                f = u.commands === O.CommandMode.OLD_BUILT_INS;
            return (0, h.renderAutocompleteGroup)({
                query: c.text,
                selectedIndex: n,
                autocompletes: t,
                onHover: s,
                onClick: l,
                titleWithQuery: v.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: v.default.Messages.COMMANDS,
                getQuery: function(e) {
                    return "".concat(T.COMMAND_SENTINEL).concat(e)
                },
                Component: f ? y.default.Command : y.default.NewCommand,
                getProps: function(e) {
                    var t = e.command,
                        n = e.section;
                    return {
                        key: t.id,
                        command: t,
                        channel: i,
                        guildId: i.guild_id,
                        showImage: !0,
                        section: n
                    }
                },
                key: "commands",
                headerClassName: f ? g.legacyInputCommandHeader : null,
                headerTrailingContent: f ? r.createElement(o.Button, {
                    type: "button",
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.MIN,
                    onClick: N
                }, v.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE) : null
            })
        },
        onSelect: function(e) {
            var t = e.results.entries,
                n = e.index,
                r = e.queryText,
                o = e.options,
                i = e.channel,
                a = e.location,
                s = e.tabOrEnter,
                l = t[n],
                c = l.command,
                f = l.section;
            if (c.inputType === _.ApplicationCommandInputType.PLACEHOLDER) return null;
            if (o.commands === O.CommandMode.OLD_BUILT_INS) o.insertText(function(e) {
                return "".concat(T.COMMAND_SENTINEL).concat(e.name)
            }(c));
            else {
                var d = a;
                null == d && (d = s ? _.ApplicationCommandTriggerLocations.QUERY : _.ApplicationCommandTriggerLocations.DISCOVERY), u.setActiveCommand({
                    channelId: i.id,
                    command: c,
                    section: null != f ? f : null,
                    location: d,
                    queryLength: null == r ? void 0 : r.length
                })
            }
            return {
                type: O.AutocompleteSelectionTypes.COMMAND
            }
        }
    };
    t.default = R
}