function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AUTOCOMPLETE_PRIORITY: function() {
            return p
        },
        AUTOCOMPLETE_OPTIONS: function() {
            return m
        }
    });
    var i = n("851745"),
        l = n("76942"),
        a = n("825871"),
        s = n("116189"),
        r = n("714343"),
        o = n("84872"),
        u = n("729079"),
        d = n("845247"),
        c = n("122270"),
        f = n("684396");
    let p = [i.AutocompleteOptionTypes.CHOICES, i.AutocompleteOptionTypes.GIFS, i.AutocompleteOptionTypes.COMMAND_OPTIONS, i.AutocompleteOptionTypes.EMOJIS_AND_STICKERS, i.AutocompleteOptionTypes.REACTIONS, i.AutocompleteOptionTypes.CHANNELS, i.AutocompleteOptionTypes.MENTIONS, i.AutocompleteOptionTypes.COMMANDS, i.AutocompleteOptionTypes.LEGACY_COMMANDS],
        m = {
            [i.AutocompleteOptionTypes.CHANNELS]: l.default,
            [i.AutocompleteOptionTypes.COMMANDS]: a.default,
            [i.AutocompleteOptionTypes.COMMAND_OPTIONS]: r.default,
            [i.AutocompleteOptionTypes.CHOICES]: s.default,
            [i.AutocompleteOptionTypes.EMOJIS_AND_STICKERS]: o.default,
            [i.AutocompleteOptionTypes.GIFS]: u.default,
            [i.AutocompleteOptionTypes.LEGACY_COMMANDS]: d.default,
            [i.AutocompleteOptionTypes.MENTIONS]: c.default,
            [i.AutocompleteOptionTypes.REACTIONS]: f.default
        }
}