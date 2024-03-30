function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeEditor: function() {
            return o
        },
        openEditor: function() {
            return a
        },
        resetBackgroundGradientPreset: function() {
            return s
        },
        resetPreviewClientTheme: function() {
            return l
        },
        updateBackgroundGradientPreset: function() {
            return r
        }
    });
    var i = n("570140");
    let r = e => {
            i.default.dispatch({
                type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                presetId: e
            })
        },
        s = () => {
            i.default.dispatch({
                type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                presetId: null
            })
        },
        a = () => {
            i.default.dispatch({
                type: "CLIENT_THEMES_EDITOR_OPEN"
            })
        },
        o = () => {
            i.default.dispatch({
                type: "CLIENT_THEMES_EDITOR_CLOSE"
            })
        },
        l = () => {
            i.default.dispatch({
                type: "RESET_PREVIEW_CLIENT_THEME"
            })
        }
}