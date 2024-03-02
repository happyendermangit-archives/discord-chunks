function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("917351"),
        a = n.n(i),
        s = n("96386"),
        r = n("798609"),
        o = n("246598"),
        u = n("383018"),
        d = n("916565"),
        c = n("501536"),
        f = n("25292"),
        m = n("200294"),
        p = n("851745"),
        h = n("317041"),
        E = n("782340"),
        g = n("92810"),
        C = n("327769");
    let S = {
            results: {
                choices: []
            }
        },
        T = {
            results: {
                choices: [],
                isLoading: !0
            }
        },
        I = Array.from({
            length: 5
        }, () => ({
            name: "",
            displayName: "",
            value: ""
        })),
        v = {
            results: {
                choices: [],
                isError: !0
            }
        },
        _ = a.debounce(d.default, h.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, {
            leading: !0,
            trailing: !0
        }),
        N = {
            stores: [u.default, o.default],
            showEmpty: !0,
            matches(e, t, n, l, i) {
                let a = u.default.getActiveOption(e.id);
                return i.commands !== p.CommandMode.DISABLED && null != a && (a.type === r.ApplicationCommandOptionType.BOOLEAN || !!(null == a ? void 0 : a.autocomplete) || (null == a ? void 0 : a.choices) != null && a.choices.length > 0)
            },
            queryResults(e, t, n, l, i) {
                var a;
                let s = u.default.getActiveOption(e.id);
                if (null == s) return S;
                if (s.autocomplete) {
                    if (i) {
                        let i = u.default.getActiveCommand(e.id),
                            a = l.getCommandOptionValues();
                        _({
                            command: i,
                            optionValues: a,
                            context: {
                                channel: e,
                                guild: t,
                                autocomplete: {
                                    name: s.name,
                                    query: n
                                }
                            }
                        })
                    }
                    let a = o.default.getLastErrored(e.id);
                    if (a) return v;
                    let r = o.default.getAutocompleteChoices(e.id, s.name, n);
                    return null == r ? T : {
                        results: {
                            choices: r
                        }
                    }
                }
                let d = f.default.queryChoiceResults({
                    query: n,
                    choices: s.type === r.ApplicationCommandOptionType.BOOLEAN ? h.BOOLEAN_CHOICES : null !== (a = s.choices) && void 0 !== a ? a : []
                });
                return {
                    results: d
                }
            },
            renderResults(e) {
                let {
                    results: {
                        choices: t,
                        isLoading: n,
                        isError: i
                    },
                    selectedIndex: a,
                    query: r,
                    onHover: o,
                    onClick: u
                } = e;
                return i ? (0, l.jsx)(s.default, {
                    message: E.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
                    noResultsImageURL: C,
                    className: g.noAutocompleteResults
                }) : 0 !== t.length || n ? (0, m.renderAutocompleteGroup)({
                    query: r,
                    selectedIndex: a,
                    autocompletes: n ? I : t,
                    onHover: o,
                    onClick: u,
                    titleWithQuery: E.default.Messages.OPTIONS_MATCHING,
                    titleWithoutQuery: E.default.Messages.OPTIONS,
                    Component: n ? c.default.Loading : c.default.Generic,
                    getProps: (e, t) => ({
                        key: t.toString(),
                        text: e.displayName
                    }),
                    getQuery: e => e,
                    key: "choice"
                }) : (0, l.jsx)(s.default, {
                    message: E.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
                    noResultsImageURL: C,
                    className: g.noAutocompleteResults
                })
            },
            onSelect(e) {
                let {
                    results: {
                        choices: t
                    },
                    index: n,
                    options: l
                } = e, i = t[n];
                return l.insertText(function(e) {
                    return e.displayName
                }(i)), {
                    type: p.AutocompleteSelectionTypes.CHOICE
                }
            }
        };
    var A = N
}