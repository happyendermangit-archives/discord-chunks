function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("781738");
    var l = n("37983");
    n("884691");
    var i = n("798609"),
        a = n("240249"),
        s = n("972620"),
        r = n("524768"),
        o = n("355263"),
        u = n("845579"),
        d = n("697218"),
        c = n("501536"),
        f = n("387111"),
        m = n("511104"),
        p = n("200294"),
        h = n("851745"),
        E = n("825871"),
        g = n("782340");

    function C(e) {
        let t = m.PREFIX_COMMAND_REGEX.exec(e);
        if (null != t) return {
            type: "prefix",
            cleanedQuery: e.substring(t[0].length).trim()
        };
        let n = m.BOT_MENTION_COMMAND_REGEX.exec(e);
        if (null != n) {
            let t = n[1],
                l = d.default.getUser(t);
            return null == l || !l.bot || l.isClyde() ? null : {
                type: "mention",
                cleanedQuery: e.substring(n[0].length).trim(),
                user: l
            }
        }
        return null
    }
    let S = {
        ...E.default,
        sentinel: void 0,
        focusMode: h.FocusMode.MANUAL,
        matches(e, t, n, l, i) {
            if (i.commands === h.CommandMode.DISABLED || i.commands === h.CommandMode.OLD_BUILT_INS || n.length < 2 || !u.ShowCommandSuggestions.getSetting()) return !1;
            let a = C(n);
            return null != a && a.cleanedQuery.length > 0
        },
        queryResults(e, t, n, l, r) {
            if (!u.ShowCommandSuggestions.getSetting()) return E.EMPTY_RESULTS;
            let d = C(n);
            if (null == d) return E.EMPTY_RESULTS;
            let c = (0, E.getLimit)("LegacyCommandAutocompletes"),
                f = (0, o.getCommandQuery)(e, d.cleanedQuery),
                {
                    commands: m,
                    sections: p
                } = a.executeQuery(e, {
                    commandType: i.ApplicationCommandType.CHAT,
                    text: f.text
                }, {
                    limit: c,
                    placeholderCount: h.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: s.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: r
                });
            if (null == m) return E.EMPTY_RESULTS;
            let g = m;
            if (f.hasSpaceTerminator) {
                let e = f.text.trim(),
                    t = e + " ";
                g = g.filter(n => n.name === e || n.name.startsWith(t))
            }
            return 0 === g.length ? E.EMPTY_RESULTS : {
                results: {
                    entries: g.slice(0, c).map(e => ({
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
                channel: a,
                query: s,
                options: r,
                onHover: o,
                onClick: u
            } = e;
            return (0, p.renderAutocompleteGroup)({
                query: s,
                selectedIndex: n,
                autocompletes: t,
                onHover: o,
                onClick: u,
                titleWithQuery: g.default.Messages.COMMANDS_MATCHING,
                titleWithoutQuery: g.default.Messages.COMMANDS,
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
                    let t = C(e);
                    if ("mention" !== t.type) return e;
                    let n = f.default.getName(null == i ? void 0 : i.id, a.id, t.user);
                    return e.replace(m.BOT_MENTION_COMMAND_REGEX, "@".concat(n))
                },
                key: "commands",
                footer: (0, l.jsx)(E.FakeFooter, {})
            })
        },
        onSelect(e) {
            let {
                results: t,
                index: n,
                type: l,
                options: i,
                channel: a
            } = e, s = E.default.onSelect({
                results: t,
                index: n,
                type: l,
                options: i,
                channel: a,
                location: r.ApplicationCommandTriggerLocations.SUGGESTION
            });
            return null == s ? null : {
                ...s,
                type: h.AutocompleteSelectionTypes.COMMAND_SUGGESTION
            }
        }
    };
    var T = S
}