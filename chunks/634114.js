function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("798609"),
        u = n("240249"),
        d = n("776007"),
        c = n("810567"),
        f = n("113713"),
        m = n("968918"),
        p = n("317041"),
        h = n("627862");

    function x(e) {
        var t, n;
        let {
            channel: a,
            isAppDetailPresent: x
        } = e, [E, y] = l.useState(""), g = l.useCallback(() => y(""), [y]), {
            commandsByActiveSection: S,
            sectionDescriptors: C,
            filterSection: T
        } = u.useDiscovery(a, {
            commandType: o.ApplicationCommandType.CHAT
        }, {
            placeholderCount: 0,
            limit: p.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        });
        l.useEffect(() => {
            T(p.BuiltInSectionId.FRECENCY)
        }, [T]);
        let _ = null !== (n = null === (t = S[0]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
            I = C.filter(e => e.id !== p.BuiltInSectionId.FRECENCY && e.id !== p.BuiltInSectionId.BUILT_IN),
            v = (0, d.useSortApplicationsViaFrecency)(I);
        return (0, i.jsxs)("div", {
            className: s(h.container, {
                [h.appDetailVisible]: x
            }),
            children: [(0, i.jsx)("div", {
                className: h.searchBarContainer,
                children: (0, i.jsx)(c.default, {
                    placeholder: "Search Apps & Commands",
                    onChange: y,
                    query: E,
                    onClear: g,
                    size: c.default.Sizes.MEDIUM
                })
            }), (0, i.jsxs)(r.Scroller, {
                className: h.scrollableContent,
                fade: !0,
                children: [(0, i.jsx)(f.default, {
                    channel: a,
                    commands: _,
                    sectionDescriptors: C
                }), (0, i.jsx)(m.default, {
                    channel: a,
                    applications: v
                })]
            })]
        })
    }
}