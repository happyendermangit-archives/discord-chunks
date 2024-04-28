function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMPTY_RESULTS: function() {
            return C
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("693789"),
        s = n("952265"),
        a = n("911969"),
        o = n("555573"),
        l = n("254711"),
        u = n("213459"),
        d = n("10718"),
        _ = n("367790"),
        c = n("998698"),
        E = n("895924"),
        I = n("581364"),
        T = n("826298"),
        f = n("496675"),
        S = n("156361"),
        h = n("226951"),
        A = n("877565"),
        m = n("590921"),
        N = n("665692"),
        p = n("689079"),
        O = n("689938"),
        R = n("442630");
    let C = {
        results: {
            entries: []
        }
    };

    function g() {
        (0, s.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("99387"), n.e("87549")]).then(n.bind(n, "913962"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }
    let L = {
        sentinel: N.COMMAND_SENTINEL,
        stores: [c.default, u.default, f.default],
        matches: (e, t, n, i, r) => r.commands !== m.CommandMode.DISABLED && null == c.default.getActiveCommand(e.id) && (i || r.commands !== m.CommandMode.OLD_BUILT_INS),
        queryResults(e, t, n, i, r) {
            if (0 === n.length && i.commands !== m.CommandMode.OLD_BUILT_INS) return C;
            if (i.commands === m.CommandMode.OLD_BUILT_INS) {
                let i = (0, l.getBuiltInCommands)(a.ApplicationCommandType.CHAT, !1, !1),
                    r = RegExp("^".concat(h.default.escape(n)), "i"),
                    s = (0, I.getMatchingGroupCommands)(i, r, {
                        channel: e,
                        guild: t
                    }, m.MAX_COMMAND_AUTOCOMPLETE_RESULTS),
                    o = l.BUILT_IN_SECTIONS[p.BuiltInSectionId.BUILT_IN];
                return 0 === s.length ? C : {
                    results: {
                        entries: s.map(e => ({
                            command: e,
                            section: o
                        }))
                    }
                }
            }
            let s = (0, T.getCommandQuery)(e, n),
                {
                    commands: o,
                    sections: u
                } = d.executeQuery(e, {
                    commandType: a.ApplicationCommandType.CHAT,
                    text: s.text
                }, {
                    limit: m.MAX_COMMAND_AUTOCOMPLETE_RESULTS,
                    placeholderCount: m.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: _.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: r
                });
            if (null == o) return C;
            let c = o;
            if (s.hasSpaceTerminator) {
                let e = s.text.trim(),
                    t = e + " ";
                c = c.filter(n => n.name === e || n.name.startsWith(t))
            }
            return 0 === c.length ? C : {
                results: {
                    entries: c.slice(0, m.MAX_COMMAND_AUTOCOMPLETE_RESULTS).map(e => ({
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
                channel: s,
                query: a,
                options: o,
                onHover: l,
                onClick: u
            } = e, d = (0, T.getCommandQuery)(s, a), _ = o.commands === m.CommandMode.OLD_BUILT_INS;
            return (0, A.renderAutocompleteGroup)({
                query: d.text,
                selectedIndex: n,
                autocompletes: t,
                onHover: l,
                onClick: u,
                titleWithQuery: O.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: O.default.Messages.COMMANDS,
                getQuery: e => "".concat(N.COMMAND_SENTINEL).concat(e),
                Component: _ ? S.default.Command : S.default.NewCommand,
                getProps: e => {
                    let {
                        command: t,
                        section: n
                    } = e;
                    return {
                        key: t.id,
                        command: t,
                        channel: s,
                        guildId: s.guild_id,
                        showImage: !0,
                        section: n
                    }
                },
                key: "commands",
                headerClassName: _ ? R.legacyInputCommandHeader : null,
                headerTrailingContent: _ ? (0, i.jsx)(r.Button, {
                    type: "button",
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.BRAND,
                    size: r.Button.Sizes.MIN,
                    onClick: g,
                    children: O.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE
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
                options: r,
                channel: s,
                location: a,
                tabOrEnter: l
            } = e, {
                command: u,
                section: d
            } = t[n];
            if (u.inputType === E.ApplicationCommandInputType.PLACEHOLDER) return null;
            if (r.commands === m.CommandMode.OLD_BUILT_INS) r.insertText(function(e) {
                return "".concat(N.COMMAND_SENTINEL).concat(e.name)
            }(u));
            else {
                let e = a;
                null == e && (e = l ? E.ApplicationCommandTriggerLocations.QUERY : E.ApplicationCommandTriggerLocations.DISCOVERY), o.setActiveCommand({
                    channelId: s.id,
                    command: u,
                    section: null != d ? d : null,
                    location: e,
                    queryLength: null == i ? void 0 : i.length
                })
            }
            return {
                type: m.AutocompleteSelectionTypes.COMMAND
            }
        }
    };
    t.default = L
}