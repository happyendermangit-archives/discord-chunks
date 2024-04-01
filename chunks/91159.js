function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getTimestampString: function() {
            return T.default
        },
        trackActiveThreadsPopoutOpened: function() {
            return m
        },
        trackThreadBrowserOpened: function() {
            return A
        },
        trackThreadBrowserTab: function() {
            return h
        },
        trackThreadNotificationSettingsUpdated: function() {
            return N
        },
        useLastMessageTimestamp: function() {
            return O
        }
    }), n("789020");
    var i = n("913527"),
        r = n.n(i),
        s = n("442837"),
        a = n("367907"),
        o = n("731429"),
        l = n("306680"),
        u = n("9156"),
        d = n("626135"),
        _ = n("630388"),
        c = n("621600"),
        E = n("709054"),
        I = n("569471"),
        T = n("814391"),
        f = n("124368"),
        S = n("981631");

    function h() {
        (0, a.trackWithMetadata)(S.AnalyticEvents.THREAD_BROWSER_TAB_CHANGED)
    }

    function A() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
        (0, a.trackWithMetadata)(S.AnalyticEvents.OPEN_MODAL, {
            type: "Thread Browser",
            location_section: e
        })
    }

    function m() {
        d.default.track(S.AnalyticEvents.OPEN_POPOUT, {
            type: "Active Threads Popout"
        })
    }

    function N(e, t) {
        var n, i;
        let r = (0, o.collectThreadMetadata)(e);
        if (null == r) return;
        let s = e.getGuildId(),
            a = e.parent_id,
            l = (0, c.getCurrentChannelSettings)(s, a),
            E = e => {
                if ((0, _.hasFlag)(e, f.ThreadMemberFlags.ALL_MESSAGES)) return c.MessageNotificationSettings[S.UserNotificationSettings.ALL_MESSAGES];
                if ((0, _.hasFlag)(e, f.ThreadMemberFlags.ONLY_MENTIONS)) return c.MessageNotificationSettings[S.UserNotificationSettings.ONLY_MENTIONS];
                if ((0, _.hasFlag)(e, f.ThreadMemberFlags.NO_MESSAGES)) return c.MessageNotificationSettings[S.UserNotificationSettings.NO_MESSAGES];
                return c.MessageNotificationSettings[S.UserNotificationSettings.NULL]
            },
            T = null !== (n = I.default.flags(e.id)) && void 0 !== n ? n : 0,
            h = E(T),
            A = I.default.isMuted(e.id),
            m = (0, c.muteConfigToTimestamp)(I.default.getMuteConfig(e.id)),
            {
                can_send_message: N,
                ...O
            } = r,
            p = {
                ...O,
                channel_id: e.id,
                guild_id: s,
                parent_id: a,
                channel_type: e.type,
                has_interacted_with_thread: (T & f.ThreadMemberFlags.HAS_INTERACTED) != 0,
                parent_is_muted: u.default.isGuildOrCategoryOrChannelMuted(s, a),
                old_thread_notification_setting: h,
                new_thread_notification_setting: null != t.flags ? E(t.flags) : h,
                parent_notification_setting: l.channel_message_notification_settings,
                old_thread_is_muted: A,
                new_thread_is_muted: null !== (i = t.muted) && void 0 !== i ? i : A,
                old_thread_muted_until: m,
                new_thread_muted_until: null != t.mute_config ? (0, c.muteConfigToTimestamp)(t.mute_config) : m
            };
        d.default.track(S.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, p)
    }
    n("689938");
    let O = e => {
        var t, n;
        let i = (0, s.useStateFromStores)([l.default], () => l.default.lastMessageId(e.id)),
            a = null != i ? E.default.extractTimestamp(i) : null,
            o = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
            u = null != o ? r()(o).valueOf() : null;
        return null !== (n = null != a ? a : u) && void 0 !== n ? n : E.default.extractTimestamp(e.id)
    }
}