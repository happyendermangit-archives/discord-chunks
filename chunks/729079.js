function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("917351"),
        s = n.n(a),
        r = n("77078"),
        o = n("822637"),
        u = n("716241"),
        d = n("383018"),
        c = n("524768"),
        f = n("318981"),
        p = n("501536"),
        m = n("145131"),
        h = n("851745"),
        x = n("406291"),
        E = n("49111"),
        y = n("782340"),
        g = n("804330");
    let S = {
        results: {
            command: null,
            integrations: [],
            isLoading: !1
        }
    };

    function C(e, t, n) {
        var i, l;
        let a;
        return n.commands === h.CommandMode.OLD_BUILT_INS ? (a = t.split(" ")[0].substring(x.COMMAND_SENTINEL.length), t = t.substring((null !== (i = a.length) && void 0 !== i ? i : 0) + x.COMMAND_SENTINEL.length)) : a = null === (l = d.default.getActiveCommand(e.id)) || void 0 === l ? void 0 : l.name, {
            command: a,
            query: t.trim()
        }
    }
    let T = {
        stores: [d.default, f.default],
        matches(e, t, n, i, l) {
            var a;
            return l.commands !== h.CommandMode.DISABLED && (l.commands === h.CommandMode.OLD_BUILT_INS ? n.startsWith(x.COMMAND_SENTINEL + "gif") || n.startsWith(x.COMMAND_SENTINEL + "tenor") : (null === (a = d.default.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === E.ChannelTextAreaIntegrationTypes.GIF && d.default.getOptionStates(e.id).query.hasValue)
        },
        queryResults(e, t, n, i, l) {
            let {
                command: a,
                query: r
            } = C(e, n, i);
            if (null == a) return S;
            let u = s.findKey(E.ChannelTextAreaIntegrations, e => e.command === a);
            l && null != u && r.length > 0 && o.default.search(u, r);
            let d = f.default.getResults(u, r);
            return null == d ? S : {
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
                command: x,
                query: S
            } = C(s, o, u);
            if (null == x || 0 === S.length) return null;
            if (n) return (0, i.jsx)(r.Spinner, {
                className: g.spinner,
                type: r.Spinner.Type.SPINNING_CIRCLE
            });
            if (null != t) {
                var T, _;
                let e = !1,
                    n = t.map((t, n) => {
                        if (t.type === E.ChannelTextAreaIntegrationTypes.GIF) {
                            var l, s, r;
                            return e = !0, (0, i.jsx)(p.default.GIFIntegration, {
                                className: g.horizontalAutocomplete,
                                onClick: f,
                                onHover: c,
                                selected: a === n,
                                index: n,
                                width: null !== (l = t.meta.width) && void 0 !== l ? l : 0,
                                height: null !== (s = t.meta.height) && void 0 !== s ? s : 0,
                                src: null !== (r = t.meta.src) && void 0 !== r ? r : "",
                                url: t.meta.url
                            }, "".concat(t.meta.url).concat(t.meta.src))
                        }
                    }),
                    r = u.commands === h.CommandMode.OLD_BUILT_INS ? x : null !== (_ = null === (T = d.default.getActiveCommand(s.id)) || void 0 === T ? void 0 : T.integrationTitle) && void 0 !== _ ? _ : x,
                    o = S.length > 0 && null != r ? y.default.Messages.CONTENT_MATCHING.format({
                        query: S,
                        command: r
                    }) : null != r ? r : x;
                return (0, i.jsxs)(l.Fragment, {
                    children: [(0, i.jsx)(p.default.Title, {
                        title: o
                    }), e ? (0, i.jsx)(m.default, {
                        className: g.horizontalAutocompletes,
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
                index: i,
                type: l,
                options: a,
                channel: s
            } = e;
            if (null == t) return {
                type: null
            };
            let r = n[i];
            if (l === h.SelectType.INSERT ? a.replaceText(function(e) {
                    return e.meta.url
                }(r)) : a.sendMessage(function(e) {
                    return e.meta.url
                }(r)), u.default.trackWithMetadata(E.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                    search_type: E.SearchTypes.GIF,
                    index_num: i,
                    source_object: "/".concat(t)
                }), a.commands !== h.CommandMode.OLD_BUILT_INS) {
                let e = d.default.getActiveCommand(s.id);
                (null == e ? void 0 : e.inputType) === c.ApplicationCommandInputType.BUILT_IN_INTEGRATION && u.default.trackWithMetadata(E.AnalyticEvents.APPLICATION_COMMAND_USED, {
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
    var I = T
}