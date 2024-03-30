function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815");
    t.default = {
        clearDraft: function(e, t) {
            r.default.dispatch({
                type: "DRAFT_CLEAR",
                channelId: e,
                draftType: t
            })
        },
        saveDraft: function(e, t, n) {
            r.default.dispatch({
                type: "DRAFT_SAVE",
                channelId: e,
                draft: t,
                draftType: n
            })
        },
        changeDraft: function(e, t, n) {
            r.default.dispatch({
                type: "DRAFT_CHANGE",
                channelId: e,
                draft: t,
                draftType: n
            })
        },
        changeThreadSettings: function(e, t) {
            r.default.dispatch({
                type: "THREAD_SETTINGS_DRAFT_CHANGE",
                channelId: e,
                draft: t
            })
        }
    }
}