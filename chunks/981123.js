function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("447515"),
        a = n("784184"),
        u = n("118133"),
        s = n("547819"),
        l = n("632142"),
        c = n("342942"),
        f = n("390579"),
        d = n("73013"),
        _ = n("640305"),
        E = n("208454"),
        p = n("304917"),
        m = n("281767"),
        y = n("656462"),
        I = n("941504"),
        h = n("438249");

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function T(e) {
        var t, n, i, E = e.closePopout,
            p = e.idle,
            h = e.pipWindows,
            O = e.voiceChannelId,
            T = e.onSelect;
        p && E();
        var S = (0, o.useStateFromStores)([l.default], function() {
                return l.default.getSelfEmbeddedActivityForChannel(O)
            }),
            v = (0, o.useStateFromStores)([_.default], function() {
                return _.default.pipWindow
            }),
            g = (0, o.useStateFromStores)([f.default], function() {
                return f.default.getSelectedParticipant(O)
            }),
            A = (0, o.useStateFromStores)([f.default], function() {
                return f.default.getStreamParticipants(O)
            });
        return r.createElement(a.Menu, {
            navId: "pip-menu",
            "aria-label": "switch PIP",
            onClose: E,
            onSelect: T
        }, (t = h.find(function(e) {
            return e.component === m.PictureInPictureComponents.EMBED_IFRAME
        }), n = h.find(function(e) {
            return e.component === m.PictureInPictureComponents.VIDEO
        }), i = [], null != t && (null == v ? void 0 : v.id) !== t.id && i.push({
            pipWindow: t
        }), null != n && A.forEach(function(e) {
            var t = d.default.getActiveStreamForApplicationStream(e.stream),
                r = e.id === (null == g ? void 0 : g.id) && (null == v ? void 0 : v.id) === n.id;
            null != t && !r && i.push({
                pipWindow: n,
                participant: e,
                stream: t
            })
        }), i).map(function(e) {
            var t, n = e.pipWindow.id,
                o = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
                i = function(e) {
                    if (e.pipWindow.component === m.PictureInPictureComponents.EMBED_IFRAME && null != S) {
                        var t, n = null === (t = c.default.getApplication(S.applicationId)) || void 0 === t ? void 0 : t.name;
                        return null == n ? I.default.Messages.SWITCH_PIP_TO_ACTIVITY : I.default.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({
                            activityName: n
                        })
                    }
                    return null == e.participant || e.participant.type !== y.ParticipantTypes.STREAM ? I.default.Messages.SWITCH_PIP_TO_GO_LIVE : I.default.Messages.SWITCH_PIP_TO_USER_STREAM.format({
                        username: e.participant.userNick
                    })
                }(e),
                l = "".concat(n).concat(null != o ? o : "");
            return r.createElement(a.MenuItem, {
                id: l,
                key: l,
                label: i,
                action: function() {
                    var t, n;
                    return t = e, (null == v ? void 0 : v.id) !== t.pipWindow.id && (0, s.switchPIPFocus)(t.pipWindow.id), void(null != (n = t.participant) && n.type !== y.ParticipantTypes.ACTIVITY && u.default.selectParticipant(O, n.id))
                }
            })
        }))
    }
    t.default = function(e) {
        var t = e.voiceChannelId,
            n = e.idle,
            u = Array.from((0, o.useStateFromStores)([_.default], function() {
                return _.default.pipWindows
            }).values()),
            s = (0, o.useStateFromStoresArray)([d.default], function() {
                return d.default.getAllActiveStreamsForChannel(t)
            }).filter(function(e) {
                var n;
                return e.ownerId !== (null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
            }),
            l = 1 === u.length && u[0].component === m.PictureInPictureComponents.EMBED_IFRAME || 0 === s.length,
            c = 1 === u.length && s.length <= 1;
        return l || c ? null : r.createElement(a.Popout, {
            position: "bottom",
            renderPopout: function(e) {
                return r.createElement(T, O({
                    voiceChannelId: t,
                    pipWindows: u,
                    idle: n
                }, e))
            }
        }, function(e) {
            return r.createElement(a.Clickable, O({
                className: h.menuIcon
            }, e), r.createElement(p.default, {
                color: i.default.unsafe_rawColors.WHITE_500.css
            }))
        })
    }
}