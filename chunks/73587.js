function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_AUTO_ARCHIVE_DURATION: function() {
            return l
        },
        FORUM_POST_CREATION_AUTOMOD_ERRORS: function() {
            return y
        },
        FORUM_POST_CREATION_UPLOAD_ERRORS: function() {
            return m
        },
        MAX_THREAD_MEMBERS_PREVIEW: function() {
            return d
        },
        MAX_THREAD_MESSAGE_COUNT: function() {
            return f
        },
        MAX_THREAD_MESSAGE_COUNT_OLD: function() {
            return c
        },
        MAX_THREAD_UNREAD_MESSAGE_COUNT: function() {
            return _
        },
        OpenThreadAnalyticsLocations: function() {
            return i
        },
        ThreadMemberFlags: function() {
            return E
        },
        ThreadSortOrderReadableForAnalytics: function() {
            return a
        },
        getThreadNotificationOptions: function() {
            return p
        }
    });
    var r, o, i, a, u = n("281767"),
        s = n("941504"),
        l = 4320,
        c = 50,
        f = 1e5,
        d = 50,
        _ = 25,
        E = {
            HAS_INTERACTED: 1,
            ALL_MESSAGES: 2,
            ONLY_MENTIONS: 4,
            NO_MESSAGES: 8
        };

    function p() {
        return [{
            setting: E.ALL_MESSAGES,
            label: s.default.Messages.FORM_LABEL_ALL_MESSAGES
        }, {
            setting: E.ONLY_MENTIONS,
            label: s.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
        }, {
            setting: E.NO_MESSAGES,
            label: s.default.Messages.FORM_LABEL_NOTHING
        }]
    }(r = i || (i = {})).EMBED = "Embed", r.BROWSER = "Thread Browser", r.POPOUT = "Active Threads Popout", r.CHANNEL_LIST = "Channel List", r.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal", r.INBOX = "Inbox", r.FORUM = "Forum", r.VOICE_AUTO_OPEN = "Voice Auto Open", (o = a || (a = {})).LATEST_ACTIVITY = "Last Message", o.CREATION_DATE = "Creation";
    var m = new Set([u.AbortCodes.TOO_MANY_ATTACHMENTS, u.AbortCodes.EXPLICIT_CONTENT, u.AbortCodes.ENTITY_TOO_LARGE, u.AbortCodes.EXPLICIT_CONTENT]),
        y = new Set([u.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, u.AbortCodes.AUTOMOD_TITLE_BLOCKED])
}