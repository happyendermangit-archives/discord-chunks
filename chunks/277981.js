function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("392711"),
        a = n.n(s),
        o = n("481060"),
        l = n("85235"),
        u = n("367907"),
        d = n("998698"),
        _ = n("895924"),
        c = n("718745"),
        E = n("156361"),
        I = n("285952"),
        T = n("590921"),
        f = n("665692"),
        S = n("981631"),
        h = n("689938"),
        A = n("490293");
    let m = {
        results: {
            command: null,
            integrations: [],
            isLoading: !1
        }
    };

    function N(e, t, n) {
        var i, r;
        let s;
        return n.commands === T.CommandMode.OLD_BUILT_INS ? (s = t.split(" ")[0].substring(f.COMMAND_SENTINEL.length), t = t.substring((null !== (i = s.length) && void 0 !== i ? i : 0) + f.COMMAND_SENTINEL.length)) : s = null === (r = d.default.getActiveCommand(e.id)) || void 0 === r ? void 0 : r.name, {
            command: s,
            query: t.trim()
        }
    }
    let O = {
        stores: [d.default, c.default],
        matches(e, t, n, i, r) {
            var s;
            return r.commands !== T.CommandMode.DISABLED && (r.commands === T.CommandMode.OLD_BUILT_INS ? n.startsWith(f.COMMAND_SENTINEL + "gif") || n.startsWith(f.COMMAND_SENTINEL + "tenor") : (null === (s = d.default.getActiveCommand(e.id)) || void 0 === s ? void 0 : s.integrationType) === S.ChannelTextAreaIntegrationTypes.GIF && d.default.getOptionStates(e.id).query.hasValue)
        },
        queryResults(e, t, n, i, r) {
            let {
                command: s,
                query: o
            } = N(e, n, i);
            if (null == s) return m;
            let u = a().findKey(S.ChannelTextAreaIntegrations, e => e.command === s);
            r && null != u && o.length > 0 && l.default.search(u, o);
            let d = c.default.getResults(u, o);
            return null == d ? m : {
                results: {
                    command: s,
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
                selectedIndex: s,
                channel: a,
                query: l,
                options: u,
                onHover: _,
                onClick: c
            } = e, {
                command: f,
                query: m
            } = N(a, l, u);
            if (null == f || 0 === m.length) return null;
            if (n) return (0, i.jsx)(o.Spinner, {
                className: A.spinner,
                type: o.Spinner.Type.SPINNING_CIRCLE
            });
            if (null != t) {
                var O, p;
                let e = !1,
                    n = t.map((t, n) => {
                        if (t.type === S.ChannelTextAreaIntegrationTypes.GIF) {
                            var r, a, o;
                            return e = !0, (0, i.jsx)(E.default.GIFIntegration, {
                                className: A.horizontalAutocomplete,
                                onClick: c,
                                onHover: _,
                                selected: s === n,
                                index: n,
                                width: null !== (r = t.meta.width) && void 0 !== r ? r : 0,
                                height: null !== (a = t.meta.height) && void 0 !== a ? a : 0,
                                src: null !== (o = t.meta.src) && void 0 !== o ? o : "",
                                url: t.meta.url
                            }, "".concat(t.meta.url).concat(t.meta.src))
                        }
                    }),
                    o = u.commands === T.CommandMode.OLD_BUILT_INS ? f : null !== (p = null === (O = d.default.getActiveCommand(a.id)) || void 0 === O ? void 0 : O.integrationTitle) && void 0 !== p ? p : f,
                    l = m.length > 0 && null != o ? h.default.Messages.CONTENT_MATCHING.format({
                        query: m,
                        command: o
                    }) : null != o ? o : f;
                return (0, i.jsxs)(r.Fragment, {
                    children: [(0, i.jsx)(E.default.Title, {
                        title: l
                    }), e ? (0, i.jsx)(I.default, {
                        className: A.horizontalAutocompletes,
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
                type: r,
                options: s,
                channel: a
            } = e;
            if (null == t) return {
                type: null
            };
            let o = n[i];
            if (r === T.SelectType.INSERT ? s.replaceText(function(e) {
                    return e.meta.url
                }(o)) : s.sendMessage(function(e) {
                    return e.meta.url
                }(o)), u.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                    search_type: S.SearchTypes.GIF,
                    index_num: i,
                    source_object: "/".concat(t)
                }), s.commands !== T.CommandMode.OLD_BUILT_INS) {
                let e = d.default.getActiveCommand(a.id);
                (null == e ? void 0 : e.inputType) === _.ApplicationCommandInputType.BUILT_IN_INTEGRATION && u.default.trackWithMetadata(S.AnalyticEvents.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type
                })
            }
            return {
                type: T.AutocompleteSelectionTypes.GIF
            }
        }
    };

    function p(e) {
        return e.meta.url
    }
    t.default = O
}