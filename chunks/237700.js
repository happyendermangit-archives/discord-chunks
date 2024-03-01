function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AUTOCOMPLETE_PRIORITY: function() {
            return m
        },
        AUTOCOMPLETE_OPTIONS: function() {
            return p
        }
    });
    var l = n("851745"),
        i = n("76942"),
        a = n("825871"),
        s = n("116189"),
        r = n("714343"),
        o = n("84872"),
        u = n("729079"),
        d = n("845247"),
        c = n("122270"),
        f = n("684396");
    let m = [l.AutocompleteOptionTypes.CHOICES, l.AutocompleteOptionTypes.GIFS, l.AutocompleteOptionTypes.COMMAND_OPTIONS, l.AutocompleteOptionTypes.EMOJIS_AND_STICKERS, l.AutocompleteOptionTypes.REACTIONS, l.AutocompleteOptionTypes.CHANNELS, l.AutocompleteOptionTypes.MENTIONS, l.AutocompleteOptionTypes.COMMANDS, l.AutocompleteOptionTypes.LEGACY_COMMANDS],
        p = {
            [l.AutocompleteOptionTypes.CHANNELS]: i.default,
            [l.AutocompleteOptionTypes.COMMANDS]: a.default,
            [l.AutocompleteOptionTypes.COMMAND_OPTIONS]: r.default,
            [l.AutocompleteOptionTypes.CHOICES]: s.default,
            [l.AutocompleteOptionTypes.EMOJIS_AND_STICKERS]: o.default,
            [l.AutocompleteOptionTypes.GIFS]: u.default,
            [l.AutocompleteOptionTypes.LEGACY_COMMANDS]: d.default,
            [l.AutocompleteOptionTypes.MENTIONS]: c.default,
            [l.AutocompleteOptionTypes.REACTIONS]: f.default
        }
}