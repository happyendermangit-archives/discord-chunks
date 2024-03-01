function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("917351"),
        s = n.n(a),
        r = n("77078"),
        o = n("822637"),
        u = n("716241"),
        d = n("383018"),
        c = n("524768"),
        f = n("318981"),
        m = n("501536"),
        p = n("145131"),
        h = n("851745"),
        E = n("406291"),
        g = n("49111"),
        C = n("782340"),
        S = n("804330");
    let T = {
        results: {
            command: null,
            integrations: [],
            isLoading: !1
        }
    };

    function v(e, t, n) {
        var l, i;
        let a;
        return n.commands === h.CommandMode.OLD_BUILT_INS ? (a = t.split(" ")[0].substring(E.COMMAND_SENTINEL.length), t = t.substring((null !== (l = a.length) && void 0 !== l ? l : 0) + E.COMMAND_SENTINEL.length)) : a = null === (i = d.default.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.name, {
            command: a,
            query: t.trim()
        }
    }
    let I = {
        stores: [d.default, f.default],
        matches(e, t, n, l, i) {
            var a;
            return i.commands !== h.CommandMode.DISABLED && (i.commands === h.CommandMode.OLD_BUILT_INS ? n.startsWith(E.COMMAND_SENTINEL + "gif") || n.startsWith(E.COMMAND_SENTINEL + "tenor") : (null === (a = d.default.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === g.ChannelTextAreaIntegrationTypes.GIF && d.default.getOptionStates(e.id).query.hasValue)
        },
        queryResults(e, t, n, l, i) {
            let {
                command: a,
                query: r
            } = v(e, n, l);
            if (null == a) return T;
            let u = s.findKey(g.ChannelTextAreaIntegrations, e => e.command === a);
            i && null != u && r.length > 0 && o.default.search(u, r);
            let d = f.default.getResults(u, r);
            return null == d ? T : {
                results: {
                    command: a,
                    integrations: d.results,
                    isLoading: d.loading
                }
            }
        },
        renderResults(e) {
            let {
                results: {
                    integrations: t,
                    isLoading: n
                },
                selectedIndex: a,
                channel: s,
                query: o,
                options: u,
                onHover: c,
                onClick: f
            } = e, {
                command: E,
                query: T
            } = v(s, o, u);
            if (null == E || 0 === T.length) return null;
            if (n) return (0, l.jsx)(r.Spinner, {
                className: S.spinner,
                type: r.Spinner.Type.SPINNING_CIRCLE
            });
            if (null != t) {
                var I, _;
                let e = !1,
                    n = t.map((t, n) => {
                        if (t.type === g.ChannelTextAreaIntegrationTypes.GIF) {
                            var i, s, r;
                            return e = !0, (0, l.jsx)(m.default.GIFIntegration, {
                                className: S.horizontalAutocomplete,
                                onClick: f,
                                onHover: c,
                                selected: a === n,
                                index: n,
                                width: null !== (i = t.meta.width) && void 0 !== i ? i : 0,
                                height: null !== (s = t.meta.height) && void 0 !== s ? s : 0,
                                src: null !== (r = t.meta.src) && void 0 !== r ? r : "",
                                url: t.meta.url
                            }, "".concat(t.meta.url).concat(t.meta.src))
                        }
                    }),
                    r = u.commands === h.CommandMode.OLD_BUILT_INS ? E : null !== (_ = null === (I = d.default.getActiveCommand(s.id)) || void 0 === I ? void 0 : I.integrationTitle) && void 0 !== _ ? _ : E,
                    o = T.length > 0 && null != r ? C.default.Messages.CONTENT_MATCHING.format({
                        query: T,
                        command: r
                    }) : null != r ? r : E;
                return (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsx)(m.default.Title, {
                        title: o
                    }), e ? (0, l.jsx)(p.default, {
                        className: S.horizontalAutocompletes,
                        children: n
                    }) : n]
                }, "gifs")
            }
        },
        onSelect(e) {
            let {
                results: {
                    command: t,
                    integrations: n
                },
                index: l,
                type: i,
                options: a,
                channel: s
            } = e;
            if (null == t) return {
                type: null
            };
            let r = n[l];
            if (i === h.SelectType.INSERT ? a.replaceText(function(e) {
                    return e.meta.url
                }(r)) : a.sendMessage(function(e) {
                    return e.meta.url
                }(r)), u.default.trackWithMetadata(g.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                    search_type: g.SearchTypes.GIF,
                    index_num: l,
                    source_object: "/".concat(t)
                }), a.commands !== h.CommandMode.OLD_BUILT_INS) {
                let e = d.default.getActiveCommand(s.id);
                (null == e ? void 0 : e.inputType) === c.ApplicationCommandInputType.BUILT_IN_INTEGRATION && u.default.trackWithMetadata(g.AnalyticEvents.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type
                })
            }
            return {
                type: h.AutocompleteSelectionTypes.GIF
            }
        }
    };

    function _(e) {
        return e.meta.url
    }
    var N = I
}