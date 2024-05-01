function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_AUTO_ARCHIVE_DURATION: function() {
            return u
        },
        FORUM_POST_CREATION_AUTOMOD_ERRORS: function() {
            return S
        },
        FORUM_POST_CREATION_UPLOAD_ERRORS: function() {
            return f
        },
        MAX_THREAD_MEMBERS_PREVIEW: function() {
            return c
        },
        MAX_THREAD_MESSAGE_COUNT: function() {
            return _
        },
        MAX_THREAD_MESSAGE_COUNT_OLD: function() {
            return d
        },
        MAX_THREAD_UNREAD_MESSAGE_COUNT: function() {
            return E
        },
        OpenThreadAnalyticsLocations: function() {
            return i
        },
        ThreadMemberFlags: function() {
            return I
        },
        ThreadSortOrderReadableForAnalytics: function() {
            return r
        },
        getThreadNotificationOptions: function() {
            return T
        }
    }), n("47120");
    var i, r, s, a, o = n("981631"),
        l = n("689938");
    let u = 4320,
        d = 50,
        _ = 1e5,
        c = 50,
        E = 25,
        I = {
            HAS_INTERACTED: 1,
            ALL_MESSAGES: 2,
            ONLY_MENTIONS: 4,
            NO_MESSAGES: 8
        };

    function T() {
        return [{
            setting: I.ALL_MESSAGES,
            label: l.default.Messages.FORM_LABEL_ALL_MESSAGES
        }, {
            setting: I.ONLY_MENTIONS,
            label: l.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
        }, {
            setting: I.NO_MESSAGES,
            label: l.default.Messages.FORM_LABEL_NOTHING
        }]
    }(s = i || (i = {})).EMBED = "Embed", s.BROWSER = "Thread Browser", s.POPOUT = "Active Threads Popout", s.CHANNEL_LIST = "Channel List", s.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal", s.INBOX = "Inbox", s.FORUM = "Forum", s.VOICE_AUTO_OPEN = "Voice Auto Open", (a = r || (r = {})).LATEST_ACTIVITY = "Last Message", a.CREATION_DATE = "Creation";
    let f = new Set([o.AbortCodes.TOO_MANY_ATTACHMENTS, o.AbortCodes.EXPLICIT_CONTENT, o.AbortCodes.ENTITY_TOO_LARGE, o.AbortCodes.EXPLICIT_CONTENT]),
        S = new Set([o.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, o.AbortCodes.AUTOMOD_TITLE_BLOCKED])
}