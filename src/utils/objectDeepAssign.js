//深拷贝对象
export const deepCopyObj = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

//合并对象并返回新的对象
const deepAssignFn = (function(){
    function isObj(x){
        var type = typeof x;
        return x !== null && (type === 'object' || type === 'function');
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
        if (val === null || val === undefined) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        return Object(val);
    }

    function assignKey(to, from, key) {
        var val = from[key];

        if (val === undefined || val === null) {
            return;
        }

        if (hasOwnProperty.call(to, key)) {
            if (to[key] === undefined || to[key] === null) {
                throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
            }
        }

        if (!hasOwnProperty.call(to, key) || !isObj(val)) {
            to[key] = val;
        } else {
            to[key] = assign(Object(to[key]), from[key]);
        }
    }

    function assign(to, from) {
        if (to === from) {
            return to;
        }

        from = Object(from);

        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                assignKey(to, from, key);
            }
        }

        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(from);

            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    assignKey(to, from, symbols[i]);
                }
            }
        }

        return to;
    }

    function deepAssign(target) {
        target = toObject(target);

        for (var s = 1; s < arguments.length; s++) {
            assign(target, arguments[s]);
        }

        return target;
    }
    return deepAssign;
})();
export const objectDeepAssign = (target, ...sourceArr) => {
    let newTarget = deepCopyObj(target);
    return deepAssignFn(newTarget, ...sourceArr);
}
