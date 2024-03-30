function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeEditor: function() {
            return u
        },
        openEditor: function() {
            return a
        },
        resetBackgroundGradientPreset: function() {
            return i
        },
        resetPreviewClientTheme: function() {
            return s
        },
        updateBackgroundGradientPreset: function() {
            return o
        }
    });
    var r = n("629815"),
        o = function(e) {
            r.default.dispatch({
                type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                presetId: e
            })
        },
        i = function() {
            r.default.dispatch({
                type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                presetId: null
            })
        },
        a = function() {
            r.default.dispatch({
                type: "CLIENT_THEMES_EDITOR_OPEN"
            })
        },
        u = function() {
            r.default.dispatch({
                type: "CLIENT_THEMES_EDITOR_CLOSE"
            })
        },
        s = function() {
            r.default.dispatch({
                type: "RESET_PREVIEW_CLIENT_THEME"
            })
        }
}