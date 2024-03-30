function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AUTOCOMPLETE_OPTIONS: function() {
            return m
        },
        AUTOCOMPLETE_PRIORITY: function() {
            return p
        }
    });
    var r, o = n("209610"),
        i = n("743140"),
        a = n("875686"),
        u = n("227082"),
        s = n("224278"),
        l = n("531646"),
        c = n("360037"),
        f = n("459521"),
        d = n("631231"),
        _ = n("142767");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var p = [o.AutocompleteOptionTypes.CHOICES, o.AutocompleteOptionTypes.GIFS, o.AutocompleteOptionTypes.COMMAND_OPTIONS, o.AutocompleteOptionTypes.EMOJIS_AND_STICKERS, o.AutocompleteOptionTypes.REACTIONS, o.AutocompleteOptionTypes.CHANNELS, o.AutocompleteOptionTypes.MENTIONS, o.AutocompleteOptionTypes.COMMANDS, o.AutocompleteOptionTypes.LEGACY_COMMANDS],
        m = (E(r = {}, o.AutocompleteOptionTypes.CHANNELS, i.default), E(r, o.AutocompleteOptionTypes.COMMANDS, a.default), E(r, o.AutocompleteOptionTypes.COMMAND_OPTIONS, s.default), E(r, o.AutocompleteOptionTypes.CHOICES, u.default), E(r, o.AutocompleteOptionTypes.EMOJIS_AND_STICKERS, l.default), E(r, o.AutocompleteOptionTypes.GIFS, c.default), E(r, o.AutocompleteOptionTypes.LEGACY_COMMANDS, f.default), E(r, o.AutocompleteOptionTypes.MENTIONS, d.default), E(r, o.AutocompleteOptionTypes.REACTIONS, _.default), r)
}