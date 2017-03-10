# OuterSpatial Symbol Library

[![Circle CI](https://circleci.com/gh/trailheadlabs/outerspatial-symbol-library.svg?style=svg)](https://circleci.com/gh/trailheadlabs/outerspatial-symbol-library)

## New Symbols

Add requests for new symbols as an [issue](https://github.com/trailheadlabs/outerspatial-symbol-library/issues/new). New symbols will be bundled into releases periodically.

## Versioning

The OuterSpatial Symbol Library uses semantic versioning, meaning:

* 0.0.z: Bug fixes and modifications
* 0.y.0: New icon(s) added
* x.0.0: Icon(s) removed, sprite scheme changed, or major features added

## Changelog

- 2.2.3: First Trailhead Labs release
- [3.0.0](https://github.com/trailheadlabs/outerspatial-symbol-library/milestone/1?closed=1): Renamed OuterSpatial Symbol Library
- 3.1.0: Fixes a few icon colors and shapes

## File Structure

This repository was originally forked from Mapbox's [Maki](https://github.com/mapbox/maki) project, so the file structure is similar.

### Source Files

Source [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) files are in the `src` subdirectory. To create pixel-perfect icons at different sizes, each icon is designed 6 times to support two different use cases:

1. At 12, 18, and 24 pixels wide/tall for use in [OuterSpatial Builder](https://github.com/trailheadlabs/outerspatial-builder/)
2. At 16, 24, and 32 pixels wide/tall, with a drop shadow, for display directly on top of basemaps

### Renders

PNG renders of all of the SVGs are in the `renders` directory. High-resolution (aka retina) versions of each icon are present as well, named using the common `@2x` convention.

### Building

You can use the SVGs and PNGs in this repository as they are without building anything. However, a render script is included to assist designers/developers who want to modify or create new icons. It will render SVGs to PNGs at 100% and 200% resolution, create sprites used by [OuterSpatial.js](https://github.com/trailheadlabs/outerspatial.js) and [OuterSpatial Builder](https://github.com/trailheadlabs/outerspatial-builder), and generate corresponding CSS styles for the sprites.

The script requires [Node](https://nodejs.org), [Bash](http://www.gnu.org/software/bash/bash.html), [Inkscape](http://inkscape.org), and [ImageMagick](http://www.imagemagick.org/). In addition, each icon must have an appropriate entry in `./www/outerspatial-builder/outerspatial-symbol-library.json` and `./www/standalone/outerspatial-symbol-library.json` to be rendered correctly.

To install the prerequisites:

1. Install Node
2. Install Homebrew and use it to install the rest of the prerequisites:
   - `brew cask install xquartz`
   - `brew install Caskroom/cask/inkscape`
   - `brew install imagemagick`

Then run the rendering script like this:

```
cd outerspatial-symbol-library
npm install
bash render.sh
```

This will create PNGs from the SVGs at single and double resolution, generate the image sprites, and create the corresponding CSS styles for the sprites. You can also run these commands individually and debug the rendering script using the following commands:

- `bash render.sh pngs`
- `bash render.sh sprites`
- `bash render.sh css`
- `bash render.sh positions`
- `bash render.sh debug`
