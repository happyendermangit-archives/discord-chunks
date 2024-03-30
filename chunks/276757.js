function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("629815"),
        l = n("118133"),
        c = n("136445"),
        f = n("78928"),
        d = n("390579"),
        _ = n("423731"),
        E = n("163291"),
        p = n("899998"),
        m = n("416204"),
        y = n("640305"),
        I = n("894288"),
        h = n("208454"),
        O = n("623416"),
        T = n("632142"),
        S = n("224680"),
        v = n("194487"),
        g = n("522942"),
        A = n("285898"),
        b = n("997133"),
        N = n("698007"),
        R = n("281767"),
        C = n("656462"),
        P = n("622167"),
        D = n("438249"),
        L = n("344534");

    function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function w(e) {
        var t, n, o = e.channel,
            A = e.isLoading;
        var w = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return M(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            k = w[0],
            G = w[1],
            B = (0, a.useStateFromStores)([T.default], function() {
                return T.default.getSelfEmbeddedActivityForChannel(o.id)
            }),
            j = (0, a.useStateFromStores)([T.default], function() {
                return T.default.getActivityPanelMode()
            }),
            F = null == B ? void 0 : B.instanceId,
            V = (0, a.useStateFromStores)([I.default], function() {
                return I.default.getChannelId() === o.id
            }),
            H = (0, a.useStateFromStoresObject)([y.default], function() {
                var e = y.default.pipWindow;
                return {
                    dockedRect: null != e ? y.default.getDockedRect(e.id) : null,
                    isHidden: y.default.isEmbeddedActivityHidden()
                }
            }),
            x = H.dockedRect,
            Y = H.isHidden,
            W = (0, a.useStateFromStores)([_.default], function() {
                return _.default.getWindow(R.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
            }),
            K = (0, a.useStateFromStoresObject)([d.default], function() {
                return {
                    activityParticipant: null != B ? d.default.getParticipant(o.id, B.applicationId) : null,
                    selectedParticipant: d.default.getSelectedParticipant(o.id),
                    participantsOpen: d.default.getParticipantsOpen(o.id)
                }
            }),
            z = K.activityParticipant,
            X = K.selectedParticipant,
            q = K.participantsOpen,
            Q = V || null != W,
            J = (0, S.default)(o.id),
            Z = J && (null == X ? void 0 : X.type) !== C.ParticipantTypes.ACTIVITY,
            $ = !J && j === N.ActivityPanelModes.PIP,
            ee = (!Q || Q && (Z || $) && null == x) && !Y,
            et = ee && null != y.default.pipVideoWindow && null != y.default.pipActivityWindow;

        function en() {
            if (null != B && l.default.selectParticipant(o.id, B.applicationId), null == W) {
                (0, f.popAllLayers)();
                var e, t = null !== (e = o.getGuildId()) && void 0 !== e ? e : R.ME;
                c.default.channelListScrollTo(t, o.id), (0, E.transitionToGuild)(t, o.id)
            }
        }

        function er() {
            G(!k)
        }
        r.useEffect(function() {
            if ((null == B ? void 0 : B.applicationId) != null) {
                var e = ee ? b.ActivityLayoutMode.PIP : b.ActivityLayoutMode.FOCUSED;
                s.default.dispatch({
                    type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                    layoutMode: e,
                    applicationId: B.applicationId
                })
            }
        }, [null == B ? void 0 : B.applicationId, ee]);
        if (null == B || null == F || null == z && (0, S.default)(o.id)) return null;
        var eo = Array.from(B.userIds).map(function(e) {
                return h.default.getUser(e)
            }).filter(function(e) {
                return null != e
            }),
            ei = {
                instance_id: F,
                channel_id: o.id
            };
        return null != o.guild_id && "" !== o.guild_id && (ei.guild_id = o.guild_id), r.createElement(m.default, {
            timeout: 2e3
        }, function(e) {
            var t, n, a, s, l, c, f, d, _, E, m, y = e.idle,
                I = e.onActive,
                h = e.onForceIdle;
            return r.createElement(p.default, {
                className: i()(P.root, (U(_ = {}, P.pipMode, ee), U(_, L.elevationHigh, ee), U(_, D.idle, y && !(null === (f = B.config) || void 0 === f ? void 0 : f.useInteractivePIP)), U(_, P.pipModeShort, ee && !k), U(_, P.pipModeTall, ee && k), U(_, P.hidden, Y), U(_, P.multiPIPMode, et), _)),
                noBorder: !ee
            }, (t = I, n = h, a = y, s = $, l = eo, ee && null != B && ((null == z ? void 0 : z.type) === C.ParticipantTypes.ACTIVITY || s) ? (null === (c = B.config) || void 0 === c ? void 0 : c.useInteractivePIP) ? r.createElement(g.InteractivePIPHeader, {
                onJumpToChannel: en,
                applicationId: B.applicationId,
                channel: o,
                showControls: !a,
                onMouseDown: t,
                onMouseMove: t,
                onMouseLeave: n,
                onToggleHeight: er,
                isExpanded: k,
                hideExpandedButton: s
            }) : s ? r.createElement(r.Fragment, null, r.createElement(g.TextActivityPIPOverlay, {
                idle: a,
                onMouseMove: t,
                onMouseDown: t,
                onMouseLeave: n,
                onJumpToChannel: function() {
                    en(), (0, O.updateActivityPanelMode)(N.ActivityPanelModes.PANEL)
                },
                channel: o,
                applicationId: B.applicationId,
                users: l
            })) : null == z ? null : r.createElement(r.Fragment, null, r.createElement("div", {
                onMouseMove: t,
                onMouseDown: t,
                onMouseLeave: n,
                className: P.clickShield,
                onDoubleClick: en
            }), r.createElement(g.PIPOverlay, {
                idle: a,
                onMouseMove: t,
                onMouseDown: t,
                onMouseLeave: n,
                onJumpToChannel: en,
                channel: o,
                applicationId: B.applicationId,
                selectedParticipant: z
            })) : null), A ? r.createElement(u.Spinner, {
                className: i()(P.iframe, (U(E = {}, P.pipModeShort, ee && !k), U(E, P.pipModeTall, ee && k), E))
            }) : r.createElement(v.EmbedIFrameWithLoadingBackground, {
                allowPopups: b.APPLICATIONS_WITH_ALLOWED_POPUPS.has(B.applicationId),
                referrerPolicy: b.APPLICATIONS_WITH_NO_REFFERER.has(B.applicationId) ? "no-referrer" : "origin",
                url: B.url,
                queryParams: ei,
                className: i()(P.iframe, (U(m = {}, P.pipModeShort, ee && !k), U(m, P.pipModeTall, ee && k), U(m, P.pipNonInteractive, ee && !(null === (d = B.config) || void 0 === d ? void 0 : d.useInteractivePIP)), m)),
                shouldRefocus: !ee && V
            }), !ee && r.createElement(g.TileOverlay, {
                participantsOpen: q,
                showToggleParticipants: !1,
                channelId: o.id
            }))
        })
    }
    t.default = function(e) {
        var t = e.channel,
            n = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["channel"]),
            o = (0, A.useEmbeddedActivityLifecycle)(t).isLoading;
        return r.createElement(w, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    U(e, t, n[t])
                })
            }
            return e
        }({
            channel: t,
            isLoading: o
        }, n))
    }
}