function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMPTY_RESULTS: function() {
            return A
        },
        FakeFooter: function() {
            return O
        },
        getLimit: function() {
            return R
        },
        default: function() {
            return L
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("271841"),
        a = n("551042"),
        s = n("798609"),
        r = n("507217"),
        o = n("589777"),
        u = n("988721"),
        d = n("240249"),
        c = n("972620"),
        f = n("166004"),
        p = n("383018"),
        m = n("524768"),
        h = n("389153"),
        x = n("396465"),
        E = n("355263"),
        y = n("957255"),
        g = n("501536"),
        S = n("655518"),
        C = n("200294"),
        I = n("851745"),
        T = n("406291"),
        _ = n("317041"),
        v = n("782340"),
        N = n("826214");
    let A = {
        results: {
            entries: []
        }
    };

    function O() {
        return d.useSearchOpenState(), null
    }

    function M() {
        (0, a.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("496896").then(n.bind(n, "496896"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }

    function R(e) {
        return d.isInIndexExperiment({
            location: e
        }) ? I.MAX_COMMAND_AUTOCOMPLETE_RESULTS : I.MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY
    }
    let k = {
        sentinel: T.COMMAND_SENTINEL,
        stores: [p.default, f.default, u.default, y.default],
        matches: (e, t, n, i, l) => l.commands !== I.CommandMode.DISABLED && null == p.default.getActiveCommand(e.id) && (i || l.commands !== I.CommandMode.OLD_BUILT_INS),
        queryResults(e, t, n, i, l) {
            if (0 === n.length && i.commands !== I.CommandMode.OLD_BUILT_INS) return A;
            let a = R("CommandAutocompletes");
            if (i.commands === I.CommandMode.OLD_BUILT_INS) {
                let i = (0, o.getBuiltInCommands)(s.ApplicationCommandType.CHAT, !1, !1),
                    l = RegExp("^".concat(S.default.escape(n)), "i"),
                    r = (0, h.getMatchingGroupCommands)(i, l, {
                        channel: e,
                        guild: t
                    }, a),
                    u = o.BUILT_IN_SECTIONS[_.BuiltInSectionId.BUILT_IN];
                return 0 === r.length ? A : {
                    results: {
                        entries: r.map(e => ({
                            command: e,
                            section: u
                        }))
                    }
                }
            }
            let r = (0, E.getCommandQuery)(e, n),
                {
                    commands: u,
                    sections: f
                } = d.executeQuery(e, {
                    commandType: s.ApplicationCommandType.CHAT,
                    text: r.text
                }, {
                    limit: a,
                    placeholderCount: I.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: c.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: l
                });
            if (null == u) return A;
            let p = u;
            if (r.hasSpaceTerminator) {
                let e = r.text.trim(),
                    t = e + " ";
                p = p.filter(n => n.name === e || n.name.startsWith(t))
            }
            return 0 === p.length ? A : {
                results: {
                    entries: p.slice(0, a).map(e => ({
                        command: e,
                        section: null == f ? void 0 : f.find(t => t.id === e.applicationId)
                    }))
                }
            }
        },
        renderResults(e) {
            let {
                results: {
                    entries: t
                },
                selectedIndex: n,
                channel: a,
                query: s,
                options: r,
                onHover: o,
                onClick: u
            } = e, c = (0, E.getCommandQuery)(a, s);
            if (r.commands !== I.CommandMode.OLD_BUILT_INS && !d.isInIndexExperiment({
                    location: "CommandAutocompletes"
                })) return (0, i.jsx)(x.default, {
                channel: a,
                query: c.text,
                selectedIndex: n,
                onHover: o,
                onClick: u
            });
            let f = r.commands === I.CommandMode.OLD_BUILT_INS;
            return (0, C.renderAutocompleteGroup)({
                query: c.text,
                selectedIndex: n,
                autocompletes: t,
                onHover: o,
                onClick: u,
                titleWithQuery: v.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: v.default.Messages.COMMANDS,
                getQuery: e => "".concat(T.COMMAND_SENTINEL).concat(e),
                Component: f ? g.default.Command : g.default.NewCommand,
                getProps: e => {
                    let {
                        command: t,
                        section: n
                    } = e;
                    return {
                        key: t.id,
                        command: t,
                        channel: a,
                        guildId: a.guild_id,
                        showImage: !0,
                        section: n
                    }
                },
                key: "commands",
                headerClassName: f ? N.legacyInputCommandHeader : null,
                headerTrailingContent: f ? (0, i.jsx)(l.Button, {
                    type: "button",
                    look: l.Button.Looks.LINK,
                    color: l.Button.Colors.BRAND,
                    size: l.Button.Sizes.MIN,
                    onClick: M,
                    children: v.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE
                }) : null,
                footer: (0, i.jsx)(O, {})
            })
        },
        onSelect(e) {
            let {
                results: {
                    entries: t
                },
                index: n,
                queryText: i,
                options: l,
                channel: a,
                location: s,
                tabOrEnter: o
            } = e, {
                command: u,
                section: d
            } = t[n];
            if (u.inputType === m.ApplicationCommandInputType.PLACEHOLDER) return null;
            if (l.commands === I.CommandMode.OLD_BUILT_INS) l.insertText(function(e) {
                return "".concat(T.COMMAND_SENTINEL).concat(e.name)
            }(u));
            else {
                let e = s;
                null == e && (e = o ? m.ApplicationCommandTriggerLocations.QUERY : m.ApplicationCommandTriggerLocations.DISCOVERY), r.setActiveCommand({
                    channelId: a.id,
                    command: u,
                    section: null != d ? d : null,
                    location: e,
                    queryLength: null == i ? void 0 : i.length
                })
            }
            return {
                type: I.AutocompleteSelectionTypes.COMMAND
            }
        }
    };
    var L = k
}