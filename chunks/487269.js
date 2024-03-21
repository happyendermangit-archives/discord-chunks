function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getTimestampString: function() {
            return h.default
        },
        trackThreadBrowserTab: function() {
            return p
        },
        trackThreadBrowserOpened: function() {
            return S
        },
        trackActiveThreadsPopoutOpened: function() {
            return T
        },
        trackThreadNotificationSettingsUpdated: function() {
            return v
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
        _ = n("34676"),
        f = n("299039"),
        E = n("755624"),
        h = n("319126"),
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

    function T() {
        d.default.track(m.AnalyticEvents.OPEN_POPOUT, {
            type: "Active Threads Popout"
        })
    }

    function v(e, t) {
        var n, i;
        let s = (0, o.collectThreadMetadata)(e);
        if (null == s) return;
        let r = e.getGuildId(),
            a = e.parent_id,
            l = (0, _.getCurrentChannelSettings)(r, a),
            f = e => {
                if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ALL_MESSAGES)) return _.MessageNotificationSettings[m.UserNotificationSettings.ALL_MESSAGES];
                if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ONLY_MENTIONS)) return _.MessageNotificationSettings[m.UserNotificationSettings.ONLY_MENTIONS];
                if ((0, c.hasFlag)(e, g.ThreadMemberFlags.NO_MESSAGES)) return _.MessageNotificationSettings[m.UserNotificationSettings.NO_MESSAGES];
                return _.MessageNotificationSettings[m.UserNotificationSettings.NULL]
            },
            h = null !== (n = E.default.flags(e.id)) && void 0 !== n ? n : 0,
            p = f(h),
            S = E.default.isMuted(e.id),
            T = (0, _.muteConfigToTimestamp)(E.default.getMuteConfig(e.id)),
            {
                can_send_message: v,
                ...I
            } = s,
            A = {
                ...I,
                channel_id: e.id,
                guild_id: r,
                parent_id: a,
                channel_type: e.type,
                has_interacted_with_thread: (h & g.ThreadMemberFlags.HAS_INTERACTED) != 0,
                parent_is_muted: u.default.isGuildOrCategoryOrChannelMuted(r, a),
                old_thread_notification_setting: p,
                new_thread_notification_setting: null != t.flags ? f(t.flags) : p,
                parent_notification_setting: l.channel_message_notification_settings,
                old_thread_is_muted: S,
                new_thread_is_muted: null !== (i = t.muted) && void 0 !== i ? i : S,
                old_thread_muted_until: T,
                new_thread_muted_until: null != t.mute_config ? (0, _.muteConfigToTimestamp)(t.mute_config) : T
            };
        d.default.track(m.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, A)
    }
    n("782340");
    let I = e => {
        var t, n;
        let i = (0, r.useStateFromStores)([l.default], () => l.default.lastMessageId(e.id)),
            a = null != i ? f.default.extractTimestamp(i) : null,
            o = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
            u = null != o ? s(o).valueOf() : null;
        return null !== (n = null != a ? a : u) && void 0 !== n ? n : f.default.extractTimestamp(e.id)
    }
}