
export const isArrayEmpty = <T>(arr: T[]) => {
    if (!Array.isArray(arr)) {
        return false;
    }
    return arr.length < 1;
};


export const isObject = (item: unknown): item is object => {
    return (
        typeof item === 'object' &&
        !Array.isArray(item) &&
        !(item instanceof Date) &&
        item !== null
    );
};

export const isExists = <T>(item: T | undefined | null): item is T => {
    return typeof item !== 'undefined' && item !== null;
};

export const isDateObject = (item: unknown): item is Date => {
    return typeof item === 'object' && item instanceof Date;
};

export const isObjectEmpty = (obj: object) => {
    if (!isObject(obj)) {
        return true;
    }

    return Object.getOwnPropertyNames(obj).length === 0;
};

export function isDeepEqual(
    obj1: Record<string, unknown>,
    obj2: Record<string, unknown>
): boolean {
    if (!isObject(obj1) || !isObject(obj2)) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    return keys1.reduce((isEqual, key) => {
        if (isEqual === false) return false;

        const isObjects = isObject(obj1[key]) && isObject(obj2[key]);
        if (isObjects) {
            return isDeepEqual(
                obj1[key] as Record<string, unknown>,
                obj2[key] as Record<string, unknown>
            );
        }

        return obj1[key] === obj2[key];
    }, true);
}

export function isDeepEqualArray(
    arr1: Record<string, unknown>[],
    arr2: Record<string, unknown>[]
): boolean {
    if (arr1.length !== arr2.length) return false;

    return arr1.every((obj1, index) => {
        const obj2 = arr2[index];
        return isDeepEqual(obj1, obj2);
    });
}

type VariableTypes = string | number | Date | never[] | object;

export const deepEqual = (a: VariableTypes, b: VariableTypes): boolean => {
    if (a === b) {
        return true;
    }

    if (
        typeof a !== 'object' ||
        typeof b !== 'object' ||
        a === null ||
        b === null
    ) {
        return false;
    }

    if (isDateObject(a) && isDateObject(b)) {
        return a.getTime() === b.getTime();
    }

    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }

        return a.every((value, index) => deepEqual(value, b[index]));
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    return keysA.every((key) => {
        if (!keysB.includes(key)) {
            return false;
        }

        const valueA = a[key as keyof typeof a];
        const valueB = b[key as keyof typeof b];

        if (typeof valueA !== typeof valueB) {
            return false;
        }

        return deepEqual(valueA, valueB);
    });
};
