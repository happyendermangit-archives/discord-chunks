function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("135983"),
        a = n("784184"),
        u = n("960201"),
        s = n("998880"),
        l = n("288625"),
        c = n("884916"),
        f = n("435414");

    function d(e) {
        var t, n = e.channel,
            d = e.applicationSection,
            _ = (0, u.getIconComponent)(d),
            E = r.useMemo(function() {
                var e, t;
                return (0, s.parseBioReactWithoutScrolling)(null !== (t = null === (e = d.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
            }, [null === (t = d.application) || void 0 === t ? void 0 : t.description]),
            p = (0, o.useStateFromStores)([c.default], function() {
                return c.default.getCurrentAppDetail()
            }),
            m = r.useCallback(function(e) {
                e.stopPropagation(), (null == p ? void 0 : p.id) === d.id ? l.dismissAppDetail() : l.showAppDetail(d)
            }, [d, p]);
        return r.createElement("li", {
            className: f.application,
            onClick: m
        }, r.createElement(_, {
            className: f.applicationIcon,
            channel: n,
            section: d,
            width: 32,
            height: 32
        }), r.createElement("div", {
            className: f.applicationDetails
        }, r.createElement(a.Heading, {
            variant: "heading-md/medium"
        }, d.name), r.createElement(i.Text, {
            className: f.applicationDescription,
            variant: "text-xs/medium",
            color: "text-muted",
            lineClamp: 1
        }, E)))
    }

    function _(e) {
        var t = e.channel,
            n = e.applications.slice(0, 50),
            o = r.useMemo(function() {
                return n.map(function(e) {
                    return r.createElement(d, {
                        key: e.id,
                        channel: t,
                        applicationSection: e
                    })
                })
            }, [t, n]);
        return 0 === n.length ? null : r.createElement("div", null, r.createElement(i.Text, {
            className: f.listHeading,
            variant: "text-sm/semibold"
        }, "Server Apps"), r.createElement("ul", {
            className: f.applicationList
        }, o))
    }
}