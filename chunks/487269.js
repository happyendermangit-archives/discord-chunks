function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getTimestampString: function() {
            return E.default
        },
        trackThreadBrowserTab: function() {
            return p
        },
        trackThreadBrowserOpened: function() {
            return S
        },
        trackActiveThreadsPopoutOpened: function() {
            return v
        },
        trackThreadNotificationSettingsUpdated: function() {
            return T
        },
        useLastMessageTimestamp: function() {
            return I
        }
    }), n("702976");
    var i = n("866227"),
        s = n.n(i),
        r = n("446674"),
        a = n("716241"),
        o = n("701916"),
        l = n("660478"),
        u = n("282109"),
        d = n("599110"),
        c = n("568734"),
        f = n("34676"),
        _ = n("299039"),
        h = n("755624"),
        E = n("319126"),
        g = n("648564"),
        m = n("49111");

    function p() {
        (0, a.trackWithMetadata)(m.AnalyticEvents.THREAD_BROWSER_TAB_CHANGED)
    }

    function S() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
        (0, a.trackWithMetadata)(m.AnalyticEvents.OPEN_MODAL, {
            type: "Thread Browser",
            location_section: e
        })
    }

    function v() {
        d.default.track(m.AnalyticEvents.OPEN_POPOUT, {
            type: "Active Threads Popout"
        })
    }

    function T(e, t) {
        var n, i;
        let s = (0, o.collectThreadMetadata)(e);
        if (null == s) return;
        let r = e.getGuildId(),
            a = e.parent_id,
            l = (0, f.getCurrentChannelSettings)(r, a),
            _ = e => {
                if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ALL_MESSAGES)) return f.MessageNotificationSettings[m.UserNotificationSettings.ALL_MESSAGES];
                if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ONLY_MENTIONS)) return f.MessageNotificationSettings[m.UserNotificationSettings.ONLY_MENTIONS];
                if ((0, c.hasFlag)(e, g.ThreadMemberFlags.NO_MESSAGES)) return f.MessageNotificationSettings[m.UserNotificationSettings.NO_MESSAGES];
                return f.MessageNotificationSettings[m.UserNotificationSettings.NULL]
            },
            E = null !== (n = h.default.flags(e.id)) && void 0 !== n ? n : 0,
            p = _(E),
            S = h.default.isMuted(e.id),
            v = (0, f.muteConfigToTimestamp)(h.default.getMuteConfig(e.id)),
            {
                can_send_message: T,
                ...I
            } = s,
            C = {
                ...I,
                channel_id: e.id,
                guild_id: r,
                parent_id: a,
                channel_type: e.type,
                has_interacted_with_thread: (E & g.ThreadMemberFlags.HAS_INTERACTED) != 0,
                parent_is_muted: u.default.isGuildOrCategoryOrChannelMuted(r, a),
                old_thread_notification_setting: p,
                new_thread_notification_setting: null != t.flags ? _(t.flags) : p,
                parent_notification_setting: l.channel_message_notification_settings,
                old_thread_is_muted: S,
                new_thread_is_muted: null !== (i = t.muted) && void 0 !== i ? i : S,
                old_thread_muted_until: v,
                new_thread_muted_until: null != t.mute_config ? (0, f.muteConfigToTimestamp)(t.mute_config) : v
            };
        d.default.track(m.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, C)
    }
    n("782340");
    let I = e => {
        var t, n;
        let i = (0, r.useStateFromStores)([l.default], () => l.default.lastMessageId(e.id)),
            a = null != i ? _.default.extractTimestamp(i) : null,
            o = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
            u = null != o ? s(o).valueOf() : null;
        return null !== (n = null != a ? a : u) && void 0 !== n ? n : _.default.extractTimestamp(e.id)
    }
}