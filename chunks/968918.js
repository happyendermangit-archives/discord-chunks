function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("446674"),
        s = n("577776"),
        r = n("77078"),
        o = n("355263"),
        u = n("368639"),
        d = n("82372"),
        c = n("426969"),
        f = n("231383");

    function m(e) {
        var t;
        let {
            channel: n,
            applicationSection: m
        } = e, p = (0, o.getIconComponent)(m), h = i.useMemo(() => {
            var e, t;
            return (0, u.parseBioReactWithoutScrolling)(null !== (t = null === (e = m.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
        }, [null === (t = m.application) || void 0 === t ? void 0 : t.description]), E = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentAppDetail()), g = i.useCallback(e => {
            e.stopPropagation(), (null == E ? void 0 : E.id) === m.id ? d.dismissAppDetail() : d.showAppDetail(m)
        }, [m, E]);
        return (0, l.jsxs)("li", {
            className: f.application,
            onClick: g,
            children: [(0, l.jsx)(p, {
                className: f.applicationIcon,
                channel: n,
                section: m,
                width: 32,
                height: 32
            }), (0, l.jsxs)("div", {
                className: f.applicationDetails,
                children: [(0, l.jsx)(r.Heading, {
                    variant: "heading-md/medium",
                    children: m.name
                }), (0, l.jsx)(s.Text, {
                    className: f.applicationDescription,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: h
                })]
            })]
        })
    }

    function p(e) {
        let {
            channel: t,
            applications: n
        } = e, a = n.slice(0, 50), r = i.useMemo(() => a.map(e => (0, l.jsx)(m, {
            channel: t,
            applicationSection: e
        }, e.id)), [t, a]);
        return 0 === a.length ? null : (0, l.jsxs)("div", {
            children: [(0, l.jsx)(s.Text, {
                className: f.listHeading,
                variant: "text-sm/semibold",
                children: "Server Apps"
            }), (0, l.jsx)("ul", {
                className: f.applicationList,
                children: r
            })]
        })
    }
}