function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PictureInPictureHeader: function() {
            return h
        },
        default: function() {
            return m
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("442837"),
        o = n("692547"),
        l = n("215569"),
        u = n("481060"),
        d = n("19780"),
        _ = n("285952"),
        c = n("470441"),
        E = n("824717"),
        I = n("727218"),
        T = n("540028"),
        f = n("507675"),
        S = n("689938"),
        A = n("438249");

    function h(e) {
        let {
            title: t,
            onJumpToChannel: n,
            idle: r,
            preventIdleComponent: s
        } = e, l = (0, a.useStateFromStores)([d.default], () => d.default.getChannelId()), _ = null != l ? (0, i.jsx)(T.default, {
            voiceChannelId: l,
            idle: r
        }) : null;
        return (0, i.jsxs)(s, {
            className: A.headerIdleContainer,
            children: [(0, i.jsxs)(u.Clickable, {
                className: A.headerTitle,
                onClick: n,
                children: [(0, i.jsx)(E.default, {
                    "aria-label": S.default.Messages.OPEN_IN_THEATER,
                    className: A.backButton,
                    width: 20,
                    height: 20
                }), (0, i.jsx)(I.default, {
                    className: A.headerText,
                    size: I.default.Sizes.SIZE_16,
                    color: o.default.unsafe_rawColors.WHITE_500.css,
                    children: t
                })]
            }), _]
        })
    }

    function m(e) {
        let {
            children: t,
            idle: n,
            onJumpToChannel: r,
            backgroundKey: a,
            onActive: o,
            onForceIdle: u,
            renderBottomLeftControls: d,
            renderBottomRightControls: E,
            screenMessage: I,
            hideControls: T = !1,
            className: S,
            innerClassName: m,
            ...N
        } = e;
        return (0, i.jsxs)("div", {
            onMouseMove: o,
            onMouseDown: o,
            onMouseLeave: u,
            className: s()(A.pictureInPictureVideo, {
                [A.idle]: n
            }, S),
            onDoubleClick: r,
            children: [(0, i.jsx)(l.TransitionGroup, {
                children: (0, i.jsx)(c.BackgroundTransition, {
                    className: m,
                    children: t
                }, a)
            }), null != I ? (0, i.jsx)(f.default, {
                size: "small",
                ...I
            }) : null, !T && (0, i.jsxs)("div", {
                className: A.videoControls,
                children: [(0, i.jsx)("div", {
                    className: A.topControls,
                    children: (0, i.jsx)(h, {
                        idle: n,
                        onJumpToChannel: r,
                        ...N
                    })
                }), (0, i.jsxs)("div", {
                    className: A.bottomControls,
                    children: [(0, i.jsx)(_.default, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: _.default.Align.CENTER,
                        className: A.bottomLeftControls,
                        children: null == d ? void 0 : d()
                    }), (0, i.jsx)(_.default, {
                        grow: 0,
                        shrink: 1,
                        justify: _.default.Justify.END,
                        basis: "50%",
                        align: _.default.Align.CENTER,
                        children: null == E ? void 0 : E()
                    })]
                })]
            })]
        })
    }
}