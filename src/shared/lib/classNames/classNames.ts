export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    className: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}
