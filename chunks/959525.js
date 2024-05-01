function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FORMAT_RE: function() {
            return i
        },
        MARKDOWN_RE: function() {
            return r
        },
        UNSAFE_RE: function() {
            return a
        },
        UNSAFE_RE_ALL: function() {
            return s
        }
    });
    let i = /\{.+?\}/,
        r = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/,
        a = /!!/,
        s = /!!/g
}