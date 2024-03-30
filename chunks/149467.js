function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FORMAT_RE: function() {
            return r
        },
        MARKDOWN_RE: function() {
            return o
        },
        UNSAFE_RE: function() {
            return i
        },
        UNSAFE_RE_ALL: function() {
            return a
        }
    });
    var r = /\{.+?\}/,
        o = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/,
        i = /!!/,
        a = /!!/g
}