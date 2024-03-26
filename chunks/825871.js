function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMPTY_RESULTS: function() {
            return v
        },
        default: function() {
            return R
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
        f = n("383018"),
        p = n("524768"),
        m = n("389153"),
        h = n("355263"),
        x = n("957255"),
        E = n("501536"),
        y = n("655518"),
        g = n("200294"),
        S = n("851745"),
        C = n("406291"),
        _ = n("317041"),
        T = n("782340"),
        I = n("826214");
    let v = {
        results: {
            entries: []
        }
    };

    function N() {
        (0, a.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("496896").then(n.bind(n, "496896"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }
    let A = {
        sentinel: C.COMMAND_SENTINEL,
        stores: [f.default, u.default, x.default],
        matches: (e, t, n, i, l) => l.commands !== S.CommandMode.DISABLED && null == f.default.getActiveCommand(e.id) && (i || l.commands !== S.CommandMode.OLD_BUILT_INS),
        queryResults(e, t, n, i, l) {
            if (0 === n.length && i.commands !== S.CommandMode.OLD_BUILT_INS) return v;
            if (i.commands === S.CommandMode.OLD_BUILT_INS) {
                let i = (0, o.getBuiltInCommands)(s.ApplicationCommandType.CHAT, !1, !1),
                    l = RegExp("^".concat(y.default.escape(n)), "i"),
                    a = (0, m.getMatchingGroupCommands)(i, l, {
                        channel: e,
                        guild: t
                    }, S.MAX_COMMAND_AUTOCOMPLETE_RESULTS),
                    r = o.BUILT_IN_SECTIONS[_.BuiltInSectionId.BUILT_IN];
                return 0 === a.length ? v : {
                    results: {
                        entries: a.map(e => ({
                            command: e,
                            section: r
                        }))
                    }
                }
            }
            let a = (0, h.getCommandQuery)(e, n),
                {
                    commands: r,
                    sections: u
                } = d.executeQuery(e, {
                    commandType: s.ApplicationCommandType.CHAT,
                    text: a.text
                }, {
                    limit: S.MAX_COMMAND_AUTOCOMPLETE_RESULTS,
                    placeholderCount: S.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: c.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: l
                });
            if (null == r) return v;
            let f = r;
            if (a.hasSpaceTerminator) {
                let e = a.text.trim(),
                    t = e + " ";
                f = f.filter(n => n.name === e || n.name.startsWith(t))
            }
            return 0 === f.length ? v : {
                results: {
                    entries: f.slice(0, S.MAX_COMMAND_AUTOCOMPLETE_RESULTS).map(e => ({
                        command: e,
                        section: null == u ? void 0 : u.find(t => t.id === e.applicationId)
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
            } = e, d = (0, h.getCommandQuery)(a, s), c = r.commands === S.CommandMode.OLD_BUILT_INS;
            return (0, g.renderAutocompleteGroup)({
                query: d.text,
                selectedIndex: n,
                autocompletes: t,
                onHover: o,
                onClick: u,
                titleWithQuery: T.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: T.default.Messages.COMMANDS,
                getQuery: e => "".concat(C.COMMAND_SENTINEL).concat(e),
                Component: c ? E.default.Command : E.default.NewCommand,
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
                headerClassName: c ? I.legacyInputCommandHeader : null,
                headerTrailingContent: c ? (0, i.jsx)(l.Button, {
                    type: "button",
                    look: l.Button.Looks.LINK,
                    color: l.Button.Colors.BRAND,
                    size: l.Button.Sizes.MIN,
                    onClick: N,
                    children: T.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE
                }) : null
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
            if (u.inputType === p.ApplicationCommandInputType.PLACEHOLDER) return null;
            if (l.commands === S.CommandMode.OLD_BUILT_INS) l.insertText(function(e) {
                return "".concat(C.COMMAND_SENTINEL).concat(e.name)
            }(u));
            else {
                let e = s;
                null == e && (e = o ? p.ApplicationCommandTriggerLocations.QUERY : p.ApplicationCommandTriggerLocations.DISCOVERY), r.setActiveCommand({
                    channelId: a.id,
                    command: u,
                    section: null != d ? d : null,
                    location: e,
                    queryLength: null == i ? void 0 : i.length
                })
            }
            return {
                type: S.AutocompleteSelectionTypes.COMMAND
            }
        }
    };
    var R = A
}