function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_AUTO_ARCHIVE_DURATION: function() {
            return u
        },
        MAX_THREAD_MESSAGE_COUNT_OLD: function() {
            return d
        },
        MAX_THREAD_MESSAGE_COUNT: function() {
            return c
        },
        MAX_THREAD_MEMBERS_PREVIEW: function() {
            return _
        },
        MAX_THREAD_UNREAD_MESSAGE_COUNT: function() {
            return f
        },
        ThreadMemberFlags: function() {
            return E
        },
        OpenThreadAnalyticsLocations: function() {
            return i
        },
        getThreadNotificationOptions: function() {
            return h
        },
        ThreadSortOrderReadableForAnalytics: function() {
            return s
        },
        FORUM_POST_CREATION_UPLOAD_ERRORS: function() {
            return g
        },
        FORUM_POST_CREATION_AUTOMOD_ERRORS: function() {
            return m
        }
    }), n("222007");
    var i, s, r, a, o = n("49111"),
        l = n("782340");
    let u = 4320,
        d = 50,
        c = 1e5,
        _ = 50,
        f = 25,
        E = {
            HAS_INTERACTED: 1,
            ALL_MESSAGES: 2,
            ONLY_MENTIONS: 4,
            NO_MESSAGES: 8
        };

    function h() {
        return [{
            setting: E.ALL_MESSAGES,
            label: l.default.Messages.FORM_LABEL_ALL_MESSAGES
        }, {
            setting: E.ONLY_MENTIONS,
            label: l.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
        }, {
            setting: E.NO_MESSAGES,
            label: l.default.Messages.FORM_LABEL_NOTHING
        }]
    }(r = i || (i = {})).EMBED = "Embed", r.BROWSER = "Thread Browser", r.POPOUT = "Active Threads Popout", r.CHANNEL_LIST = "Channel List", r.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal", r.INBOX = "Inbox", r.FORUM = "Forum", r.VOICE_AUTO_OPEN = "Voice Auto Open", (a = s || (s = {})).LATEST_ACTIVITY = "Last Message", a.CREATION_DATE = "Creation";
    let g = new Set([o.AbortCodes.TOO_MANY_ATTACHMENTS, o.AbortCodes.EXPLICIT_CONTENT, o.AbortCodes.ENTITY_TOO_LARGE, o.AbortCodes.EXPLICIT_CONTENT]),
        m = new Set([o.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, o.AbortCodes.AUTOMOD_TITLE_BLOCKED])
}