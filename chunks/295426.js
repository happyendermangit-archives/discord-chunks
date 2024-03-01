function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("913144"),
        a = {
            clearDraft(e, t) {
                i.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: t
                })
            },
            saveDraft(e, t, n) {
                i.default.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: e,
                    draft: t,
                    draftType: n
                })
            },
            changeDraft(e, t, n) {
                i.default.dispatch({
                    type: "DRAFT_CHANGE",
                    channelId: e,
                    draft: t,
                    draftType: n
                })
            },
            changeThreadSettings(e, t) {
                i.default.dispatch({
                    type: "THREAD_SETTINGS_DRAFT_CHANGE",
                    channelId: e,
                    draft: t
                })
            }
        }
}