function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPickerUploadTreatment: function() {
            return o
        }
    });
    var r, o, i = n("94498");
    (r = o || (o = {}))[r.NONE = 0] = "NONE", r[r.WITH_TOP_LIST = 1] = "WITH_TOP_LIST", r[r.WITHOUT_TOP_LIST = 2] = "WITHOUT_TOP_LIST";
    var a = (0, i.createExperiment)({
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
    t.default = a
}