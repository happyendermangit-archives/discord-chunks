function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("392711"),
        s = n.n(r),
        a = n("788911"),
        o = n("911969"),
        l = n("174212"),
        u = n("998698"),
        d = n("667204"),
        _ = n("156361"),
        c = n("483360"),
        E = n("877565"),
        I = n("590921"),
        T = n("689079"),
        f = n("689938"),
        S = n("395208"),
        h = n("239840");
    let A = {
            results: {
                choices: []
            }
        },
        m = {
            results: {
                choices: [],
                isLoading: !0
            }
        },
        N = Array.from({
            length: 5
        }, () => ({
            name: "",
            displayName: "",
            value: ""
        })),
        p = {
            results: {
                choices: [],
                isError: !0
            }
        },
        O = s().debounce(d.default, T.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, {
            leading: !0,
            trailing: !0
        }),
        R = {
            stores: [u.default, l.default],
            showEmpty: !0,
            matches(e, t, n, i, r) {
                let s = u.default.getActiveOption(e.id);
                return r.commands !== I.CommandMode.DISABLED && null != s && (s.type === o.ApplicationCommandOptionType.BOOLEAN || !!(null == s ? void 0 : s.autocomplete) || (null == s ? void 0 : s.choices) != null && s.choices.length > 0)
            },
            queryResults(e, t, n, i, r) {
                var s;
                let a = u.default.getActiveOption(e.id);
                if (null == a) return A;
                if (a.autocomplete) {
                    if (r) {
                        let r = u.default.getActiveCommand(e.id);
                        O({
                            command: r,
                            optionValues: i.getCommandOptionValues(),
                            context: {
                                channel: e,
                                guild: t,
                                autocomplete: {
                                    name: a.name,
                                    query: n
                                }
                            }
                        })
                    }
                    if (l.default.getLastErrored(e.id)) return p;
                    let s = l.default.getAutocompleteChoices(e.id, a.name, n);
                    return null == s ? m : {
                        results: {
                            choices: s
                        }
                    }
                }
                return {
                    results: c.default.queryChoiceResults({
                        query: n,
                        choices: a.type === o.ApplicationCommandOptionType.BOOLEAN ? T.BOOLEAN_CHOICES : null !== (s = a.choices) && void 0 !== s ? s : []
                    })
                }
            },
            renderResults(e) {
                let {
                    results: {
                        choices: t,
                        isLoading: n,
                        isError: r
                    },
                    selectedIndex: s,
                    query: o,
                    onHover: l,
                    onClick: u
                } = e;
                return r ? (0, i.jsx)(a.default, {
                    message: f.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
                    noResultsImageURL: h,
                    className: S.noAutocompleteResults
                }) : 0 !== t.length || n ? (0, E.renderAutocompleteGroup)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: n ? N : t,
                    onHover: l,
                    onClick: u,
                    titleWithQuery: f.default.Messages.OPTIONS_MATCHING,
                    titleWithoutQuery: f.default.Messages.OPTIONS,
                    Component: n ? _.default.Loading : _.default.Generic,
                    getProps: (e, t) => ({
                        key: t.toString(),
                        text: e.displayName
                    }),
                    getQuery: e => e,
                    key: "choice"
                }) : (0, i.jsx)(a.default, {
                    message: f.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
                    noResultsImageURL: h,
                    className: S.noAutocompleteResults
                })
            },
            onSelect(e) {
                let {
                    results: {
                        choices: t
                    },
                    index: n,
                    options: i
                } = e, r = t[n];
                return i.insertText(function(e) {
                    return e.displayName
                }(r)), {
                    type: I.AutocompleteSelectionTypes.CHOICE
                }
            }
        };
    t.default = R
}