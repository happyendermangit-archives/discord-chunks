function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("784184"),
        u = n("391391"),
        s = n("140817"),
        l = n("471559"),
        c = n("861272"),
        f = n("323280"),
        d = n("587996"),
        _ = n("143953"),
        E = n("209610"),
        p = n("407048"),
        m = n("281767"),
        y = n("941504"),
        I = n("490293"),
        h = {
            results: {
                command: null,
                integrations: [],
                isLoading: !1
            }
        };

    function O(e, t, n) {
        var r, o, i;
        return n.commands === E.CommandMode.OLD_BUILT_INS ? (r = t.split(" ")[0].substring(p.COMMAND_SENTINEL.length), t = t.substring((null !== (o = r.length) && void 0 !== o ? o : 0) + p.COMMAND_SENTINEL.length)) : r = null === (i = l.default.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.name, {
            command: r,
            query: t.trim()
        }
    }
    var T = {
        stores: [l.default, f.default],
        matches: function(e, t, n, r, o) {
            var i;
            return o.commands !== E.CommandMode.DISABLED && (o.commands === E.CommandMode.OLD_BUILT_INS ? n.startsWith(p.COMMAND_SENTINEL + "gif") || n.startsWith(p.COMMAND_SENTINEL + "tenor") : (null === (i = l.default.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.integrationType) === m.ChannelTextAreaIntegrationTypes.GIF && l.default.getOptionStates(e.id).query.hasValue)
        },
        queryResults: function(e, t, n, r, o) {
            var a = O(e, n, r),
                s = a.command,
                l = a.query;
            if (null == s) return h;
            var c = i().findKey(m.ChannelTextAreaIntegrations, function(e) {
                return e.command === s
            });
            o && null != c && l.length > 0 && u.default.search(c, l);
            var d = f.default.getResults(c, l);
            return null == d ? h : {
                results: {
                    command: s,
                    integrations: d.results,
                    isLoading: d.loading
                }
            }
        },
        renderResults: function(e) {
            var t = e.results,
                n = t.integrations,
                o = t.isLoading,
                i = e.selectedIndex,
                u = e.channel,
                s = e.query,
                c = e.options,
                f = e.onHover,
                p = e.onClick,
                h = O(u, s, c),
                T = h.command,
                S = h.query;
            if (null == T || 0 === S.length) return null;
            if (o) return r.createElement(a.Spinner, {
                className: I.spinner,
                type: a.Spinner.Type.SPINNING_CIRCLE
            });
            if (null != n) {
                var v, g, A = !1,
                    b = n.map(function(e, t) {
                        if (e.type === m.ChannelTextAreaIntegrationTypes.GIF) {
                            var n, o, a;
                            return A = !0, r.createElement(d.default.GIFIntegration, {
                                className: I.horizontalAutocomplete,
                                onClick: p,
                                onHover: f,
                                selected: i === t,
                                index: t,
                                width: null !== (n = e.meta.width) && void 0 !== n ? n : 0,
                                height: null !== (o = e.meta.height) && void 0 !== o ? o : 0,
                                src: null !== (a = e.meta.src) && void 0 !== a ? a : "",
                                url: e.meta.url,
                                key: "".concat(e.meta.url).concat(e.meta.src)
                            })
                        }
                    }),
                    N = c.commands === E.CommandMode.OLD_BUILT_INS ? T : null !== (g = null === (v = l.default.getActiveCommand(u.id)) || void 0 === v ? void 0 : v.integrationTitle) && void 0 !== g ? g : T,
                    R = S.length > 0 && null != N ? y.default.Messages.CONTENT_MATCHING.format({
                        query: S,
                        command: N
                    }) : null != N ? N : T;
                return r.createElement(r.Fragment, {
                    key: "gifs"
                }, r.createElement(d.default.Title, {
                    title: R
                }), A ? r.createElement(_.default, {
                    className: I.horizontalAutocompletes
                }, b) : b)
            }
        },
        onSelect: function(e) {
            var t = e.results,
                n = t.command,
                r = t.integrations,
                o = e.index,
                i = e.type,
                a = e.options,
                u = e.channel;
            if (null == n) return {
                type: null
            };
            var f = r[o];
            if (i === E.SelectType.INSERT ? a.replaceText(function(e) {
                    return e.meta.url
                }(f)) : a.sendMessage(function(e) {
                    return e.meta.url
                }(f)), s.default.trackWithMetadata(m.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                    search_type: m.SearchTypes.GIF,
                    index_num: o,
                    source_object: "/".concat(n)
                }), a.commands !== E.CommandMode.OLD_BUILT_INS) {
                var d = l.default.getActiveCommand(u.id);
                (null == d ? void 0 : d.inputType) === c.ApplicationCommandInputType.BUILT_IN_INTEGRATION && s.default.trackWithMetadata(m.AnalyticEvents.APPLICATION_COMMAND_USED, {
                    command_id: d.id,
                    application_id: d.applicationId,
                    command_type: d.type
                })
            }
            return {
                type: E.AutocompleteSelectionTypes.GIF
            }
        }
    };

    function S(e) {
        return e.meta.url
    }
    t.default = T
}