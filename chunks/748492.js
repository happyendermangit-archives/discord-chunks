function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InteractivePIPHeader: function() {
            return B
        },
        PIPOverlay: function() {
            return b
        },
        TextActivityPIPOverlay: function() {
            return G
        },
        TileOverlay: function() {
            return w
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("442837"),
        o = n("481060"),
        l = n("846027"),
        u = n("40851"),
        d = n("835473"),
        _ = n("221888"),
        c = n("788983"),
        E = n("189771"),
        I = n("560688"),
        T = n("618158"),
        f = n("922745"),
        S = n("871499"),
        h = n("402113"),
        A = n("800965"),
        m = n("157813"),
        N = n("25827"),
        O = n("131951"),
        p = n("285952"),
        R = n("605403"),
        C = n("808268"),
        g = n("602623"),
        L = n("349619"),
        D = n("981631"),
        v = n("231338"),
        M = n("689938"),
        y = n("890789"),
        P = n("438249");

    function U(e) {
        let {
            onClick: t,
            isExpanded: n
        } = e;
        return (0, i.jsx)(S.default, {
            iconClassName: s()(y.arrowIcon, {
                [y.arrowIconExpanded]: n
            }),
            onClick: t,
            iconComponent: R.default,
            label: n ? M.default.Messages.PICTURE_IN_PICTURE_COLLAPSE : M.default.Messages.PICTURE_IN_PICTURE_EXPAND
        })
    }

    function b(e) {
        var t, n;
        let {
            channel: r,
            applicationId: s,
            onMouseDown: o,
            onMouseMove: S,
            onMouseLeave: m,
            onJumpToChannel: R,
            idle: C,
            selectedParticipant: g
        } = e, M = (0, u.useAppContext)() === D.AppContext.POPOUT, U = (0, a.useStateFromStores)([O.default], () => O.default.isVideoEnabled()), b = (0, a.useStateFromStores)([O.default], () => Object.values(O.default.getVideoDevices())[0]), G = !1 === (null === (t = null == b ? void 0 : b.disabled) || void 0 === t || t), w = (0, d.default)([s])[0], B = (0, E.default)(r), k = e => {
            l.default.setVideoEnabled(e)
        };
        return (0, i.jsxs)("div", {
            className: P.videoControls,
            onMouseMove: S,
            onMouseDown: o,
            onMouseLeave: m,
            children: [(0, i.jsx)("div", {
                className: P.topControls,
                children: (0, i.jsx)(f.PictureInPictureHeader, {
                    idle: C,
                    title: null !== (n = null == w ? void 0 : w.name) && void 0 !== n ? n : r.name,
                    onJumpToChannel: R,
                    preventIdleComponent: T.default
                })
            }), (0, i.jsxs)("div", {
                className: P.bottomControls,
                children: [(0, i.jsxs)(p.default, {
                    grow: 0,
                    shrink: 1,
                    basis: "50%",
                    align: p.default.Align.CENTER,
                    children: [(0, i.jsx)(N.default, {
                        className: y.leftPipIcon,
                        enabled: U,
                        cameraUnavailable: !G,
                        hasPermission: B,
                        onChange: k,
                        onCameraUnavailable: () => {
                            G ? k(!0) : (0, I.default)()
                        }
                    }), (0, i.jsx)(T.default, {
                        children: (0, i.jsx)(_.default, {
                            channelId: r.id,
                            guildId: r.getGuildId(),
                            className: P.__invalid_leftTrayIcon,
                            participant: g,
                            compact: !0
                        })
                    })]
                }), (0, i.jsxs)(p.default, {
                    grow: 0,
                    shrink: 1,
                    justify: p.default.Justify.END,
                    basis: "50%",
                    align: p.default.Align.CENTER,
                    children: [M ? null : (0, i.jsx)(A.default, {
                        className: y.rightPipIcon,
                        popoutOpen: !1,
                        onOpenPopout: () => {
                            (0, L.default)(() => c.openChannelCallPopout(r))
                        },
                        onClosePopout: v.NOOP_NULL
                    }), (0, i.jsx)(h.default, {
                        applicationId: s,
                        channelId: r.id,
                        className: y.rightPipIcon
                    })]
                })]
            })]
        })
    }

    function G(e) {
        var t;
        let {
            channel: n,
            applicationId: r,
            onMouseDown: a,
            onMouseMove: l,
            onMouseLeave: u,
            onJumpToChannel: _,
            idle: c,
            users: E
        } = e, I = (0, d.default)([r])[0];
        return (0, i.jsxs)(o.Clickable, {
            className: s()(P.videoControls, P.videoControlsTextActivity),
            onMouseMove: l,
            onMouseDown: a,
            onMouseLeave: u,
            onDoubleClick: _,
            children: [(0, i.jsx)("div", {
                className: s()(P.topControls),
                children: (0, i.jsx)(f.PictureInPictureHeader, {
                    idle: c,
                    title: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : n.name,
                    onJumpToChannel: _,
                    preventIdleComponent: T.default
                })
            }), (0, i.jsxs)("div", {
                className: P.bottomControls,
                children: [(0, i.jsx)(g.default, {
                    renderIcon: !1,
                    users: E,
                    size: 24,
                    max: 3,
                    className: y.__invalid_userSummaryContainer
                }), (0, i.jsx)(h.default, {
                    applicationId: r,
                    channelId: n.id,
                    iconClassName: y.leaveActivityIcon,
                    isActive: !0
                })]
            })]
        })
    }

    function w(e) {
        let {
            channelId: t,
            participantsOpen: n,
            showToggleParticipants: r
        } = e;
        return r ? (0, i.jsx)(m.default, {
            channelId: t,
            isParticipantsOpen: n,
            className: y.participantsButton
        }) : null
    }

    function B(e) {
        var t;
        let {
            onMouseDown: n,
            onMouseMove: r,
            onMouseLeave: a,
            showControls: o,
            applicationId: l,
            channel: u,
            onJumpToChannel: _,
            onToggleHeight: c,
            isExpanded: E,
            hideExpandedButton: I
        } = e, S = (0, d.default)([l])[0];
        return (0, i.jsx)("div", {
            className: y.pipHeader,
            onMouseMove: r,
            onMouseDown: n,
            onMouseLeave: a,
            children: (0, i.jsxs)("div", {
                className: s()(P.topControls, y.pipHeaderContent, {
                    [y.pipHeaderContentOpen]: o
                }),
                children: [!o && (0, i.jsx)(C.default, {
                    className: y.menuIcon,
                    width: 12,
                    height: 12
                }), o && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(f.PictureInPictureHeader, {
                        idle: !o,
                        title: null !== (t = null == S ? void 0 : S.name) && void 0 !== t ? t : u.name,
                        onJumpToChannel: _,
                        preventIdleComponent: T.default
                    }), (0, i.jsxs)("div", {
                        className: y.pipHeaderButtonsRight,
                        children: [I ? null : (0, i.jsx)(U, {
                            isExpanded: E,
                            onClick: c
                        }), (0, i.jsx)(h.default, {
                            applicationId: l,
                            channelId: u.id,
                            iconClassName: y.leaveActivityIcon
                        })]
                    })]
                })]
            })
        })
    }
}