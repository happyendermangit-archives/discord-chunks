function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        DEFAULT_COMPACT_SPACING: function() {
            return u
        },
        DEFAULT_COZY_SPACING: function() {
            return l
        },
        DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: function() {
            return S
        },
        DEFAULT_POPOUTS: function() {
            return d
        },
        FileUploadErrorTypes: function() {
            return i
        },
        MESSAGE_GROUP_SPACING: function() {
            return o
        },
        MESSAGE_PADDING: function() {
            return _
        },
        NEW_MESSAGE_BAR_BUFFER: function() {
            return E
        },
        NEW_MESSAGE_BAR_BUFFER_LARGE: function() {
            return I
        },
        NEW_MESSAGE_BAR_ID: function() {
            return T
        },
        PLACEHOLDER_BUFFER: function() {
            return c
        },
        SPOILER_ATTACHMENT_PREFIX: function() {
            return f
        }
    }), n("981631");
    let o = [0, 4, 8, 16, 24],
        l = 16,
        u = 0,
        d = Object.freeze({
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
        _ = 16,
        c = 16,
        E = 32,
        I = 64,
        T = "---new-messages-bar",
        f = "SPOILER_";
    (s = i || (i = {})).ERROR_SOURCE_UNKNOWN = "ERROR_SOURCE_UNKNOWN", s.PRECOMPRESSION_SUM_TOO_LARGE = "PRECOMPRESSION_SUM_TOO_LARGE", s.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", s.POSTCOMPRESSION_SUM_TOO_LARGE = "POSTCOMPRESSION_SUM_TOO_LARGE", s.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", s.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR = "UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR", s.EXPLICIT_CONTENT = "EXPLICIT_CONTENT", (a = r || (r = {})).SYSTEM_DM_TAG_SYSTEM_TYPE = "a", a.BOT_TAG_SERVER_TYPE = "b", a.AI_TAG_TYPE = "c", a.BOT_TAG_BOT_TYPE = "d", a.REMIXING_TYPE = "e", a.POLL_TYPE = "g";
    let S = 209715200
}