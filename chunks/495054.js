function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CLIENT_THEMES_DATA_ATTRIBUTE: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("15949"),
        a = "data-client-themes",
        u = "custom-theme-background",
        s = function() {
            var e = (0, o.useStateFromStores)([i.default], function() {
                return i.default.getLinearGradient()
            });
            return (0, r.useMemo)(function() {
                return null == e ? null : ".".concat(u, " {\n      --custom-theme-background: ").concat(e, ";\n    }")
            }, [e])
        };
    t.default = function() {
        var e = s();
        return null === e ? {
            clientThemesCSS: "",
            clientThemesClassName: ""
        } : {
            clientThemesCSS: e,
            clientThemesClassName: u
        }
    }
}