function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMPTY_RESULTS: function() {
            return y
        },
        FakeFooter: function() {
            return O
        },
        getLimit: function() {
            return M
        },
        default: function() {
            return P
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("271841"),
        a = n("551042"),
        s = n("798609"),
        r = n("507217"),
        o = n("589777"),
        u = n("988721"),
        d = n("240249"),
        c = n("972620"),
        f = n("166004"),
        m = n("383018"),
        p = n("524768"),
        h = n("389153"),
        E = n("396465"),
        g = n("355263"),
        S = n("957255"),
        C = n("501536"),
        T = n("655518"),
        v = n("200294"),
        I = n("851745"),
        _ = n("406291"),
        N = n("317041"),
        A = n("782340"),
        x = n("826214");
    let y = {
        results: {
            entries: []
        }
    };

    function O() {
        return d.useSearchOpenState(), null
    }

    function R() {
        (0, a.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("496896").then(n.bind(n, "496896"));
            return t => (0, l.jsx)(e, {
                ...t
            })
        })
    }

    function M(e) {
        return d.isInIndexExperiment({
            location: e
        }) ? I.MAX_COMMAND_AUTOCOMPLETE_RESULTS : I.MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY
    }
    let L = {
        sentinel: _.COMMAND_SENTINEL,
        stores: [m.default, f.default, u.default, S.default],
        matches: (e, t, n, l, i) => i.commands !== I.CommandMode.DISABLED && null == m.default.getActiveCommand(e.id) && (l || i.commands !== I.CommandMode.OLD_BUILT_INS),
        queryResults(e, t, n, l, i) {
            if (0 === n.length && l.commands !== I.CommandMode.OLD_BUILT_INS) return y;
            let a = M("CommandAutocompletes");
            if (l.commands === I.CommandMode.OLD_BUILT_INS) {
                let l = (0, o.getBuiltInCommands)(s.ApplicationCommandType.CHAT, !1, !1),
                    i = RegExp("^".concat(T.default.escape(n)), "i"),
                    r = (0, h.getMatchingGroupCommands)(l, i, {
                        channel: e,
                        guild: t
                    }, a),
                    u = o.BUILT_IN_SECTIONS[N.BuiltInSectionId.BUILT_IN];
                return 0 === r.length ? y : {
                    results: {
                        entries: r.map(e => ({
                            command: e,
                            section: u
                        }))
                    }
                }
            }
            let r = (0, g.getCommandQuery)(e, n),
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
                    allowFetch: i
                });
            if (null == u) return y;
            let m = u;
            if (r.hasSpaceTerminator) {
                let e = r.text.trim(),
                    t = e + " ";
                m = m.filter(n => n.name === e || n.name.startsWith(t))
            }
            return 0 === m.length ? y : {
                results: {
                    entries: m.slice(0, a).map(e => ({
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
            } = e, c = (0, g.getCommandQuery)(a, s);
            if (r.commands !== I.CommandMode.OLD_BUILT_INS && !d.isInIndexExperiment({
                    location: "CommandAutocompletes"
                })) return (0, l.jsx)(E.default, {
                channel: a,
                query: c.text,
                selectedIndex: n,
                onHover: o,
                onClick: u
            });
            let f = r.commands === I.CommandMode.OLD_BUILT_INS;
            return (0, v.renderAutocompleteGroup)({
                query: c.text,
                selectedIndex: n,
                autocompletes: t,
                onHover: o,
                onClick: u,
                titleWithQuery: A.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: A.default.Messages.COMMANDS,
                getQuery: e => "".concat(_.COMMAND_SENTINEL).concat(e),
                Component: f ? C.default.Command : C.default.NewCommand,
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
                headerClassName: f ? x.legacyInputCommandHeader : null,
                headerTrailingContent: f ? (0, l.jsx)(i.Button, {
                    type: "button",
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.BRAND,
                    size: i.Button.Sizes.MIN,
                    onClick: R,
                    children: A.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE
                }) : null,
                footer: (0, l.jsx)(O, {})
            })
        },
        onSelect(e) {
            let {
                results: {
                    entries: t
                },
                index: n,
                queryText: l,
                options: i,
                channel: a,
                location: s,
                tabOrEnter: o
            } = e, {
                command: u,
                section: d
            } = t[n];
            if (u.inputType === p.ApplicationCommandInputType.PLACEHOLDER) return null;
            if (i.commands === I.CommandMode.OLD_BUILT_INS) i.insertText(function(e) {
                return "".concat(_.COMMAND_SENTINEL).concat(e.name)
            }(u));
            else {
                let e = s;
                null == e && (e = o ? p.ApplicationCommandTriggerLocations.QUERY : p.ApplicationCommandTriggerLocations.DISCOVERY), r.setActiveCommand({
                    channelId: a.id,
                    command: u,
                    section: null != d ? d : null,
                    location: e,
                    queryLength: null == l ? void 0 : l.length
                })
            }
            return {
                type: I.AutocompleteSelectionTypes.COMMAND
            }
        }
    };
    var P = L
}