function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("917351"),
        a = n.n(l),
        s = n("96386"),
        r = n("798609"),
        o = n("246598"),
        u = n("383018"),
        d = n("916565"),
        c = n("501536"),
        f = n("25292"),
        p = n("200294"),
        m = n("851745"),
        h = n("317041"),
        x = n("782340"),
        E = n("92810"),
        y = n("327769");
    let g = {
            results: {
                choices: []
            }
        },
        S = {
            results: {
                choices: [],
                isLoading: !0
            }
        },
        C = Array.from({
            length: 5
        }, () => ({
            name: "",
            displayName: "",
            value: ""
        })),
        _ = {
            results: {
                choices: [],
                isError: !0
            }
        },
        I = a.debounce(d.default, h.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, {
            leading: !0,
            trailing: !0
        }),
        T = {
            stores: [u.default, o.default],
            showEmpty: !0,
            matches(e, t, n, i, l) {
                let a = u.default.getActiveOption(e.id);
                return l.commands !== m.CommandMode.DISABLED && null != a && (a.type === r.ApplicationCommandOptionType.BOOLEAN || !!(null == a ? void 0 : a.autocomplete) || (null == a ? void 0 : a.choices) != null && a.choices.length > 0)
            },
            queryResults(e, t, n, i, l) {
                var a;
                let s = u.default.getActiveOption(e.id);
                if (null == s) return g;
                if (s.autocomplete) {
                    if (l) {
                        let l = u.default.getActiveCommand(e.id),
                            a = i.getCommandOptionValues();
                        I({
                            command: l,
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
                    if (a) return _;
                    let r = o.default.getAutocompleteChoices(e.id, s.name, n);
                    return null == r ? S : {
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
                        isError: l
                    },
                    selectedIndex: a,
                    query: r,
                    onHover: o,
                    onClick: u
                } = e;
                return l ? (0, i.jsx)(s.default, {
                    message: x.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
                    noResultsImageURL: y,
                    className: E.noAutocompleteResults
                }) : 0 !== t.length || n ? (0, p.renderAutocompleteGroup)({
                    query: r,
                    selectedIndex: a,
                    autocompletes: n ? C : t,
                    onHover: o,
                    onClick: u,
                    titleWithQuery: x.default.Messages.OPTIONS_MATCHING,
                    titleWithoutQuery: x.default.Messages.OPTIONS,
                    Component: n ? c.default.Loading : c.default.Generic,
                    getProps: (e, t) => ({
                        key: t.toString(),
                        text: e.displayName
                    }),
                    getQuery: e => e,
                    key: "choice"
                }) : (0, i.jsx)(s.default, {
                    message: x.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
                    noResultsImageURL: y,
                    className: E.noAutocompleteResults
                })
            },
            onSelect(e) {
                let {
                    results: {
                        choices: t
                    },
                    index: n,
                    options: i
                } = e, l = t[n];
                return i.insertText(function(e) {
                    return e.displayName
                }(l)), {
                    type: m.AutocompleteSelectionTypes.CHOICE
                }
            }
        };
    var v = T
}