function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InteractivePIPHeader: function() {
            return B
        },
        PIPOverlay: function() {
            return w
        },
        TextActivityPIPOverlay: function() {
            return k
        },
        TileOverlay: function() {
            return G
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("661961"),
        l = n("813970"),
        c = n("550168"),
        f = n("79672"),
        d = n("276255"),
        _ = n("241636"),
        E = n("504038"),
        p = n("51897"),
        m = n("333002"),
        y = n("867197"),
        I = n("853871"),
        h = n("152235"),
        O = n("60449"),
        T = n("199629"),
        S = n("335911"),
        v = n("143953"),
        g = n("974052"),
        A = n("591629"),
        b = n("510795"),
        N = n("85079"),
        R = n("281767"),
        C = n("563090"),
        P = n("941504"),
        D = n("890789"),
        L = n("438249");

    function M(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function U(e) {
        var t = e.onClick,
            n = e.isExpanded;
        return r.createElement(y.default, {
            iconClassName: i()(D.arrowIcon, M({}, D.arrowIconExpanded, n)),
            onClick: t,
            iconComponent: g.default,
            label: n ? P.default.Messages.PICTURE_IN_PICTURE_COLLAPSE : P.default.Messages.PICTURE_IN_PICTURE_EXPAND
        })
    }

    function w(e) {
        var t, n, o = e.channel,
            i = e.applicationId,
            u = e.onMouseDown,
            y = e.onMouseMove,
            O = e.onMouseLeave,
            g = e.onJumpToChannel,
            A = e.idle,
            b = e.selectedParticipant,
            P = (0, l.useAppContext)() === R.AppContext.POPOUT,
            M = (0, a.useStateFromStores)([S.default], function() {
                return S.default.isVideoEnabled()
            }),
            U = (0, a.useStateFromStores)([S.default], function() {
                return Object.values(S.default.getVideoDevices())[0]
            }),
            w = !1 === (null === (t = null == U ? void 0 : U.disabled) || void 0 === t || t),
            k = (0, c.default)([i])[0],
            G = (0, _.default)(o),
            B = function(e) {
                s.default.setVideoEnabled(e)
            };
        return r.createElement("div", {
            className: L.videoControls,
            onMouseMove: y,
            onMouseDown: u,
            onMouseLeave: O
        }, r.createElement("div", {
            className: L.topControls
        }, r.createElement(m.PictureInPictureHeader, {
            idle: A,
            title: null !== (n = null == k ? void 0 : k.name) && void 0 !== n ? n : o.name,
            onJumpToChannel: g,
            preventIdleComponent: p.default
        })), r.createElement("div", {
            className: L.bottomControls
        }, r.createElement(v.default, {
            grow: 0,
            shrink: 1,
            basis: "50%",
            align: v.default.Align.CENTER
        }, r.createElement(T.default, {
            className: D.leftPipIcon,
            enabled: M,
            cameraUnavailable: !w,
            hasPermission: G,
            onChange: B,
            onCameraUnavailable: function() {
                w ? B(!0) : (0, E.default)()
            }
        }), r.createElement(p.default, null, r.createElement(f.default, {
            channelId: o.id,
            guildId: o.getGuildId(),
            className: L.__invalid_leftTrayIcon,
            participant: b,
            compact: !0
        }))), r.createElement(v.default, {
            grow: 0,
            shrink: 1,
            justify: v.default.Justify.END,
            basis: "50%",
            align: v.default.Align.CENTER
        }, P ? null : r.createElement(h.default, {
            className: D.rightPipIcon,
            popoutOpen: !1,
            onOpenPopout: function() {
                (0, N.default)(function() {
                    return d.openChannelCallPopout(o)
                })
            },
            onClosePopout: C.NOOP_NULL
        }), r.createElement(I.default, {
            applicationId: i,
            channelId: o.id,
            className: D.rightPipIcon
        }))))
    }

    function k(e) {
        var t, n = e.channel,
            o = e.applicationId,
            a = e.onMouseDown,
            s = e.onMouseMove,
            l = e.onMouseLeave,
            f = e.onJumpToChannel,
            d = e.idle,
            _ = e.users,
            E = (0, c.default)([o])[0];
        return r.createElement(u.Clickable, {
            className: i()(L.videoControls, L.videoControlsTextActivity),
            onMouseMove: s,
            onMouseDown: a,
            onMouseLeave: l,
            onDoubleClick: f
        }, r.createElement("div", {
            className: i()(L.topControls)
        }, r.createElement(m.PictureInPictureHeader, {
            idle: d,
            title: null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : n.name,
            onJumpToChannel: f,
            preventIdleComponent: p.default
        })), r.createElement("div", {
            className: L.bottomControls
        }, r.createElement(b.default, {
            renderIcon: !1,
            users: _,
            size: 24,
            max: 3,
            className: D.__invalid_userSummaryContainer
        }), r.createElement(I.default, {
            applicationId: o,
            channelId: n.id,
            iconClassName: D.leaveActivityIcon,
            isActive: !0
        })))
    }

    function G(e) {
        var t = e.channelId,
            n = e.participantsOpen;
        return e.showToggleParticipants ? r.createElement(O.default, {
            channelId: t,
            isParticipantsOpen: n,
            className: D.participantsButton
        }) : null
    }

    function B(e) {
        var t, n = e.onMouseDown,
            o = e.onMouseMove,
            a = e.onMouseLeave,
            u = e.showControls,
            s = e.applicationId,
            l = e.channel,
            f = e.onJumpToChannel,
            d = e.onToggleHeight,
            _ = e.isExpanded,
            E = e.hideExpandedButton,
            y = (0, c.default)([s])[0];
        return r.createElement("div", {
            className: D.pipHeader,
            onMouseMove: o,
            onMouseDown: n,
            onMouseLeave: a
        }, r.createElement("div", {
            className: i()(L.topControls, D.pipHeaderContent, M({}, D.pipHeaderContentOpen, u))
        }, !u && r.createElement(A.default, {
            className: D.menuIcon,
            width: 12,
            height: 12
        }), u && r.createElement(r.Fragment, null, r.createElement(m.PictureInPictureHeader, {
            idle: !u,
            title: null !== (t = null == y ? void 0 : y.name) && void 0 !== t ? t : l.name,
            onJumpToChannel: f,
            preventIdleComponent: p.default
        }), r.createElement("div", {
            className: D.pipHeaderButtonsRight
        }, E ? null : r.createElement(U, {
            isExpanded: _,
            onClick: d
        }), r.createElement(I.default, {
            applicationId: s,
            channelId: l.id,
            iconClassName: D.leaveActivityIcon
        })))))
    }
}