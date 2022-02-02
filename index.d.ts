declare module "@neutrixs/colorthief" {
    type color = [number, number, number];
    export default class ColorThief {
        getColor: (img: HTMLImageElement, quality?: number) => color;
        getPalette: (
            img: HTMLImageElement,
            colorCount?: number,
            quality?: number
        ) => color[];
    }
}
