function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("442837"),
        o = n("481060"),
        l = n("872810"),
        u = n("199902"),
        d = n("314897"),
        _ = n("167580"),
        c = n("685203"),
        E = n("112560"),
        I = n("689938"),
        T = n("829307");
    let f = n("978538");

    function S(e) {
        let {
            participant: t,
            width: n,
            noArt: r = !1,
            selected: S = !1
        } = e, h = n < 195, A = (0, a.useStateFromStores)([u.default, d.default], () => u.default.getAllActiveStreams().some(e => {
            let {
                ownerId: t
            } = e;
            return t !== d.default.getId()
        }));
        return (0, i.jsx)("div", {
            className: s()(T.content, T.streamHidden, {
                [T.small]: h
            }),
            children: (0, i.jsx)(E.default, {
                className: T.streamHiddenEmptyState,
                artURL: f,
                noArt: r,
                selected: S,
                size: (0, E.getSizeForWidth)(n),
                header: h ? null : I.default.Messages.STREAM_HIDDEN,
                description: S ? null : (0, i.jsxs)("div", {
                    className: s()(T.streamHiddenCTA, {
                        [T.largePaddingTop]: !h
                    }),
                    children: [(0, i.jsx)(c.CallTileCTA, {
                        isSmall: h,
                        children: (0, i.jsx)(o.Text, {
                            variant: h ? "text-sm/semibold" : "text-md/semibold",
                            color: "none",
                            children: n < 175 ? I.default.Messages.WATCH : I.default.Messages.WATCH_STREAM
                        })
                    }), A ? (0, i.jsx)(c.CallTileCTA, {
                        className: T.addCTA,
                        tooltip: I.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                        onClick: e => {
                            e.stopPropagation(), (0, l.watchStream)(t.stream, {
                                forceMultiple: !0
                            })
                        },
                        isSmall: h,
                        children: (0, i.jsx)(_.default, {
                            className: T.addStreamIcon
                        })
                    }) : null]
                })
            })
        })
    }
}