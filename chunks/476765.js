function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
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
            let I = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return T(I)
        },
        E = () => (0, _.useLazyValue)(() => e()),
        V = I => {
            let {
                children: N
            } = I;
            return N(E())
        }
}