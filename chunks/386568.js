function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PIPOverlay: function() {
            return b
        },
        TextActivityPIPOverlay: function() {
            return D
        },
        TileOverlay: function() {
            return R
        },
        InteractivePIPHeader: function() {
            return F
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("414456"),
        i = n.n(l),
        o = n("446674"),
        r = n("77078"),
        s = n("629109"),
        d = n("244201"),
        u = n("442939"),
        c = n("836087"),
        p = n("383294"),
        f = n("289180"),
        m = n("19065"),
        h = n("550410"),
        v = n("598873"),
        I = n("981913"),
        P = n("576242"),
        C = n("336971"),
        S = n("109489"),
        g = n("116439"),
        y = n("42887"),
        E = n("145131"),
        T = n("256170"),
        A = n("433487"),
        x = n("811305"),
        N = n("735890"),
        M = n("49111"),
        j = n("843455"),
        _ = n("782340"),
        L = n("278121"),
        w = n("735276");

    function O(e) {
        let {
            onClick: t,
            isExpanded: n
        } = e;
        return (0, a.jsx)(I.default, {
            iconClassName: i(L.arrowIcon, {
                [L.arrowIconExpanded]: n
            }),
            onClick: t,
            iconComponent: T.default,
            label: n ? _.default.Messages.PICTURE_IN_PICTURE_COLLAPSE : _.default.Messages.PICTURE_IN_PICTURE_EXPAND
        })
    }

    function b(e) {
        var t, n;
        let {
            channel: l,
            applicationId: i,
            onMouseDown: r,
            onMouseMove: I,
            onMouseLeave: S,
            onJumpToChannel: T,
            idle: A,
            selectedParticipant: x
        } = e, _ = (0, d.useAppContext)(), O = _ === M.AppContext.POPOUT, b = (0, o.useStateFromStores)([y.default], () => y.default.isVideoEnabled()), D = (0, o.useStateFromStores)([y.default], () => Object.values(y.default.getVideoDevices())[0]), R = null === (t = null == D ? void 0 : D.disabled) || void 0 === t || t, F = !1 === R, W = (0, u.default)([i])[0], U = (0, f.default)(l), k = e => {
            s.default.setVideoEnabled(e)
        };
        return (0, a.jsxs)("div", {
            className: w.videoControls,
            onMouseMove: I,
            onMouseDown: r,
            onMouseLeave: S,
            children: [(0, a.jsx)("div", {
                className: w.topControls,
                children: (0, a.jsx)(v.PictureInPictureHeader, {
                    idle: A,
                    title: null !== (n = null == W ? void 0 : W.name) && void 0 !== n ? n : l.name,
                    onJumpToChannel: T,
                    preventIdleComponent: h.default
                })
            }), (0, a.jsxs)("div", {
                className: w.bottomControls,
                children: [(0, a.jsxs)(E.default, {
                    grow: 0,
                    shrink: 1,
                    basis: "50%",
                    align: E.default.Align.CENTER,
                    children: [(0, a.jsx)(g.default, {
                        className: L.leftPipIcon,
                        enabled: b,
                        cameraUnavailable: !F,
                        hasPermission: U,
                        onChange: k,
                        onCameraUnavailable: () => {
                            F ? k(!0) : (0, m.default)()
                        }
                    }), (0, a.jsx)(h.default, {
                        children: (0, a.jsx)(c.default, {
                            channelId: l.id,
                            guildId: l.getGuildId(),
                            className: w.leftTrayIcon,
                            participant: x,
                            compact: !0
                        })
                    })]
                }), (0, a.jsxs)(E.default, {
                    grow: 0,
                    shrink: 1,
                    justify: E.default.Justify.END,
                    basis: "50%",
                    align: E.default.Align.CENTER,
                    children: [O ? null : (0, a.jsx)(C.default, {
                        className: L.rightPipIcon,
                        popoutOpen: !1,
                        onOpenPopout: () => {
                            (0, N.default)(() => p.openChannelCallPopout(l))
                        },
                        onClosePopout: j.NOOP_NULL
                    }), (0, a.jsx)(P.default, {
                        applicationId: i,
                        channelId: l.id,
                        className: L.rightPipIcon
                    })]
                })]
            })]
        })
    }

    function D(e) {
        var t;
        let {
            channel: n,
            applicationId: l,
            onMouseDown: o,
            onMouseMove: s,
            onMouseLeave: d,
            onJumpToChannel: c,
            idle: p,
            users: f
        } = e, m = (0, u.default)([l])[0];
        return (0, a.jsxs)(r.Clickable, {
            className: i(w.videoControls, w.videoControlsTextActivity),
            onMouseMove: s,
            onMouseDown: o,
            onMouseLeave: d,
            onDoubleClick: c,
            children: [(0, a.jsx)("div", {
                className: i(w.topControls),
                children: (0, a.jsx)(v.PictureInPictureHeader, {
                    idle: p,
                    title: null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : n.name,
                    onJumpToChannel: c,
                    preventIdleComponent: h.default
                })
            }), (0, a.jsxs)("div", {
                className: w.bottomControls,
                children: [(0, a.jsx)(x.default, {
                    renderIcon: !1,
                    users: f,
                    size: 24,
                    max: 3,
                    className: L.userSummaryContainer
                }), (0, a.jsx)(P.default, {
                    applicationId: l,
                    channelId: n.id,
                    iconClassName: L.leaveActivityIcon,
                    isActive: !0
                })]
            })]
        })
    }

    function R(e) {
        let {
            channelId: t,
            participantsOpen: n,
            showToggleParticipants: l
        } = e;
        return l ? (0, a.jsx)(S.default, {
            channelId: t,
            isParticipantsOpen: n,
            className: L.participantsButton
        }) : null
    }

    function F(e) {
        var t;
        let {
            onMouseDown: n,
            onMouseMove: l,
            onMouseLeave: o,
            showControls: r,
            applicationId: s,
            channel: d,
            onJumpToChannel: c,
            onToggleHeight: p,
            isExpanded: f,
            hideExpandedButton: m
        } = e, I = (0, u.default)([s])[0];
        return (0, a.jsx)("div", {
            className: L.pipHeader,
            onMouseMove: l,
            onMouseDown: n,
            onMouseLeave: o,
            children: (0, a.jsxs)("div", {
                className: i(w.topControls, L.pipHeaderContent, {
                    [L.pipHeaderContentOpen]: r
                }),
                children: [!r && (0, a.jsx)(A.default, {
                    className: L.menuIcon,
                    width: 12,
                    height: 12
                }), r && (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(v.PictureInPictureHeader, {
                        idle: !r,
                        title: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : d.name,
                        onJumpToChannel: c,
                        preventIdleComponent: h.default
                    }), (0, a.jsxs)("div", {
                        className: L.pipHeaderButtonsRight,
                        children: [m ? null : (0, a.jsx)(O, {
                            isExpanded: f,
                            onClick: p
                        }), (0, a.jsx)(P.default, {
                            applicationId: s,
                            channelId: d.id,
                            iconClassName: L.leaveActivityIcon
                        })]
                    })]
                })]
            })
        })
    }
}