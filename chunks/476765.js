function(N, I, A) {
    "use strict";
    A.r(I), A.d(I, {
        uid: function() {
            return e
        },
        useUID: function() {
            return E
        },
        UID: function() {
            return V
        }
    });
    var O = A("995008"),
        T = A.n(O),
        _ = A("775560");
    let e = function() {
            let N = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return T(N)
        },
        E = () => (0, _.useLazyValue)(() => e()),
        V = N => {
            let {
                children: I
            } = N;
            return I(E())
        }
}