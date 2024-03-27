function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        ThemeExtends: function() {
            return o
        }
    }), e("47120");
    let I = Object.freeze({
            DARK: "dark",
            LIGHT: "light",
            MIDNIGHT: "midnight",
            DARKER: "darker"
        }),
        o = new Map([
            [I.MIDNIGHT, I.DARKER],
            [I.DARKER, I.DARK]
        ]);
    E.default = I
}