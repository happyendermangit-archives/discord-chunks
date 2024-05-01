function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPickerUploadTreatment: function() {
            return r
        }
    });
    var i, r, a = n("818083");
    (i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.WITH_TOP_LIST = 1] = "WITH_TOP_LIST", i[i.WITHOUT_TOP_LIST = 2] = "WITHOUT_TOP_LIST";
    let s = (0, a.createExperiment)({
        kind: "user",
        id: "2024-02_emoji_picker_upload_desktop",
        label: "Desktop: Consistently show the Emoji Picker Upload button at the start of emoji lists",
        defaultConfig: {
            enabled: !1,
            treatment: 0
        },
        treatments: [{
            id: 1,
            label: "With Top Emojis showing the Upload button",
            config: {
                enabled: !0,
                treatment: 1
            }
        }, {
            id: 2,
            label: "Without Top Emojis showing the Upload button",
            config: {
                enabled: !0,
                treatment: 2
            }
        }]
    });
    t.default = s
}