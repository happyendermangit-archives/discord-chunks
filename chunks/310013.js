function(t, e, n) {
    "use strict";
    var i = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        r = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            arguments: !0,
            arity: !0
        },
        a = "function" == typeof Object.getOwnPropertySymbols;
    t.exports = function(t, e, n) {
        if ("string" != typeof e) {
            var s = Object.getOwnPropertyNames(e);
            a && (s = s.concat(Object.getOwnPropertySymbols(e)));
            for (var o = 0; o < s.length; ++o)
                if (!i[s[o]] && !r[s[o]] && (!n || !n[s[o]])) try {
                    t[s[o]] = e[s[o]]
                } catch (t) {}
        }
        return t
    }
}