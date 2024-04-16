function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CLIENT_THEMES_DATA_ATTRIBUTE: function() {
            return a
        },
        CUSTOM_THEME_BACKGROUND_CLASS_NAME: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("514361");
    let a = "data-client-themes",
        o = "custom-theme-background",
        l = () => {
            let e = (0, r.useStateFromStores)([s.default], () => s.default.getLinearGradient());
            return (0, i.useMemo)(() => null == e ? null : ".".concat(o, " {\n      --custom-theme-background: ").concat(e, ";\n    }"), [e])
        };
    t.default = () => {
        let e = l();
        return null === e ? {
            clientThemesCSS: "",
            clientThemesClassName: ""
        } : {
            clientThemesCSS: e,
            clientThemesClassName: o
        }
    }
}