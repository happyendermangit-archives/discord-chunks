function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("751007"),
        u = n("29570"),
        s = n("314653"),
        l = n("471559"),
        c = n("65161"),
        f = n("587996"),
        d = n("378309"),
        _ = n("233126"),
        E = n("209610"),
        p = n("118891"),
        m = n("941504"),
        y = n("733243"),
        I = n("239840"),
        h = {
            results: {
                choices: []
            }
        },
        O = {
            results: {
                choices: [],
                isLoading: !0
            }
        },
        T = Array.from({
            length: 5
        }, function() {
            return {
                name: "",
                displayName: "",
                value: ""
            }
        }),
        S = {
            results: {
                choices: [],
                isError: !0
            }
        },
        v = i().debounce(c.default, p.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, {
            leading: !0,
            trailing: !0
        }),
        g = {
            stores: [l.default, s.default],
            showEmpty: !0,
            matches: function(e, t, n, r, o) {
                var i = l.default.getActiveOption(e.id);
                return o.commands !== E.CommandMode.DISABLED && null != i && (i.type === u.ApplicationCommandOptionType.BOOLEAN || !!(null == i ? void 0 : i.autocomplete) || (null == i ? void 0 : i.choices) != null && i.choices.length > 0)
            },
            queryResults: function(e, t, n, r, o) {
                var i, a = l.default.getActiveOption(e.id);
                if (null == a) return h;
                if (a.autocomplete) {
                    if (o && v({
                            command: l.default.getActiveCommand(e.id),
                            optionValues: r.getCommandOptionValues(),
                            context: {
                                channel: e,
                                guild: t,
                                autocomplete: {
                                    name: a.name,
                                    query: n
                                }
                            }
                        }), s.default.getLastErrored(e.id)) return S;
                    var c = s.default.getAutocompleteChoices(e.id, a.name, n);
                    return null == c ? O : {
                        results: {
                            choices: c
                        }
                    }
                }
                return {
                    results: d.default.queryChoiceResults({
                        query: n,
                        choices: a.type === u.ApplicationCommandOptionType.BOOLEAN ? p.BOOLEAN_CHOICES : null !== (i = a.choices) && void 0 !== i ? i : []
                    })
                }
            },
            renderResults: function(e) {
                var t = e.results,
                    n = t.choices,
                    o = t.isLoading,
                    i = t.isError,
                    u = e.selectedIndex,
                    s = e.query,
                    l = e.onHover,
                    c = e.onClick;
                return i ? r.createElement(a.default, {
                    message: m.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
                    noResultsImageURL: I,
                    className: y.noAutocompleteResults
                }) : 0 !== n.length || o ? (0, _.renderAutocompleteGroup)({
                    query: s,
                    selectedIndex: u,
                    autocompletes: o ? T : n,
                    onHover: l,
                    onClick: c,
                    titleWithQuery: m.default.Messages.OPTIONS_MATCHING,
                    titleWithoutQuery: m.default.Messages.OPTIONS,
                    Component: o ? f.default.Loading : f.default.Generic,
                    getProps: function(e, t) {
                        return {
                            key: t.toString(),
                            text: e.displayName
                        }
                    },
                    getQuery: function(e) {
                        return e
                    },
                    key: "choice"
                }) : r.createElement(a.default, {
                    message: m.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
                    noResultsImageURL: I,
                    className: y.noAutocompleteResults
                })
            },
            onSelect: function(e) {
                var t = e.results.choices,
                    n = e.index,
                    r = e.options,
                    o = t[n];
                return r.insertText(function(e) {
                    return e.displayName
                }(o)), {
                    type: E.AutocompleteSelectionTypes.CHOICE
                }
            }
        };
    t.default = g
}