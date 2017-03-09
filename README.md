# Symbol Library

[![Circle CI](https://circleci.com/gh/trailheadlabs/symbol-library.svg?style=svg)](https://circleci.com/gh/trailheadlabs/symbol-library)

National Park Service [map symbols](http://www.nps.gov/hfc/carto/map-symbols.cfm) optimized for the web.

## New Symbols

Add requests for new symbols as an [issue](https://github.com/trailheadlabs/symbol-library/issues/new). Newly developed symbols will be bundled into periodic releases.

## Versioning

The Symbol Library uses a semantic versioning scheme:

* 0.0.z: Bugfixes and modifications
* 0.y.0: Icons added
* x.0.0: Icons removed, sprite scheme changed, or major features added

## File Structure

This repository was originally forked from Mapbox's [Maki](https://github.com/mapbox/maki) project, so the file structure is similar.

### src

Source [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) files are in the `src` subdirectory. To create pixel-perfect icons at different sizes, each icon is designed 6 times to support two different use cases:

1. At 12, 18, and 24 pixels wide/tall for use in [OuterSpatial Builder](https://github.com/trailheadlabs/outerspatial-builder/)
2. At 16, 24, and 32 pixels wide/tall, with a drop shadow, for use in basemaps

### renders

PNG renders of all of the SVGs are in the `renders` directory. High-resolution (aka retina) versions of each icon are present as well, named using the common `@2x` convention.

### render.sh

You can use the SVGs and PNGs in this repository as they are without building anything, however a render script is included to assist designers/developers who want to modify or create new icons. It will render SVGs to PNGs at 100% and 200% resolution, create sprites used by [OuterSpatial.js](https://github.com/trailheadlabs/outerspatial.js) and [OuterSpatial Builder](https://github.com/trailheadlabs/outerspatial-builder), and generate corresponding CSS styles for the sprites.

The script requires Node, [Bash](http://www.gnu.org/software/bash/bash.html), [Inkscape](http://inkscape.org), and [ImageMagick](http://www.imagemagick.org/). In addition, each icon must have an appropriate entry in `www/npmaki.json` to be rendered correctly.

After installing the required prerequisites, you can run the script like this:

    cd symbol-library
    npm install
    bash render.sh
