function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("781738");
    var i = n("37983");
    n("884691");
    var l = n("798609"),
        a = n("240249"),
        s = n("972620"),
        r = n("524768"),
        o = n("355263"),
        u = n("845579"),
        d = n("697218"),
        c = n("501536"),
        f = n("387111"),
        p = n("511104"),
        m = n("200294"),
        h = n("851745"),
        x = n("825871"),
        E = n("782340");

    function y(e) {
        let t = p.PREFIX_COMMAND_REGEX.exec(e);
        if (null != t) return {
            type: "prefix",
            cleanedQuery: e.substring(t[0].length).trim()
        };
        let n = p.BOT_MENTION_COMMAND_REGEX.exec(e);
        if (null != n) {
            let t = n[1],
                i = d.default.getUser(t);
            return null == i || !i.bot || i.isClyde() ? null : {
                type: "mention",
                cleanedQuery: e.substring(n[0].length).trim(),
                user: i
            }
        }
        return null
    }
    let g = {
        ...x.default,
        sentinel: void 0,
        focusMode: h.FocusMode.MANUAL,
        matches(e, t, n, i, l) {
            if (l.commands === h.CommandMode.DISABLED || l.commands === h.CommandMode.OLD_BUILT_INS || n.length < 2 || !u.ShowCommandSuggestions.getSetting()) return !1;
            let a = y(n);
            return null != a && a.cleanedQuery.length > 0
        },
        queryResults(e, t, n, i, r) {
            if (!u.ShowCommandSuggestions.getSetting()) return x.EMPTY_RESULTS;
            let d = y(n);
            if (null == d) return x.EMPTY_RESULTS;
            let c = (0, x.getLimit)("LegacyCommandAutocompletes"),
                f = (0, o.getCommandQuery)(e, d.cleanedQuery),
                {
                    commands: p,
                    sections: m
                } = a.executeQuery(e, {
                    commandType: l.ApplicationCommandType.CHAT,
                    text: f.text
                }, {
                    limit: c,
                    placeholderCount: h.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: s.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: r
                });
            if (null == p) return x.EMPTY_RESULTS;
            let E = p;
            if (f.hasSpaceTerminator) {
                let e = f.text.trim(),
                    t = e + " ";
                E = E.filter(n => n.name === e || n.name.startsWith(t))
            }
            return 0 === E.length ? x.EMPTY_RESULTS : {
                results: {
                    entries: E.slice(0, c).map(e => ({
                        command: e,
                        section: null == m ? void 0 : m.find(t => t.id === e.applicationId)
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
                guild: l,
                channel: a,
                query: s,
                options: r,
                onHover: o,
                onClick: u
            } = e;
            return (0, m.renderAutocompleteGroup)({
                query: s,
                selectedIndex: n,
                autocompletes: t,
                onHover: o,
                onClick: u,
                titleWithQuery: E.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: E.default.Messages.COMMANDS,
                Component: r.commands === h.CommandMode.OLD_BUILT_INS ? c.default.Command : c.default.NewCommand,
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
                getQuery: e => {
                    let t = y(e);
                    if ("mention" !== t.type) return e;
                    let n = f.default.getName(null == l ? void 0 : l.id, a.id, t.user);
                    return e.replace(p.BOT_MENTION_COMMAND_REGEX, "@".concat(n))
                },
                key: "commands",
                footer: (0, i.jsx)(x.FakeFooter, {})
            })
        },
        onSelect(e) {
            let {
                results: t,
                index: n,
                type: i,
                options: l,
                channel: a
            } = e, s = x.default.onSelect({
                results: t,
                index: n,
                type: i,
                options: l,
                channel: a,
                location: r.ApplicationCommandTriggerLocations.SUGGESTION
            });
            return null == s ? null : {
                ...s,
                type: h.AutocompleteSelectionTypes.COMMAND_SUGGESTION
            }
        }
    };
    var S = g
}