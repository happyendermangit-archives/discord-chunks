function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140");
    t.default = {
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