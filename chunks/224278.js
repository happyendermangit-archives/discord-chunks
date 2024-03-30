function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("471559"),
        i = n("587996"),
        a = n("233126"),
        u = n("209610"),
        s = n("941504"),
        l = {
            results: {
                commandOptions: []
            }
        },
        c = {
            stores: [o.default],
            focusMode: u.FocusMode.AUTO_WHEN_FILTERED,
            matches: function(e, t, n, r, i) {
                return !(r || null == o.default.getActiveCommand(e.id) || null != o.default.getActiveOption(e.id))
            },
            queryResults: function(e, t, n, r, i) {
                var a = o.default.getActiveCommand(e.id);
                if ((null == a ? void 0 : a.options) == null) return l;
                var u = o.default.getOptionStates(e.id),
                    s = a.options.filter(function(e) {
                        var t;
                        return e.displayName.startsWith(n) && !(null === (t = u[e.name]) || void 0 === t ? void 0 : t.hasValue)
                    });
                return 0 === s.length ? l : {
                    results: {
                        commandOptions: s
                    }
                }
            },
            renderResults: function(e) {
                var t = e.results.commandOptions,
                    n = e.selectedIndex,
                    o = e.query,
                    u = e.onHover,
                    l = e.onClick,
                    c = [],
                    f = [];
                t.forEach(function(e) {
                    (e.required ? c : f).push(e)
                });
                var d = c.length > 0 ? (0, a.renderAutocompleteGroup)({
                        query: o,
                        selectedIndex: n,
                        autocompletes: c,
                        onHover: u,
                        onClick: l,
                        titleWithQuery: s.default.Messages.REQUIRED_OPTIONS_MATCHING,
                        titleWithoutQuery: s.default.Messages.REQUIRED_OPTIONS,
                        Component: i.default.Generic,
                        getProps: function(e, t) {
                            return {
                                key: t.toString(),
                                text: e.displayName,
                                description: e.displayDescription
                            }
                        },
                        getQuery: function(e) {
                            return e
                        },
                        key: "required-options"
                    }) : null,
                    _ = f.length > 0 ? (0, a.renderAutocompleteGroup)({
                        query: o,
                        selectedIndex: n,
                        autocompletes: f,
                        onHover: u,
                        onClick: l,
                        titleWithQuery: s.default.Messages.OPTIONS_MATCHING,
                        titleWithoutQuery: c.length > 0 ? s.default.Messages.OTHER_OPTIONS : s.default.Messages.OPTIONS,
                        Component: i.default.Generic,
                        getProps: function(e, t) {
                            return {
                                key: t.toString(),
                                text: e.displayName,
                                description: e.displayDescription
                            }
                        },
                        getQuery: function(e) {
                            return e
                        },
                        key: "optional-options",
                        indexOffset: c.length
                    }) : null;
                return r.createElement(r.Fragment, null, d, _)
            },
            onSelect: function(e) {
                var t = e.results.commandOptions,
                    n = e.index,
                    r = e.options,
                    o = t[n];
                return r.insertText(function(e) {
                    return "".concat(e.displayName, ":")
                }(o)), {
                    type: u.AutocompleteSelectionTypes.COMMAND_OPTION
                }
            }
        };
    t.default = c
}