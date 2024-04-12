function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileThemeContextProvider: function() {
            return u
        },
        useUserProfileThemeContext: function() {
            return d
        }
    });
    var i, r = n("735250"),
        s = n("470079"),
        a = n("541049"),
        o = n("231338");
    let l = s.createContext({
        profileType: null,
        primaryProfileColor: null,
        profileTheme: null !== (i = (0, a.default)()) && void 0 !== i ? i : o.ThemeTypes.DARK
    });

    function u(e) {
        let {
            profileType: t,
            profileTheme: n,
            primaryProfileColor: i,
            children: a
        } = e, o = s.useMemo(() => ({
            profileType: t,
            profileTheme: n,
            primaryProfileColor: i
        }), [t, n, i]);
        return (0, r.jsx)(l.Provider, {
            value: o,
            children: a
        })
    }
    let d = () => s.useContext(l)
}