function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("424973");
    var i = n("37983");
    n("884691");
    var l = n("383018"),
        a = n("501536"),
        s = n("200294"),
        r = n("851745"),
        o = n("782340");
    let u = {
            results: {
                commandOptions: []
            }
        },
        d = {
            stores: [l.default],
            focusMode: r.FocusMode.AUTO_WHEN_FILTERED,
            matches: (e, t, n, i, a) => !(i || null == l.default.getActiveCommand(e.id) || null != l.default.getActiveOption(e.id)),
            queryResults(e, t, n, i, a) {
                let s = l.default.getActiveCommand(e.id);
                if ((null == s ? void 0 : s.options) == null) return u;
                let r = l.default.getOptionStates(e.id),
                    o = s.options.filter(e => {
                        var t;
                        return e.displayName.startsWith(n) && !(null === (t = r[e.name]) || void 0 === t ? void 0 : t.hasValue)
                    });
                return 0 === o.length ? u : {
                    results: {
                        commandOptions: o
                    }
                }
            },
            renderResults(e) {
                let {
                    results: {
                        commandOptions: t
                    },
                    selectedIndex: n,
                    query: l,
                    onHover: r,
                    onClick: u
                } = e, d = [], c = [];
                t.forEach(e => {
                    (e.required ? d : c).push(e)
                });
                let f = d.length > 0 ? (0, s.renderAutocompleteGroup)({
                        query: l,
                        selectedIndex: n,
                        autocompletes: d,
                        onHover: r,
                        onClick: u,
                        titleWithQuery: o.default.Messages.REQUIRED_OPTIONS_MATCHING,
                        titleWithoutQuery: o.default.Messages.REQUIRED_OPTIONS,
                        Component: a.default.Generic,
                        getProps: (e, t) => ({
                            key: t.toString(),
                            text: e.displayName,
                            description: e.displayDescription
                        }),
                        getQuery: e => e,
                        key: "required-options"
                    }) : null,
                    p = c.length > 0 ? (0, s.renderAutocompleteGroup)({
                        query: l,
                        selectedIndex: n,
                        autocompletes: c,
                        onHover: r,
                        onClick: u,
                        titleWithQuery: o.default.Messages.OPTIONS_MATCHING,
                        titleWithoutQuery: d.length > 0 ? o.default.Messages.OTHER_OPTIONS : o.default.Messages.OPTIONS,
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
                    children: [f, p]
                })
            },
            onSelect(e) {
                let {
                    results: {
                        commandOptions: t
                    },
                    index: n,
                    options: i
                } = e, l = t[n];
                return i.insertText(function(e) {
                    return "".concat(e.displayName, ":")
                }(l)), {
                    type: r.AutocompleteSelectionTypes.COMMAND_OPTION
                }
            }
        };
    var c = d
}