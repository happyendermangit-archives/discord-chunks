function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateBackgroundGradientPreset: function() {
            return i
        },
        resetBackgroundGradientPreset: function() {
            return a
        },
        openEditor: function() {
            return l
        },
        closeEditor: function() {
            return s
        },
        resetPreviewClientTheme: function() {
            return o
        }
    });
    var r = n("913144");
    let i = e => {
            r.default.dispatch({
                type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                presetId: e
            })
        },
        a = () => {
            r.default.dispatch({
                type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                presetId: null
            })
        },
        l = () => {
            r.default.dispatch({
                type: "CLIENT_THEMES_EDITOR_OPEN"
            })
        },
        s = () => {
            r.default.dispatch({
                type: "CLIENT_THEMES_EDITOR_CLOSE"
            })
        },
        o = () => {
            r.default.dispatch({
                type: "RESET_PREVIEW_CLIENT_THEME"
            })
        }
}