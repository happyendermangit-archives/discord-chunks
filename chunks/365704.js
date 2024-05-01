function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AUTOCOMPLETE_OPTIONS: function() {
            return I
        },
        AUTOCOMPLETE_PRIORITY: function() {
            return E
        }
    });
    var i = n("590921"),
        r = n("521090"),
        a = n("126226"),
        s = n("116364"),
        o = n("290401"),
        l = n("341561"),
        u = n("277981"),
        d = n("420001"),
        _ = n("65090"),
        c = n("591236");
    let E = [i.AutocompleteOptionTypes.CHOICES, i.AutocompleteOptionTypes.GIFS, i.AutocompleteOptionTypes.COMMAND_OPTIONS, i.AutocompleteOptionTypes.EMOJIS_AND_STICKERS, i.AutocompleteOptionTypes.REACTIONS, i.AutocompleteOptionTypes.CHANNELS, i.AutocompleteOptionTypes.MENTIONS, i.AutocompleteOptionTypes.COMMANDS, i.AutocompleteOptionTypes.LEGACY_COMMANDS],
        I = {
            [i.AutocompleteOptionTypes.CHANNELS]: r.default,
            [i.AutocompleteOptionTypes.COMMANDS]: a.default,
            [i.AutocompleteOptionTypes.COMMAND_OPTIONS]: o.default,
            [i.AutocompleteOptionTypes.CHOICES]: s.default,
            [i.AutocompleteOptionTypes.EMOJIS_AND_STICKERS]: l.default,
            [i.AutocompleteOptionTypes.GIFS]: u.default,
            [i.AutocompleteOptionTypes.LEGACY_COMMANDS]: d.default,
            [i.AutocompleteOptionTypes.MENTIONS]: _.default,
            [i.AutocompleteOptionTypes.REACTIONS]: c.default
        }
}