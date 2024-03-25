function(e, t, n) {
    "use strict";
    var i, r, o, s;
    n.r(t), n.d(t, {
        MESSAGE_GROUP_SPACING: function() {
            return l
        },
        DEFAULT_COZY_SPACING: function() {
            return a
        },
        DEFAULT_COMPACT_SPACING: function() {
            return u
        },
        DEFAULT_POPOUTS: function() {
            return c
        },
        MESSAGE_PADDING: function() {
            return d
        },
        PLACEHOLDER_BUFFER: function() {
            return _
        },
        NEW_MESSAGE_BAR_BUFFER: function() {
            return f
        },
        NEW_MESSAGE_BAR_BUFFER_LARGE: function() {
            return S
        },
        NEW_MESSAGE_BAR_ID: function() {
            return E
        },
        SPOILER_ATTACHMENT_PREFIX: function() {
            return g
        },
        FileUploadErrorTypes: function() {
            return i
        },
        DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: function() {
            return m
        }
    }), n("49111");
    let l = [0, 4, 8, 16, 24],
        a = 16,
        u = 0,
        c = Object.freeze({
            referencedAvatarProfile: !1,
            referencedUsernameProfile: !1,
            interactionAvatarProfile: !1,
            interactionUsernameProfile: !1,
            interactionData: !1,
            avatarProfile: !1,
            usernameProfile: !1,
            emojiPicker: !1,
            emojiBurstPicker: !1,
            moreUtilities: !1,
            contextMenu: !1
        }),
        d = 16,
        _ = 16,
        f = 32,
        S = 64,
        E = "---new-messages-bar",
        g = "SPOILER_";
    (o = i || (i = {})).ERROR_SOURCE_UNKNOWN = "ERROR_SOURCE_UNKNOWN", o.PRECOMPRESSION_SUM_TOO_LARGE = "PRECOMPRESSION_SUM_TOO_LARGE", o.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", o.POSTCOMPRESSION_SUM_TOO_LARGE = "POSTCOMPRESSION_SUM_TOO_LARGE", o.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", o.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR = "UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR", o.EXPLICIT_CONTENT = "EXPLICIT_CONTENT", (s = r || (r = {})).SYSTEM_DM_TAG_SYSTEM_TYPE = "a", s.BOT_TAG_SERVER_TYPE = "b", s.AI_TAG_TYPE = "c", s.BOT_TAG_BOT_TYPE = "d", s.REMIXING_TYPE = "e", s.POLL_TYPE = "g";
    let m = 209715200
}