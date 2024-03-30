function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getTimestampString: function() {
            return p.default
        },
        trackActiveThreadsPopoutOpened: function() {
            return O
        },
        trackThreadBrowserOpened: function() {
            return h
        },
        trackThreadBrowserTab: function() {
            return I
        },
        trackThreadNotificationSettingsUpdated: function() {
            return T
        },
        useLastMessageTimestamp: function() {
            return S
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("898511"),
        a = n("140817"),
        u = n("208885"),
        s = n("879547"),
        l = n("848957"),
        c = n("870331"),
        f = n("947248"),
        d = n("744542"),
        _ = n("523018"),
        E = n("956774"),
        p = n("587751"),
        m = n("73587"),
        y = n("281767");
    n("941504");

    function I() {
        (0, a.trackWithMetadata)(y.AnalyticEvents.THREAD_BROWSER_TAB_CHANGED)
    }

    function h() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
        (0, a.trackWithMetadata)(y.AnalyticEvents.OPEN_MODAL, {
            type: "Thread Browser",
            location_section: e
        })
    }

    function O() {
        c.default.track(y.AnalyticEvents.OPEN_POPOUT, {
            type: "Active Threads Popout"
        })
    }

    function T(e, t) {
        var n, r, o = (0, u.collectThreadMetadata)(e);
        if (null != o) {
            var i, a, s = e.getGuildId(),
                _ = e.parent_id,
                p = (0, d.getCurrentChannelSettings)(s, _),
                I = function(e) {
                    if ((0, f.hasFlag)(e, m.ThreadMemberFlags.ALL_MESSAGES)) return d.MessageNotificationSettings[y.UserNotificationSettings.ALL_MESSAGES];
                    if ((0, f.hasFlag)(e, m.ThreadMemberFlags.ONLY_MENTIONS)) return d.MessageNotificationSettings[y.UserNotificationSettings.ONLY_MENTIONS];
                    if ((0, f.hasFlag)(e, m.ThreadMemberFlags.NO_MESSAGES)) return d.MessageNotificationSettings[y.UserNotificationSettings.NO_MESSAGES];
                    return d.MessageNotificationSettings[y.UserNotificationSettings.NULL]
                },
                h = null !== (n = E.default.flags(e.id)) && void 0 !== n ? n : 0,
                O = I(h),
                T = E.default.isMuted(e.id),
                S = (0, d.muteConfigToTimestamp)(E.default.getMuteConfig(e.id));
            o.can_send_message;
            var v = (i = function(e) {
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
            }({}, function(e, t) {
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
            }(o, ["can_send_message"])), a = (a = {
                channel_id: e.id,
                guild_id: s,
                parent_id: _,
                channel_type: e.type,
                has_interacted_with_thread: (h & m.ThreadMemberFlags.HAS_INTERACTED) != 0,
                parent_is_muted: l.default.isGuildOrCategoryOrChannelMuted(s, _),
                old_thread_notification_setting: O,
                new_thread_notification_setting: null != t.flags ? I(t.flags) : O,
                parent_notification_setting: p.channel_message_notification_settings,
                old_thread_is_muted: T,
                new_thread_is_muted: null !== (r = t.muted) && void 0 !== r ? r : T,
                old_thread_muted_until: S,
                new_thread_muted_until: null != t.mute_config ? (0, d.muteConfigToTimestamp)(t.mute_config) : S
            }, a), Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(a)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
            }), i);
            c.default.track(y.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, v)
        }
    }
    var S = function(e) {
        var t, n, r = (0, i.useStateFromStores)([s.default], function() {
                return s.default.lastMessageId(e.id)
            }),
            a = null != r ? _.default.extractTimestamp(r) : null,
            u = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
            l = null != u ? o()(u).valueOf() : null;
        return null !== (n = null != a ? a : l) && void 0 !== n ? n : _.default.extractTimestamp(e.id)
    }
}