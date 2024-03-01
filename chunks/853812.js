function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        FORMAT_RE: function() {
            return t
        },
        MARKDOWN_RE: function() {
            return o
        },
        UNSAFE_RE: function() {
            return n
        },
        UNSAFE_RE_ALL: function() {
            return r
        }
    });
    let t = /\{.+?\}/,
        o = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/,
        n = /!!/,
        r = /!!/g
}