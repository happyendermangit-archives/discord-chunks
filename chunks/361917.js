function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("481060"),
        l = n("911969"),
        u = n("10718"),
        d = n("148958"),
        _ = n("6048"),
        c = n("546600"),
        E = n("105355"),
        I = n("689079"),
        T = n("347199");

    function f(e) {
        var t, n;
        let {
            channel: s,
            isAppDetailPresent: f
        } = e, [S, A] = r.useState(""), h = r.useCallback(() => A(""), [A]), {
            commandsByActiveSection: m,
            sectionDescriptors: N,
            filterSection: O
        } = u.useDiscovery(s, {
            commandType: l.ApplicationCommandType.CHAT
        }, {
            placeholderCount: 0,
            limit: I.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        });
        r.useEffect(() => {
            O(I.BuiltInSectionId.FRECENCY)
        }, [O]);
        let p = null !== (n = null === (t = m[0]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
            R = N.filter(e => e.id !== I.BuiltInSectionId.FRECENCY && e.id !== I.BuiltInSectionId.BUILT_IN),
            C = (0, d.useSortApplicationsViaFrecency)(R);
        return (0, i.jsxs)("div", {
            className: a()(T.container, {
                [T.appDetailVisible]: f
            }),
            children: [(0, i.jsx)("div", {
                className: T.searchBarContainer,
                children: (0, i.jsx)(_.default, {
                    placeholder: "Search Apps & Commands",
                    onChange: A,
                    query: S,
                    onClear: h,
                    size: _.default.Sizes.MEDIUM
                })
            }), (0, i.jsxs)(o.Scroller, {
                className: T.scrollableContent,
                fade: !0,
                children: [(0, i.jsx)(c.default, {
                    channel: s,
                    commands: p,
                    sectionDescriptors: N
                }), (0, i.jsx)(E.default, {
                    channel: s,
                    applications: C
                })]
            })]
        })
    }
}