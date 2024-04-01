function(e, t, n) {
    "use strict";
    n.r(t), n("757143");
    var i = n("911969"),
        r = n("10718"),
        s = n("367790"),
        a = n("895924"),
        o = n("826298"),
        l = n("695346"),
        u = n("594174"),
        d = n("156361"),
        _ = n("5192"),
        c = n("417574"),
        E = n("877565"),
        I = n("590921"),
        T = n("126226"),
        f = n("689938");

    function S(e) {
        let t = c.PREFIX_COMMAND_REGEX.exec(e);
        if (null != t) return {
            type: "prefix",
            cleanedQuery: e.substring(t[0].length).trim()
        };
        let n = c.BOT_MENTION_COMMAND_REGEX.exec(e);
        if (null != n) {
            let t = n[1],
                i = u.default.getUser(t);
            return null == i || !i.bot || i.isClyde() ? null : {
                type: "mention",
                cleanedQuery: e.substring(n[0].length).trim(),
                user: i
            }
        }
        return null
    }
    let h = {
        ...T.default,
        sentinel: void 0,
        focusMode: I.FocusMode.MANUAL,
        matches(e, t, n, i, r) {
            if (r.commands === I.CommandMode.DISABLED || r.commands === I.CommandMode.OLD_BUILT_INS || n.length < 2 || !l.ShowCommandSuggestions.getSetting()) return !1;
            let s = S(n);
            return null != s && s.cleanedQuery.length > 0
        },
        queryResults(e, t, n, a, u) {
            if (!l.ShowCommandSuggestions.getSetting()) return T.EMPTY_RESULTS;
            let d = S(n);
            if (null == d) return T.EMPTY_RESULTS;
            let _ = (0, o.getCommandQuery)(e, d.cleanedQuery),
                {
                    commands: c,
                    sections: E
                } = r.executeQuery(e, {
                    commandType: i.ApplicationCommandType.CHAT,
                    text: _.text
                }, {
                    limit: I.MAX_COMMAND_AUTOCOMPLETE_RESULTS,
                    placeholderCount: I.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: s.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: u
                });
            if (null == c) return T.EMPTY_RESULTS;
            let f = c;
            if (_.hasSpaceTerminator) {
                let e = _.text.trim(),
                    t = e + " ";
                f = f.filter(n => n.name === e || n.name.startsWith(t))
            }
            return 0 === f.length ? T.EMPTY_RESULTS : {
                results: {
                    entries: f.slice(0, I.MAX_COMMAND_AUTOCOMPLETE_RESULTS).map(e => ({
                        command: e,
                        section: null == E ? void 0 : E.find(t => t.id === e.applicationId)
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
                guild: i,
                channel: r,
                query: s,
                options: a,
                onHover: o,
                onClick: l
            } = e;
            return (0, E.renderAutocompleteGroup)({
                query: s,
                selectedIndex: n,
                autocompletes: t,
                onHover: o,
                onClick: l,
                titleWithQuery: f.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: f.default.Messages.COMMANDS,
                Component: a.commands === I.CommandMode.OLD_BUILT_INS ? d.default.Command : d.default.NewCommand,
                getProps: e => {
                    let {
                        command: t,
                        section: n
                    } = e;
                    return {
                        key: t.id,
                        command: t,
                        channel: r,
                        guildId: r.guild_id,
                        showImage: !0,
                        section: n
                    }
                },
                getQuery: e => {
                    let t = S(e);
                    if ("mention" !== t.type) return e;
                    let n = _.default.getName(null == i ? void 0 : i.id, r.id, t.user);
                    return e.replace(c.BOT_MENTION_COMMAND_REGEX, "@".concat(n))
                },
                key: "commands"
            })
        },
        onSelect(e) {
            let {
                results: t,
                index: n,
                type: i,
                options: r,
                channel: s
            } = e, o = T.default.onSelect({
                results: t,
                index: n,
                type: i,
                options: r,
                channel: s,
                location: a.ApplicationCommandTriggerLocations.SUGGESTION
            });
            return null == o ? null : {
                ...o,
                type: I.AutocompleteSelectionTypes.COMMAND_SUGGESTION
            }
        }
    };
    t.default = h
}