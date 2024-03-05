function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        i = n("446674"),
        l = n("77078"),
        u = n("990766"),
        o = n("373469"),
        d = n("271938"),
        c = n("30672"),
        f = n("100844"),
        h = n("607391"),
        E = n("782340"),
        p = n("100469");
    let C = n("588281");

    function m(e) {
        let {
            participant: t,
            width: n,
            noArt: r = !1,
            selected: m = !1
        } = e, S = n < 195, g = (0, i.useStateFromStores)([o.default, d.default], () => o.default.getAllActiveStreams().some(e => {
            let {
                ownerId: t
            } = e;
            return t !== d.default.getId()
        }));
        return (0, a.jsx)("div", {
            className: s(p.content, p.streamHidden, {
                [p.small]: S
            }),
            children: (0, a.jsx)(h.default, {
                className: p.streamHiddenEmptyState,
                artURL: C,
                noArt: r,
                selected: m,
                size: (0, h.getSizeForWidth)(n),
                header: S ? null : E.default.Messages.STREAM_HIDDEN,
                description: m ? null : (0, a.jsxs)("div", {
                    className: s(p.streamHiddenCTA, {
                        [p.largePaddingTop]: !S
                    }),
                    children: [(0, a.jsx)(f.CallTileCTA, {
                        isSmall: S,
                        children: (0, a.jsx)(l.Text, {
                            variant: S ? "text-sm/semibold" : "text-md/semibold",
                            color: "none",
                            children: n < 175 ? E.default.Messages.WATCH : E.default.Messages.WATCH_STREAM
                        })
                    }), g ? (0, a.jsx)(f.CallTileCTA, {
                        className: p.addCTA,
                        tooltip: E.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                        onClick: e => {
                            e.stopPropagation(), (0, u.watchStream)(t.stream, {
                                forceMultiple: !0
                            })
                        },
                        isSmall: S,
                        children: (0, a.jsx)(c.default, {
                            className: p.addStreamIcon
                        })
                    }) : null]
                })
            })
        })
    }
}