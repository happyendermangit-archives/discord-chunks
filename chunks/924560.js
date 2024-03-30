function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        ThemeExtends: function() {
            return t
        }
    });
    var o = Object.freeze({
            DARK: "dark",
            LIGHT: "light",
            MIDNIGHT: "midnight",
            DARKER: "darker"
        }),
        t = new Map([
            [o.MIDNIGHT, o.DARKER],
            [o.DARKER, o.DARK]
        ]);
    E.default = o
}