function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("781738");
    var i = n("798609"),
        l = n("240249"),
        a = n("972620"),
        s = n("524768"),
        r = n("355263"),
        o = n("845579"),
        u = n("697218"),
        d = n("501536"),
        c = n("387111"),
        f = n("511104"),
        p = n("200294"),
        m = n("851745"),
        h = n("825871"),
        x = n("782340");

    function E(e) {
        let t = f.PREFIX_COMMAND_REGEX.exec(e);
        if (null != t) return {
            type: "prefix",
            cleanedQuery: e.substring(t[0].length).trim()
        };
        let n = f.BOT_MENTION_COMMAND_REGEX.exec(e);
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
    let y = {
        ...h.default,
        sentinel: void 0,
        focusMode: m.FocusMode.MANUAL,
        matches(e, t, n, i, l) {
            if (l.commands === m.CommandMode.DISABLED || l.commands === m.CommandMode.OLD_BUILT_INS || n.length < 2 || !o.ShowCommandSuggestions.getSetting()) return !1;
            let a = E(n);
            return null != a && a.cleanedQuery.length > 0
        },
        queryResults(e, t, n, s, u) {
            if (!o.ShowCommandSuggestions.getSetting()) return h.EMPTY_RESULTS;
            let d = E(n);
            if (null == d) return h.EMPTY_RESULTS;
            let c = (0, r.getCommandQuery)(e, d.cleanedQuery),
                {
                    commands: f,
                    sections: p
                } = l.executeQuery(e, {
                    commandType: i.ApplicationCommandType.CHAT,
                    text: c.text
                }, {
                    limit: m.MAX_COMMAND_AUTOCOMPLETE_RESULTS,
                    placeholderCount: m.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: a.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: u
                });
            if (null == f) return h.EMPTY_RESULTS;
            let x = f;
            if (c.hasSpaceTerminator) {
                let e = c.text.trim(),
                    t = e + " ";
                x = x.filter(n => n.name === e || n.name.startsWith(t))
            }
            return 0 === x.length ? h.EMPTY_RESULTS : {
                results: {
                    entries: x.slice(0, m.MAX_COMMAND_AUTOCOMPLETE_RESULTS).map(e => ({
                        command: e,
                        section: null == p ? void 0 : p.find(t => t.id === e.applicationId)
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
                channel: l,
                query: a,
                options: s,
                onHover: r,
                onClick: o
            } = e;
            return (0, p.renderAutocompleteGroup)({
                query: a,
                selectedIndex: n,
                autocompletes: t,
                onHover: r,
                onClick: o,
                titleWithQuery: x.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: x.default.Messages.COMMANDS,
                Component: s.commands === m.CommandMode.OLD_BUILT_INS ? d.default.Command : d.default.NewCommand,
                getProps: e => {
                    let {
                        command: t,
                        section: n
                    } = e;
                    return {
                        key: t.id,
                        command: t,
                        channel: l,
                        guildId: l.guild_id,
                        showImage: !0,
                        section: n
                    }
                },
                getQuery: e => {
                    let t = E(e);
                    if ("mention" !== t.type) return e;
                    let n = c.default.getName(null == i ? void 0 : i.id, l.id, t.user);
                    return e.replace(f.BOT_MENTION_COMMAND_REGEX, "@".concat(n))
                },
                key: "commands"
            })
        },
        onSelect(e) {
            let {
                results: t,
                index: n,
                type: i,
                options: l,
                channel: a
            } = e, r = h.default.onSelect({
                results: t,
                index: n,
                type: i,
                options: l,
                channel: a,
                location: s.ApplicationCommandTriggerLocations.SUGGESTION
            });
            return null == r ? null : {
                ...r,
                type: m.AutocompleteSelectionTypes.COMMAND_SUGGESTION
            }
        }
    };
    var g = y
}