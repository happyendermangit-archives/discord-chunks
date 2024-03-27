function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-02_emoji_suggestions",
        label: "Emoji Suggestions Experiment",
        defaultConfig: {
            isEmojiSuggestionsEnabled: !1,
            isEmojiCaptionsEnabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enables Emoji Suggestions without Captions",
            config: {
                isEmojiSuggestionsEnabled: !0,
                isEmojiCaptionsEnabled: !1
            }
        }, {
            id: 2,
            label: "Enables Emoji Suggestions with Captions",
            config: {
                isEmojiSuggestionsEnabled: !0,
                isEmojiCaptionsEnabled: !0
            }
        }]
    });
    t.default = i
}