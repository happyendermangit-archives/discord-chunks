function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var i = n("735250");
    n("470079");
    var r = n("998698"),
        a = n("156361"),
        s = n("877565"),
        o = n("590921"),
        l = n("689938");
    let u = {
            results: {
                commandOptions: []
            }
        },
        d = {
            stores: [r.default],
            focusMode: o.FocusMode.AUTO_WHEN_FILTERED,
            matches: (e, t, n, i, a) => !(i || null == r.default.getActiveCommand(e.id) || null != r.default.getActiveOption(e.id)),
            queryResults(e, t, n, i, a) {
                let s = r.default.getActiveCommand(e.id);
                if ((null == s ? void 0 : s.options) == null) return u;
                let o = r.default.getOptionStates(e.id),
                    l = s.options.filter(e => {
                        var t;
                        return e.displayName.startsWith(n) && !(null === (t = o[e.name]) || void 0 === t ? void 0 : t.hasValue)
                    });
                return 0 === l.length ? u : {
                    results: {
                        commandOptions: l
                    }
                }
            },
            renderResults(e) {
                let {
                    results: {
                        commandOptions: t
                    },
                    selectedIndex: n,
                    query: r,
                    onHover: o,
                    onClick: u
                } = e, d = [], _ = [];
                t.forEach(e => {
                    (e.required ? d : _).push(e)
                });
                let c = d.length > 0 ? (0, s.renderAutocompleteGroup)({
                        query: r,
                        selectedIndex: n,
                        autocompletes: d,
                        onHover: o,
                        onClick: u,
                        titleWithQuery: l.default.Messages.REQUIRED_OPTIONS_MATCHING,
                        titleWithoutQuery: l.default.Messages.REQUIRED_OPTIONS,
                        Component: a.default.Generic,
                        getProps: (e, t) => ({
                            key: t.toString(),
                            text: e.displayName,
                            description: e.displayDescription
                        }),
                        getQuery: e => e,
                        key: "required-options"
                    }) : null,
                    E = _.length > 0 ? (0, s.renderAutocompleteGroup)({
                        query: r,
                        selectedIndex: n,
                        autocompletes: _,
                        onHover: o,
                        onClick: u,
                        titleWithQuery: l.default.Messages.OPTIONS_MATCHING,
                        titleWithoutQuery: d.length > 0 ? l.default.Messages.OTHER_OPTIONS : l.default.Messages.OPTIONS,
                        Component: a.default.Generic,
                        getProps: (e, t) => ({
                            key: t.toString(),
                            text: e.displayName,
                            description: e.displayDescription
                        }),
                        getQuery: e => e,
                        key: "optional-options",
                        indexOffset: d.length
                    }) : null;
                return (0, i.jsxs)(i.Fragment, {
                    children: [c, E]
                })
            },
            onSelect(e) {
                let {
                    results: {
                        commandOptions: t
                    },
                    index: n,
                    options: i
                } = e, r = t[n];
                return i.insertText(function(e) {
                    return "".concat(e.displayName, ":")
                }(r)), {
                    type: o.AutocompleteSelectionTypes.COMMAND_OPTION
                }
            }
        };
    t.default = d
}