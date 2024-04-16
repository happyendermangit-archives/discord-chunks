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
        theme: null !== (i = (0, a.default)()) && void 0 !== i ? i : o.ThemeTypes.DARK,
        primaryColor: null,
        secondaryColor: null
    });

    function u(e) {
        let {
            profileType: t,
            theme: n,
            primaryColor: i,
            secondaryColor: a,
            children: o
        } = e, u = s.useMemo(() => ({
            profileType: t,
            theme: n,
            primaryColor: i,
            secondaryColor: a
        }), [t, n, i, a]);
        return (0, r.jsx)(l.Provider, {
            value: u,
            children: o
        })
    }
    let d = () => s.useContext(l)
}